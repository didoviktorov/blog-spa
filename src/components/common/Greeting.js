import React, {Component} from 'react';
import './greeting.css';

export default class Greeting extends Component {
    render() {
        if (this.props.username === '' || this.props.username === undefined) {
            return null;
        } else {
            return (
                <span className="greeting">Welcome, {this.props.username}</span>
            );
        }
    }
}