import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {userRegister} from '../../models/user';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeat: ''
        };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        userRegister(this.state.username, this.state.password, this.state.repeat);
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <
                    RegisterForm
                    username={this.props.username}
                    password={this.props.password}
                    onSubmit={this.onSubmitHandler}
                />
            </div>
        )
    }
}