import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super () 
    this.state = { counter: 0}
    this.addCounter = this.addCounter.bind(this)
  }

  addCounter() {
    this.setState({counter: this.state.counter + 1})
  }

componentDidMount () {
 fetch('/counter').then(function(x) {
   return x.text() 
 }).then(function(counter){
   console.log(counter)
  this.setState({counter: counter})
 }.bind(this))
}
  render() {
    return (
      <div className="App">
       {this.state.counter}
      </div>
    );
  }
}

export default App;
