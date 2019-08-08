import React from 'react';

const Choice = (props) => {
    const currencies = props.currencies;
    const options = currencies.map(currency => (
        <option key={currency} value={currency}>{currency}</option>
      ))
    return ( 
        <div className="choice">
          <span>Convert from </span>
          <select className="choice__select" name="select-from" onChange={props.change}>
            {options}
          </select>
          <span> to </span>
          <select className="choice__select" name="select-to" onChange={props.change}> 
            {options}
          </select>
        </div>
     );
}
 
export default Choice;