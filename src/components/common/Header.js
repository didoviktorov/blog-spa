import React, {Component} from 'react';
import Greeting from './Greeting';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                <Greeting username={this.props.username}/>
            </div>
        )
    }
}