import React, {Component} from 'react';
import ListPostsForm from './ListPostsForm';
import {loadAllPosts} from '../../models/post';
import {Link} from 'react-router';
//import observer from '../../models/observer';

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
            <div>
                <h1>Posts Page</h1>

                <div>
                    {this.state.posts.map((e, i) => {
                        return <ListPostsForm key={i} name={e.Title} id={e._id} description={e.Content}/>
                    })}
                </div>
            </div>
        );
    }
}