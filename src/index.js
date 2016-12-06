import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import ListPosts from './components/ListPosts/ListPostsPage';
import CreatePost from './components/CreatePost/CreatePostPage';
import Login from './components/Login/LoginPage';
import Logout from './components/Logout/LogoutPage';
import About from './components/About/AboutPage';
import Register from './components/Register/RegisterPage';
import Home from './components/Home/HomePage';
import ViewPost from './components/VeiwPost/ViewPostPage';
import EditPost from './components/Edit/EditPage';

function requireAuth(nextState, replaceState) {
    if (!sessionStorage.getItem('username'))
        replaceState('/login')
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/listPosts" component={ListPosts} onEnter={requireAuth}/>
            <Route path="/createPosts" component={CreatePost}/>
            <Route path="/post/:postId" component={ViewPost}></Route>
            <Route path="/edit/:postId" component={EditPost}></Route>
            <Route path="register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="about" component={About} />
            <Route path="logout" component={Logout} />
        </Route>
    </Router>,
    document.getElementById('root')
);