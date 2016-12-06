import React, {Component} from 'react';
import './about.css'

export default class AboutForm extends Component {
    render() {
        return (
            <div className="about">
                <p>This is Single Page App - Team Builder</p>
                <br/>
                <p>Team project for Js Core - JavaScript Application</p>
                <br/>

                <ul>
                    <li>
                        Hristo Stoynov
                    </li>
                    <li>
                        Dido Viktorov
                    </li>
                    <li>
                        Yohan Bogosyan
                    </li>
                    <li>
                        Dimitar Dimitrov
                    </li>
                </ul>
            </div>
        )
    }
}
