import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import ListPosts from './components/ListPosts/ListPostsPage';
import CreatePost from './components/CreatePost/CreatePostPage';
import Login from './components/Login/LoginPage';
import About from './components/About/AboutPage';
import Register from './components/Register/RegisterPage';
import Home from './components/Home/HomePage';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/listPosts" component={ListPosts}/>
            <Route path="/createPosts" component={CreatePost}/>
            <Route path="register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="about" component={About} />
        </Route>
    </Router>,
    document.getElementById('root')
);