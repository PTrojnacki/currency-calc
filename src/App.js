import React, { Component } from 'react';
import './App.css';
import Choice from './Choice'

class App extends Component {
  state = { 
    rates: {
      eur: 1,
      usd: 1,
      pln: 1,
      gbp: 1,
    },
    currencyFrom: 'pln',
    currencyTo: 'eur',
    score: '',
   }

   currencies = ['eur', 'usd', 'pln', 'gbp'];

  handleCurriency = e => {
    if (e.target.name === "select-from") {
      this.setState({
        currencyFrom: e.target.value
      })
    } else if (e.target.name === "select-to") {
      this.setState({
        currencyTo: e.target.value
      })
    }
  }

  render() { 
    return ( 
      <div className="app">
        <Choice currencies={this.currencies} change={this.handleCurriency} />
      </div>
     );
  }
}
 
export default App;
