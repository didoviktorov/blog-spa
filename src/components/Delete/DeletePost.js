import React, {Component} from "react";
//import ListAllPosts from '../../components/ListPosts/ListPostsForm';
import {deletePost} from '../../models/post';

export default class DeletePostClass extends Component {
    constructor(props) {
        super(props);
        this.deleteSuccess = this.deleteSuccess.bind(this);
    }
    componentDidMount() {
        let id = this.props.routeParams.postId;
        deletePost(id, this.deleteSuccess);
    }

    deleteSuccess(resposnse) {
        if (resposnse === true) {
            this.context.router.push('/listPosts');
        }
    }

    render() {
        return <div>
            <span>Post deleted.</span>
            </div>
    }
}

DeletePostClass.contextTypes = {
    router: React.PropTypes.object
};