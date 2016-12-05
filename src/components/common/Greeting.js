import React, {Component} from 'react';

export default class Greeting extends Component {
    render() {
        return (
            <span>Welcome, {this.props.username}!</span>
        )
    }
}