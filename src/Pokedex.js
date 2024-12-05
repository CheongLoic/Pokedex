import logo from './Pokemon_logo.png';
import './App.css';
import pokedex_database from './pokedexDB.js';
import React, {Component} from 'react';
import PokeList from './PokeList';
import {Link, Route} from "react-router-dom";
import Pokemon from './Pokemon.js';

class Pokedex extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data : pokedex_database.pokemon
      };
  }

 

  render() {
    return (
        <div className="App">
            <header className="App-header">
            <Route path="/pokemon/:pokemonName" component={Pokemon} />
            <Route path="/pokemon/*" component={() => 
                  <div className="App">
                  <header className="App-header">
                    <h1 id="Pokerror">POKERROR 404 PAGE NOT FOUND</h1>
                    <br/>
                    <h6><Link to="/pokemon">Go to the main page</Link></h6>
                    </header>
                  </div>
                }/>

                <img src={logo} className="App-logo" alt="logo"/>
                <p style={{fontSize: 40, fontWeight: 'bold'}}>
                    Gotta Catch 'Em All !
                </p>
                {this.state.data.map((pokemon) => (<PokeList  param={pokemon}/>))}
            </header>
      </div>

    );
  }



}




export default Pokedex;
