import React, { Component } from 'react';
import {Hero} from "./components/hero";
import { Features } from './components/features';

export class App extends Component {

  render() {
    return (
    <div style={{height: 2836}}>
      <Hero />
    </div>);
  }
}