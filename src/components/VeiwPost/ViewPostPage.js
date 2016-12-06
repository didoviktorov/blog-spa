import React, {Component} from "react";
import ViewPostForm from "./ViewPostForm";
import {loadPost} from "../../models/posts";
//import observer from '../../models/observer';

export default class ViewPostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({post: response});
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
                </div>
            </div>
        );
    }
}