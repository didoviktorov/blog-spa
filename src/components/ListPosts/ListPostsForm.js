import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Post extends Component {
    render() {
        return (

            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.description}</td>
                        <td><Link to={"/post/" + this.props.id}>View more</Link></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}