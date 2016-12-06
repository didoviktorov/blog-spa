import React, {Component} from 'react';

export default class CreatePostForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            <h3>Post title</h3>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            required
                        />
                    </div>
                </div>
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            <h3>Content</h3>
                        </label>
                        <textarea rows='20' cols='50'
                            className="form-control"
                            value={this.props.body}
                            required
                        />
                    </div>
                </div>
                <input type="submit" value="Login" className="btn btn-default" disabled={this.props.submitDisabled}/>
            </form>
        )
    }
}

