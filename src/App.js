import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import MainNews from './components/Main/Main-news'
import Grid from './components/Grid/Grid'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main className='main'>
          <Grid/>
        </main>
      </div>
    );
  }
}

export default App;
