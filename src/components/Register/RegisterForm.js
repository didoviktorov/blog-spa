import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label className="form-control">
                        Username
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control">
                        Password
                    </label>
                    <input
                        className="form-control"
                        type="password" name="password"
                        value={this.props.password}
                        onChange={this.props.onChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-control">
                        Confirm password
                    </label>
                    <input
                        className="form-control"
                        type="password" name="repeat"
                        value={this.props.repeat}
                        onChange={this.props.onChange}
                    />
                </div>
                <input type="submit" value="Register" className="btn btn-default"/>
            </form>
        )
    }
}