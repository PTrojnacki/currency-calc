import React, { Component } from 'react';
import './App.css';
import Choice from './Choice';
import Calc from './Calc';

class App extends Component {
  state = { 
    currencies: [
      {
        currency: 'złoty (Polska)',
        code: 'PLN',
        mid: 1,
      },
      // {
      //   id: 2,
      //   name: 'usd',
      //   rate: 3.81,
      // },
      // {
      //   id: 3,
      //   name: 'gbp',
      //   rate: 5.64,
      // },
      // {
      //   id: 4,
      //   name: 'pln',
      //   rate: 1,
      // },
    ],
    currencyFrom: 'PLN',
    currencyTo: 'PLN',
    score: '',
    ammount: null,
   }

   changeAmmount = e => {
     console.log(e.target.value)
    this.setState({
        ammount: e.target.value,
        score: '',
    });
  }

  handleChange = e => {
    if (e.target.name === "select-from") {
      this.setState({
        currencyFrom: e.target.value,
        score: '',
      })
    } else if (e.target.name === "select-to") {
      this.setState({
        currencyTo: e.target.value,
        score: '',
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const currencies = this.state.currencies;
    const currencyFrom = currencies.find(currency => currency.code === this.state.currencyFrom);
    const currencyTo = currencies.find(currency => currency.code === this.state.currencyTo);
    const rate = currencyFrom.mid / currencyTo.mid;
    const score = (this.state.ammount * rate).toFixed(2);
    console.log(this.state.ammount);
    this.setState({
      score,
    });
  }

  componentDidMount() {

    const API = 'http://api.nbp.pl/api/exchangerates/tables/a/';

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response;
      }
      throw Error('Cannot find data')
    })
    .then(response => response.json())
    .then(data => {
      const currencies = this.state.currencies;
      currencies.push(...data[0].rates);
      this.setState({
        currencies
      })
      console.log(this.state.currencies);
    })
    .catch(err => {
      console.log(err)
    })

  }


  render() { 
    return ( 
      <div className="app">
        <Choice currencies={this.state.currencies} change={this.handleChange} />
        <Calc currencyFrom={this.state.currencyFrom} currencyTo={this.state.currencyTo} ammount={this.state.ammount} score={this.state.score} change={this.changeAmmount} submit={this.handleSubmit} />
      </div>
     );
  }
}
 
export default App;
