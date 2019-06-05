import './App.css';
import Joke from './components/Joke'
import ControlPanel from './components/ControlPanel'

import React, { Component } from 'react'

export default class App extends Component {
  state = {
    currentJoke:'Click on the button to get a joke!'
  }

  onClick = (e) => {
    e.preventDefault();
    
    fetch('https://icanhazdadjoke.com/',
    {method:'GET',
  headers: {
    Accept: 'application/json'
  }
})
.then(res => res.json())
.then(res => this.setState({
      currentJoke: res.joke
    }))

}


  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Dad jokes app</h1>
        </header>
        <Joke currentJoke={this.state.currentJoke} />
        <ControlPanel fetchJoke={this.onClick} />
      </div>
    )
  }
}
