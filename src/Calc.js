import React, { Component } from 'react';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ammount: 0,
        }
    }

changeAmmount = e => {
    this.setState({
        ammount: e.target.value,
    });
}

    render() { 
        return ( 
            <div className="calc" onSubmit={(e) => this.props.submit(e,this.state.ammount)}>
            <form className="calc__form">
                <input type="number" min="0" className="form__input" placeholder="0" onChange={this.changeAmmount} />
                <button className="form__button" type="submit">Convert</button>
            </form>
        </div>
         );
    }
}
 
export default Calc;