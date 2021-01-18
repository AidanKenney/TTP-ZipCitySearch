import React, { Component } from 'react';
import './App.css';
import CitySearch from './Components/CitySearch';
import ZipSearch from './Components/ZipSearch'
import { ContextProvider } from './Context';

class App extends Component {
  handleClick () {
    return <CitySearch/>
  }
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <div className="App-header">
            <h2>Zip Code Search</h2>
          </div>
          <ZipSearch/>
          <br/>
          <CitySearch/>
          <br/>
        </div>
      </ContextProvider>
    );
  }
}

export default App;
