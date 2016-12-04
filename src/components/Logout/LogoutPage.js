import React, {Component} from 'react';
import {userLogout} from '../../models/user';

export default class LogoutPage extends Component {
    render() {
        userLogout();
        return (
            <div>
                <span>Logout Page</span>
            </div>
        );
    }
}
