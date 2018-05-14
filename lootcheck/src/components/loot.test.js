import React from 'react';
import { shallow, mount } from 'enzyme';
import { Loot } from './Loot';

describe("Loot", ()=>{
    
    const props = { balance: 10, bitcoin: {}}
    let loot = shallow(<Loot {...props}/>);
    

    it("renders properly", ()=>{
        expect(loot).toMatchSnapshot();
    })

    //testing componentDidMount on the fetchBitcoin action
    //need to use `mount` from enzyme
    describe("when mounted", ()=>{
        let mockFetchBitcoin = jest.fn();

        beforeEach(()=>{
            props.fetchBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props} />)
        })

        it('dispatches the `fetchBitcoin()` method it receives from props', ()=>{
            expect(mockFetchBitcoin).toHaveBeenCalled();
        })
    })

    describe("when there are valid bitcoin Balance", ()=>{
        beforeEach(()=>{
            let props= {balance: 10, bitcoin: {bpi: { USD: {rate:'1,000'}}}};
            loot = shallow(<Loot {...props} />)
        })
        
        it('displays the correct bitcoin value', ()=> {
            expect(loot.find('#BCBalance').text()).toEqual('# of Bitcoins you can afford: 0.01');
        })

        // it('displays the correct bitcoin Price', ()=> {
        //     expect(loot.find('#BCPrice').text()).toEqual('Bitcoin balance: 0.01');
        // })
        
    })
})