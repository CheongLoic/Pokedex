import React, {Component} from 'react';
import info_icon from "./info_icon.png"
import {Link } from 'react-router-dom';
//import Pokemon from './Pokemon.js';

/*This class display the most essential informations of a Pokemon*/
class PokeList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            PokeDB : this.props.param
        });
    }


    render(){
        const url = "/pokemon/"+this.state.PokeDB.name;

        return (<div className="poke-item">
            <div><Link to={url}><img src={info_icon} width="40" height="40" alt="More details" align="right" /></Link></div>
            <div><img src={this.state.PokeDB.img}  alt={this.state.PokeDB.name} align="middle"/></div>
            <div style={{fontSize: 14}}>
                <div>N° : {this.state.PokeDB.num}</div>
                <div>Name : {this.state.PokeDB.name}</div>
                <div>Type : {this.state.PokeDB.type.map((type) => (<span id={type}> {type} </span>))}</div>
                <div>Height : {this.state.PokeDB.height}</div>
                <div>Weight : {this.state.PokeDB.weight}</div>
                <div>Weaknesses : {this.state.PokeDB.weaknesses.map((weak) => (<span id={weak}> {weak} </span>))}</div>
            </div>
            
            </div>);
    }
}

export default PokeList;