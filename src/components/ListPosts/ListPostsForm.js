import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Post extends Component {
    render() {
        return(
            <Link to={"/post/" + this.props.id}>
                <h2 className="text-danger">{this.props.name}</h2>
                <p>{this.props.description || 'No content'}</p>
            </Link>
        )
    }
}