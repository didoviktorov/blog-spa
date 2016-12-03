import React, {Component} from 'react';
import Header from './components/common/Header';
import ListPosts from './components/ListPosts/ListPostsPage';
import CreatePost from './components/CreatePost/CreatePostPage';
import Login from './components/Login/LoginPage';
import Logout from './components/Logout/LogoutPage';
import About from './components/About/AboutPage';
import Register from './components/Register/RegisterPage';
import Home from './components/Home/HomePage';
import {Link} from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        if (sessionStorage.getItem('username')) {
            return (
                <div>
                    <Header>
                        <nav className="navbar navbar-inverse">
                            <ul className="nav nav-tabs nav-justified">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/listPosts">All Posts</Link></li>
                                <li><Link to="/createPosts">Create Post</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </ul>
                        </nav>
                    </Header>
                    {this.props.children}
                </div>
            )
        } else {
            return (
                <div>
                    <Header>
                        <nav className="navbar navbar-inverse">
                            <ul className="nav nav-tabs nav-justified">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </nav>
                    </Header>
                    {this.props.children}
                </div>
            )
        }
    }
}

export default App;
