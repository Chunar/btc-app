import React, { Component } from 'react';
import './App.css';
import Hero from "./components/hero";

class App extends Component {

  render() {
    return (
      <div style={{width:1440, height: 2836}}>
        <Hero />
      </div>
    );
  }
}

export default App;
