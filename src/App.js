import './App.css';
import Joke from './components/Joke'
import ControlPanel from './components/ControlPanel'

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store} from './ReduxStuff'

export default class App extends Component {
  

  


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Dad jokes app</h1>
        </header>
        <Provider store ={store}>
        <Joke  />
        <ControlPanel />
        </Provider>
      </div>
    )
  }
}
