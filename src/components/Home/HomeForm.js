import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomeForm extends Component {

    render() {

        let subContent = this.props.description;

        if (subContent.length > 40) {
            subContent = subContent.substr(0, 40) + '...';
        } else {
            subContent = this.props.description;
        }
        for (let i = 0; i < 5; i++) {
            return (
                <tr>
                    <td>{this.props.name}</td>
                    <td>{subContent}</td>
                    <td><Link to={"/post/" + this.props.id}>View more</Link></td>
                </tr>
            )
        }
    }
}