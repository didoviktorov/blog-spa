import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {userLogin} from '../../models/user';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', submitDisabled: false };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();

        let newStateValue = {};
        newStateValue[event.target.name] = event.target.value;

        this.setState(newStateValue);
    }
    
    onSubmitHandler(event) {
        event.preventDefault();
        userLogin(this.state.username, this.state.password, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/');
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        )
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
};