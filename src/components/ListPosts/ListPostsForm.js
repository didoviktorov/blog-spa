import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Post extends Component {
    render() {
        let subContent = this.props.description;

        if(subContent.length > 30) {
            subContent = subContent.substr(0, 25) + '...';
        } else {
            subContent = this.props.description;
        }

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{subContent}</td>
                <td>
                    <Link to={"/post/" + this.props.id}>View more</Link>
                    <br />
                    <Link to={"/post/delete/" + this.props.id}>Delete</Link>
                </td>
            </tr>
        )
    }
}