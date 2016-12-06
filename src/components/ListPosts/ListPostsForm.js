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

        let links = [<Link to={"/post/" + this.props.id}>View more</Link>];

        if(this.props.author === sessionStorage.getItem('userId')) {
            links = [<Link to={"/post/" + this.props.id}>View more</Link>, ' ', <Link to={"/post/delete/" + this.props.id}>Delete</Link>]
        } else {
            links = [<Link to={"/post/" + this.props.id}>View more</Link>];
        }

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{subContent}</td>
                <td>
                    {links}
                </td>
            </tr>
        )
    }
}