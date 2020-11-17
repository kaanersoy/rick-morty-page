import React, { Component } from 'react'
import Card from './Card';
export default class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }     
    render() {
        const {isLoaded, items} = this.state; 
        if(isLoaded === true){
            return(
                <div>
                    <ul>
                        {
                            items.map(item => (
                                <Card title={item.name} img={item.image} discription={item.gender}></Card>
                            ))
                        }
                    </ul>
                </div>       
            )
        }else{
            return (
                <div className="loading-screen">
                    <div>
                        <h1>LOADING</h1>
                    </div>
                </div>
            )
        }
    }
    componentDidMount(){
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.results
            });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }   
}