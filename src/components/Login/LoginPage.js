import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {userLogin} from '../../models/user';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        userLogin(this.state.username,this.state.password);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <
                    LoginForm
                    username={this.props.username}
                    password={this.props.password}
                    onSubmit={this.onSubmitHandler}
                />
            </div>
        )
    }
}