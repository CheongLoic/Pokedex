import './App.css';
import pokedex_database from './pokedexDB.js';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import React, {Component} from 'react';
import Pokedex from './Pokedex.js';
import Pokemon from './Pokemon.js';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          data : pokedex_database.pokemon
      };
  }


  render() {
    return (
        <Router>
          <Switch>
          
            <Route exact path="/pokemon" component={Pokedex}/>
            <Route path="/pokemon/:pokemonName" component={Pokemon} />
            <Route path="*" component={() => 
                  <div className="App">
                  <header className="App-header">
                    <h1 id="Pokerror">POKERROR 404 PAGE NOT FOUND</h1>
                    <br/>
                    <h6><Link to="/pokemon">Go to the main page</Link></h6>
                    </header>
                  </div>
                }/>
          </Switch>
        </Router>
        
    );
  }



}

export default App;
