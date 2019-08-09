import React from 'react';

const Calc = props => {
    return (
        <div className="calc" onSubmit={props.submit}>
            <form className="calc__form">
                <input type="number" min="0" className="form__input" placeholder="0" onChange={(e) => props.change(e)} />
                <button className="form__button" type="submit">Convert</button>
            </form>
            {props.score === '' ? null : <p className="result">{props.ammount} {props.currencyFrom} = {props.score} {props.currencyTo}</p>}
        </div>  
    )
}

export default Calc;