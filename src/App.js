import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlaceList from './components/Places/PlaceList/PlaceList';
import EventNew from './components/Events/EventNew/EventNew';
import EventList from './components/Events/EventList/EventList';

import { Route, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">

        <header id="main-header">
          <nav>
            <ul>
              <Link to="/">
                <li>Lugares</li>
              </Link>
              <Link to="/eventos">
                <li>Eventos</li>
              </Link>
              <Link to="/evento-nuevo">
                <li>Evento Nuevo</li>
              </Link>

            </ul>
          </nav>
        </header>

        <Route exact path="/" component={PlaceList}/>
        <Route exact path="/eventos" component={EventList}/>
        <Route exact path="/evento-nuevo" component={EventNew}/>
        
      </div>
    );
  }
}

export default App;
