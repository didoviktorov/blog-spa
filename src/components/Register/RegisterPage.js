import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {userRegister} from '../../models/user';
// import observer from '../../models/observer';
// import {IndexRoute, Router, Route, browserHistory} from 'react-router';

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
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();

        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
    
    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.password !== this.state.repeat) {
            alert("Passwords don't match");
            return;
        }
        userRegister(this.state.username, this.state.password, this.onSubmitResponse, 'basic');
    }

    onSubmitResponse(result) {
        if (result === true) {
            // Navigate away from register page
            this.context.router.push('/');
        }
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        )
    }
}

Register.contextTypes = {
    router: React.PropTypes.object
};