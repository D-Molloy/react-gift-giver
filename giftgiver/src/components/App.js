import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift'

class App extends Component{
    constructor(){
        super();
        this.state ={
            gifts:[]
        }
    }

    //this of the app component will be used in addGift due to fat arrow
    addGift = () => {
        const { gifts } = this.state;

        const ids = this.state.gifts.map(gift => gift.id);

        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        
        gifts.push({ id: max_id + 1})
        //{gifts} === {gifts:gifts}
        this.setState({gifts})
    }
    render(){
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className="gift-list">
                {this.state.gifts.map(gift => {
                    return(
                        <Gift key={gift.id} />
                    )
                })}
                </div>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;