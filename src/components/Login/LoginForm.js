import React, {Component} from 'react';
import './Login.css';

export default class LoginForm extends Component {
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
                            required=""
                            value={this.props.username}
                            onChange={this.props.onChangeHandler}
                            disabled={this.props.submitDisabled}
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
                            disabled={this.props.submitDisabled}
                        />
                    </div>
                </div>
               <input type="submit" value="Login" className="btn btn-default" disabled={this.props.submitDisabled}/>
            </form>
        )
    }
}
