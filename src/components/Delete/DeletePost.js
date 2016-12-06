import React, {Component} from "react";
import ListAllPosts from '../../components/ListPosts/ListPostsForm';
import {deletePost} from '../../models/post';

export default class DeletePostClass extends Component {
    componentDidMount() {
        let id = this.props.routeParams.postId;
        deletePost(id);
    }
    
    render() {
        return <div>
            <span>Post deleted.</span>
            </div>
    }
}