import React, {Component} from 'react';

export default class CreatePostForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            Name:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            value={this.props.title}
                            required
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            Description:
                        </label>
                        <textarea
                            rows="20"
                            className="form-control"
                            type="text"
                            name="content"
                            required
                            value={this.props.content}
                            onChange={this.props.onChange}
                        />
                    </div>
                </div>
                <input
                    type="submit"
                    value="Create Post"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                />
            </form>
        )
    }
}

