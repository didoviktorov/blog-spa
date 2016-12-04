import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {userLogin} from '../../models/user';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();

        let newStateValue = {};
        newStateValue[event.target.name] = event.target.value;

        this.setState(newStateValue);
    }
    
    onSubmitHandler(event) {
        event.preventDefault();
        userLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <
                    LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    onSubmit={this.onSubmitHandler}
                    onChange={this.onChangeHandler}
                />
            </div>
        )
    }
}