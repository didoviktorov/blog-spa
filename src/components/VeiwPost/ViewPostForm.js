import React, {Component} from 'react';

export default class ViewPostForm extends Component {
    render() {
        return (
            <form className="container">
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            <h3>Post title</h3>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            disabled="disabled"
                            value={this.props.title}
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
                                  disabled="disabled"
                                  value={this.props.content}
                        />
                    </div>
                </div>

            </form>
        )
    }
}