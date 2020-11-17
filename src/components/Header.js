import React, { Component } from 'react';
import Logo from '../style/rick-logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li><a href="#"><img src={Logo} /></a></li>
                    {/* <li><a href="#"><h1>{this.props.title}</h1></a></li> */}
                    <li><a href="#"><h3>{this.props.secondary}</h3></a></li>
                </ul>
            </div>
        )
    }
}