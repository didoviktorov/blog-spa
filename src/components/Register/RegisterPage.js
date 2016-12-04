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
        userRegister(this.state.username, this.state.password, this.state.repeat);
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <
                    RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    onSubmit={this.onSubmitHandler}
                    onChange={this.onChangeHandler}
                />
            </div>
        )
    }
}