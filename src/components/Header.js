import React, { Component } from 'react';
import Logo from '../style/rick-logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li><img src={Logo} alt="Rick And Morty Logo"/></li>
                    <li><h3>{this.props.secondary}</h3></li>
                </ul>
            </div>
        )
    }
}