import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift'
import {max_number} from '../helper/index';

class App extends Component{
    constructor(){
        super();
        this.state ={
            gifts:[]
        }
    }

    //`this` of the app component will be used in addGift due to fat arrow
    addGift = () => {
        const { gifts } = this.state;

        // nice but we can inline it in the push bc we only use ids once     
        // const ids = this.state.gifts.map(gift => gift.id);

        //this goes untested, so we change it into a helper function located in the helper folder
        //also helps keep code uncluttered
        // const max_id = ids.length > 0 ? Math.max(...ids) : 0;

        // nice but we can inline it in the push
        // const max_id = max_number(ids);


        gifts.push({ id:  max_number(this.state.gifts.map(gift => gift.id)) + 1})
        //{gifts} === {gifts:gifts}
        this.setState({gifts})
    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    }

    render(){
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                {this.state.gifts.map(gift => {
                    return(
                        <Gift 
                        key={gift.id} 
                        gift={gift}
                        removeGift={this.removeGift}/>
                    )
                })}
                </div>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;