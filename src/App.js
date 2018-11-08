import React, { Component } from 'react';
import './App.css';
import Map from './component/MapContainer.js'

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">SAN FRANCISCO</h1>
        </header>
        <div className="App">
          <Map></Map>
        </div>
      </div>
    );
  }
}

export default App;
