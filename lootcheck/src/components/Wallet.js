import React, { Component } from 'react'
import {connect} from 'react-redux';

export class Wallet extends Component {
    constructor(){
        //invoke the constructors of the parent (Component)
        super();
        this.state = {
            balance: undefined
        }
    }
    //passing 10 as the second parameter to parseInt == decimal system
    updateBalance = event => this.setState({balance: parseInt(event.target.value, 10)})

    render () {
        return (
            <div>
                <h3 className="balance">Wallet Balance: {this.props.balance}</h3>
                <br />
                <input 
                    className="input-wallet" 
                    onChange={this.updateBalance}/>
            </div>
        )
    }
}

//accessing the data in the Redux Store
// need to connect the component to the redux store using the connect method from react-redux
//  We want to export the connected component
// export default Wallet;
// connect returns a function and we pass the Component we want connected
// CONNECT() TAKES TO PARAMETERS
//first - a function that describes what part of the redux store we want to use on this component
//second - what actionCreators we want to use in the component to send data to the redux store (not currently using right now)

//first parameter - function that takes in the previous state and maps it onto the component...this allow the state to be available in the component via props.  The objects is the part of the props, and we grab the whole state from redux (as its just the balance now) and map it to balance in this components state
// THE MAP STATE TO PROPS PORTION of the connect function: state => { balance: state}
//cant implicitly return the state so you need to use the syntax below
export default connect(state => {return { balance: state }}, null)(Wallet);
