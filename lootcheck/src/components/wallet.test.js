//testing a component so we need to import the following (in balance.test we were just testing the action & reducer)
import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe("Wallet", ()=>{
    //creating props for testing props are passed to the component
    const props = { balance: 20};
    //spreading the props into the component
    const wallet = shallow(<Wallet {...props} />);
    //checking to make sure the Wallet component renders
    it("renders properly", ()=>{
        expect(wallet).toMatchSnapshot();
    });

    //check to make sure balance is available via props
    it("displays the balance from the props", ()=>{
        expect(wallet.find('.balance').text()).toEqual("Wallet Balance: 20")
    })
  
    it("creates an input to deposit into or withdraw from the balance", () => {
        expect(wallet.find(".input-wallet").exists()).toBe(true);
    })

    describe("when the user types into the wallet input", ()=> {
        const userBalance = "25";

        beforeEach(()=> {
            wallet.find('.input-wallet').simulate("change", {target: {value: userBalance}});
        });

        it("updates the local wallet balance in the state and converts it to a number", ()=>{
            //passing 10 as the second parameter to parseInt == decimal system
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
        });
    });
});