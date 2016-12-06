import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PostControls extends Component {
    render() {
        let edit = null;

        if (this.props.canEdit) {
            edit = <Link to={"/edit/" + this.props.postId} className="btn btn-default">Edit info</Link>;
        }



        return (
            <div className="container">
                {edit}
            </div>
        )
    }
}