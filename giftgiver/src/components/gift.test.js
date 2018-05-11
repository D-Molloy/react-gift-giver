import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    // the callback check
     // fn is from Jest and lets us check create a mock function that check whether they're called (and with args)
    const mockRemove = jest.fn()
    //the id of the item we want to remove
    const id = 1;
    // need to add props to pass into this component
    const props = {gift: {id}, removeGift: mockRemove}
    // spreading out props === gift={props.gift} removeGift={props.removeGift}
    const gift = shallow(<Gift {...props} />);

 

    it("renders correctly", () =>{
        expect(gift).toMatchSnapshot()
    })

    it("initializes a person and present in `state`", () => {
        expect(gift.state()).toEqual({person:"", present:""});
    })

    describe("when typing into the person input", ()=>{
        const person = "Uncle"
        beforeEach(()=>{
            gift.find('.input-person').simulate('change', {target:{value:person}});
        })

        it("updates the person in `state`", ()=>{
            expect(gift.state().person).toEqual(person);
        } )
    })
    
    describe("typing into the present input", ()=>{
        const present = "Jerk Seasoning"
        beforeEach(()=>{
            gift.find(".input-present").simulate('change', {target:{value: present}})
        })

        it("updates the present in `state`", ()=>{
            expect(gift.state().present).toEqual(present);
        })
    })

    describe("when clicking the remove gift button", ()=>{
        beforeEach(()=>{
            gift.find('.btn-remove').simulate('click');
        })

       //toHaveBeenCalledWith - check if a function has been called with a specific arg
        it('calls the removeGift callback', ()=> {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    })
})