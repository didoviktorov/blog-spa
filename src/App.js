import React, {Component} from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "./App.css";
import $ from 'jquery';
// import ListPosts from './components/ListPosts/ListPostsPage';
// import CreatePost from './components/CreatePost/CreatePostPage';
// import Login from './components/Login/LoginPage';
// import logoutUser from './models/user';
// import About from './components/About/AboutPage';
// import Register from './components/Register/RegisterPage';
// import Home from './components/Home/HomePage';
//import Greeting from './components/common/Greeting';
import observer from "./models/observer";
import {Link} from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false, username: ''};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
        // Attach global AJAX "loading" event handlers
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        });

        // Attach a global AJAX error handler
        $(document).ajaxError(
            this.handleAjaxError.bind(this));
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }

    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({loggedIn: true, username: sessionStorage.getItem("username")});
        } else {
            this.setState({loggedIn: false, username: ''});
        }
    }

    render() {
        $('#errorBox').hide();
        let navbar = {};
        if (!this.state.loggedIn) {
            navbar = (
                <div>
                    <nav className="navbar navbar-inverse">
                        <ul className="nav nav-tabs nav-justified">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>
            )
        } else {
            navbar = (
                <div>
                    <nav className="navbar navbar-inverse">
                        <ul className="nav nav-tabs nav-justified">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/listPosts">All Posts</Link></li>
                            <li><Link to="/createPosts">Create Post</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            )
        }

        return (
            <div>
                <Header loggedIn={this.state.loggedIn} username={this.state.username}>
                    {navbar}
                </Header>
                <div id="loadingBox">Loading ...</div>
                <div id="infoBox">Info</div>
                <div id="errorBox">Error</div>

                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default App;
