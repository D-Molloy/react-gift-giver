import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {

    componentDidMount(){
        this.props.fetchBitcoin()
    }


    computeBitcoin(){
        //destructuring bitcoin of the props
        const { bitcoin } = this.props;

        //want to return an empty value if our bitcoin object is empty
        //if we have to return something in our default case, this should be an empty object
        //this is called a guard clause -- if it doesn't meet criteria than we return out of the function
        //used then the state is initalized with no value
        if (Object.keys(bitcoin).length === 0) return '';
        //replacing all of the commas with empty strings so we can parseInt
        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',',''), 10);


    }

    showPrice(){
        const { bitcoin } = this.props;
        if (Object.keys(bitcoin).length === 0) return '';
        return bitcoin.bpi.USD.rate;
    }

    render(){
        return (
            <div>
                <h3 id="BCPrice">Current Bitcoin price: ${this.showPrice()}</h3>
                <h3 id="BCBalance"># of Bitcoins you can afford: {this.computeBitcoin()}</h3>
            </div>
        )
    }
}

// CONNECT() TAKES TWO PARAMETERS
//first - a function that describes what part of the redux store we want to use on this component
//second - what actionCreators we want to use in the component to send data to the redux store (not currently using right now)
//first - mapping the whole state (balance and bitcoin) to this component
//second - link the action you want to use in the component
export default connect(state => state, {fetchBitcoin})(Loot);