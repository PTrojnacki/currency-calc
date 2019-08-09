import React, { Component } from 'react';
import './App.css';
import Choice from './Choice';
import Calc from './Calc';

class App extends Component {
  state = { 
    currencies: [
      {
        id: 1,
        name: 'eur',
        rate: 4.21,
      },
      {
        id: 2,
        name: 'usd',
        rate: 3.81,
      },
      {
        id: 3,
        name: 'gbp',
        rate: 5.64,
      },
      {
        id: 4,
        name: 'pln',
        rate: 1,
      },
    ],
    currencyFrom: 'pln',
    currencyTo: 'eur',
    score: '',
   }

  handleChange = e => {
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

  handleSubmit = (e, ammount) => {
    e.preventDefault();
    const currencies = this.state.currencies;
    const currencyFrom = currencies.find(currency => currency.name === this.state.currencyFrom);
    const currencyTo = currencies.find(currency => currency.name === this.state.currencyTo);
    const rate = currencyFrom.rate / currencyTo.rate;
    const score = (ammount * rate).toFixed(2);
    console.log(score)
  }

  render() { 
    return ( 
      <div className="app">
        <Choice currencies={this.state.currencies} change={this.handleChange} />
        <Calc currencyFrom={this.state.currencyFrom} currencyTo={this.state.currencyFrom} submit={this.handleSubmit} />
      </div>
     );
  }
}
 
export default App;
