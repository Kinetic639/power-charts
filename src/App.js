import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar'
import MainNews from './components/main/Main-news'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main className='main'>
          <MainNews/>
        </main>
      </div>
    );
  }
}

export default App;
