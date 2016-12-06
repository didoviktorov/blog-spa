import React, {Component} from "react";
import ViewPostForm from "./ViewPostForm";
import {loadPost} from "../../models/posts";
import PostControls from './PostControls';


export default class ViewPostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            canEdit: false,
            postId: this.props.routeParams.postId
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({post: response});
        if (response._acl.creator === sessionStorage.getItem('userId')) {
            this.setState({canEdit: true});
        }
    }

    componentDidMount() {
        loadPost(this.props.routeParams.postId, this.onLoadSuccess);
    }

    render() {
        return (
            <div>
                <h1>Post Page</h1>

                <div>
                    <ViewPostForm content={this.state.post.Content} title={this.state.post.Title}/>
                    <PostControls
                        postId={this.state.postId}
                        canEdit={this.state.canEdit}/>
                </div>
            </div>
        );
    }
}