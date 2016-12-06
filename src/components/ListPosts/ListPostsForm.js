import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Post extends Component {

    render() {
        //let subContent = '';
        //if(this.state.description.length > 25) {
        //    subContent = this.props.description.substr(0, 25) + '...';
        //} else {
        //    subContent = this.props.description;
        //}

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td><Link to={"/post/" + this.props.id}>View more</Link></td>
            </tr>
        )
    }
}