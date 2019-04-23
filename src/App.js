import React, { Component } from 'react';
import {Hero} from "./components/hero";
import { Features } from './components/features';

const apiCallFromRequest = requrie('./request');

const http = require('http');

export class App extends Component {

  render() {
    return (
    <div style={{height: 2836}}>
      <Hero />
    </div>);
  }
}

http.createServer((req, res) => {
  apiCallFromRequest.callApi(function(response){
    res.write(response);
    res.end();
  });
}).listen(3000);