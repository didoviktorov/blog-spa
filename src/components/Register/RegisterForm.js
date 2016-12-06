import React, {Component} from 'react';
import './Register.css';

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            <h3>Username</h3>
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={this.props.username}
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                </div>
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            <h3>Password</h3>
                        </label>
                        <input
                            className="form-control"
                            type="password" name="password"
                            value={this.props.password}
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                </div>
                <div className="div-form">
                    <div className="form-group">
                        <label>
                            <h3>Confirm password</h3>
                        </label>
                        <input
                            className="form-control"
                            type="password" name="repeat"
                            value={this.props.repeat}
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                </div>
                <input type="submit" value="Register" className="btn btn-default"/>
            </form>
        )
    }
}