//testing a component so we need to import the following (in balance.test we were just testing the action & reducer)
import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe("Wallet", ()=>{
    // testing the action creator for deposits
    const mockDeposit = jest.fn();
    //creating props for testing props are passed to the component
    const props = { balance: 20, deposit: mockDeposit};
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

        describe("and the user wants to make a deposit", () => {
            beforeEach(()=>wallet.find('.btn-deposit').simulate('click'));

            it('dispatches the `deposit()` it receives from props with local balance', ()=>{
                //pass local balance as a argument to the deposit function we get via props
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
            })
        })
    });
});