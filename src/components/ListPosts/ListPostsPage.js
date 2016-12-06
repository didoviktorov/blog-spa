import React, {Component} from 'react';
import ListPostsForm from './ListPostsForm';
import {loadAllPosts} from '../../models/post';

export default class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({posts: response})
    }

    componentDidMount() {
        loadAllPosts(this.onLoadSuccess);
    }

    render() {
        return (
            <div className="container">
                <h1>Posts Page</h1>
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
                            {this.state.posts.map((e, i) => {
                                return <ListPostsForm key={i} author={e._acl.creator} name={e.Title} id={e._id} description={e.Content}/>;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}