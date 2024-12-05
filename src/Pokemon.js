import React, {Component} from 'react';
import pokedex_database from './pokedexDB.js';
import {Link} from "react-router-dom";
import logo from './Pokemon_logo.png';



class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data : pokedex_database.pokemon,
                pokemonName : this.props.match.params.pokemonName,
                pokemon :{},
                nameNotFound : false
        };
    }

    /**
     * Executed first before all the other functions
     */
    componentWillMount(){
        this.setPokemonInfo();
    }


    setPokemonInfo(){
        for (let i=0; i<this.state.data.length;i++){
            if (this.state.data[i].name === this.state.pokemonName){
                this.setState({
                    pokemon : this.state.data[i],
                    nameNotFound : true
                });
                console.log("nameNotFound "+this.state.nameNotFound);
            }
        }
        
    }


    showPrevEvolution(){
        if(Object.keys(this.state.pokemon).includes("prev_evolution")){
            return this.state.pokemon.prev_evolution.map((evo) => (<Link to={"/pokemon/"+evo.name}>{evo.name+"  "} </Link>));
        }
        else return <span>None</span>
    }

    showNextEvolution(){
        if(Object.keys(this.state.pokemon).includes("next_evolution")){
            return this.state.pokemon.next_evolution.map((evo) => (<Link to={"/pokemon/"+evo.name}>{evo.name+"  "} </Link>));
        }
        else return <span>None</span>
    }

    showMultipliers(){
        if(this.state.pokemon.multipliers != null) {
            for (let i=0; i<this.state.pokemon.multipliers.length;i++){
                return <span> {this.state.pokemon.multipliers+", "} </span>
            }
        }
        else{
            return (<span>None</span>);
        }
    }


    render() {
        
        if (this.state.nameNotFound === false) {
            console.log("Hello");
            return (<div className="App">
            <header className="App-header">
              <h1 id="Pokerror">POKERROR 404 PAGE NOT FOUND</h1>
              <br/>
              <h6><Link to="/pokemon">Go to the main page</Link></h6>
              </header>
            </div>);
        }

        else{
            return (
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p style={{fontSize: 40, fontWeight: 'bold'}}>
                        Gotta Catch 'Em All !
                    </p>
                    
                    <div className="poke-item">
                        <div><img src={this.state.pokemon.img}  alt={this.state.pokemon.name} align="middle"/></div>
                        <div style={{fontSize: 14}}>
                            <div>N° : {this.state.pokemon.num}</div>
                            <div>Name : {this.state.pokemon.name}</div>
                            <div>Type : {this.state.pokemon.type.map((type) => (<span id={type}> {type} </span>))}</div>
                            <div>Height : {this.state.pokemon.height}</div>
                            <div>Weight : {this.state.pokemon.weight}</div>
                            <div>Weaknesses : {this.state.pokemon.weaknesses.map((weak) => (<span id={weak}> {weak} </span>))}</div>
                            <div>Candy : {this.state.pokemon.candy}</div>
                            <div>Candy count : {this.state.pokemon.candy_count}</div>
                            <div>Distance to hatch egg : {this.state.pokemon.egg}</div>
                            <div>Spawn chance : {this.state.pokemon.spawn_chance}</div>
                            <div>Average spawn : {this.state.pokemon.avg_spawns}</div>
                            <div>Spawn time : {this.state.pokemon.spawn_time}</div>
                            <div>Multipliers : {this.showMultipliers()}</div>
                            <div>Previous evolution : {this.showPrevEvolution()}</div>
                            <div>Next evolution : {this.showNextEvolution()}</div>
                            
                        </div>
                    </div>
                    <h6><Link to="/pokemon">Back to the main page</Link></h6>
                </header>
                
                </div>
                
            );
        }
        
    }

}



export default Pokemon;