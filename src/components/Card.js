import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {title, img, discription} = this.props;
        return (
            <div>
                <div className="card-container">
                    <div><h1>{title}</h1></div>
                    <div><img src={img} alt={title}/></div>
                    <div><p><b>Gender </b>:  {discription}</p></div>
                </div>
            </div>
        )
    }
}
