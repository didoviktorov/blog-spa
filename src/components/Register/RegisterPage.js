import React, {Component} from 'react';
import RegisterForm from './RegisterForm';

export default class Register extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <
                    RegisterForm
                    username={this.props.username}
                    password={this.props.password}
                    repeat={this.props.repeat}
                />
            </div>
        )
    }
}