import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Post extends Component {
    render() {
        return(
            <Link to={"/post/" + this.props.id}>
                <span>Post title</span>
                <h2>{this.props.name}</h2>
                <span>Content</span>
                <p>{this.props.description || 'No content'}</p>
            </Link>
        )
    }
}