import React, {Component} from 'react';
import HomeForm from './HomeForm';
import {loadAllPosts} from '../../models/post';

export default class HomePage extends Component {
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
        if (sessionStorage.getItem('username') != null) {
            return (
                <div className="container">
                    <h1>Latest posts</h1>
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
                            {this.state.posts.sort((a, b) => {
                                return a.date - b.date;
                            })
                                .map((e, i) => {
                                    if (i < 5) {
                                        return (<HomeForm key={i} name={e.Title} id={e._id} description={e.Content}/>);
                                    }
                                    return null;

                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <HomeForm />
                </div>
            )
        }
    }
}