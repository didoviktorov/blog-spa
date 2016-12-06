import React, {Component} from 'react';

export default class EditPostForm extends Component {
    render() {
        return (
                <form onSubmit={this.props.onSubmitHandler} className="container">
                    <div className="div-form">
                        <div className="form-group">
                            <label>Title:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="title"
                                value={this.props.title}
                                disabled={this.props.submitDisabled}
                                onChange={this.props.onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="div-form">
                        <div className="form-group">
                            <label>Content:</label>
                            <textarea
                                className="form-control"
                                name="content"
                                rows="20"
                                value={this.props.content}
                                disabled={this.props.submitDisabled}
                                onChange={this.props.onChangeHandler}
                            />
                        </div>
                    </div>
                    <input className="btn btn-default" type="submit" value="Edit" disabled={this.props.submitDisabled}/>
                </form>
        )
    }
}