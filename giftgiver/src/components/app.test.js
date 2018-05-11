//fundamental test for a component - testing if a component renders on the DOM
import React from 'react';
// shallow - helper function from Enzyme - allow us to shallowly render a parent component
//Shallow rendering
// Shallow rendering renders only component itself without its children. So if you change something in a child component it won’t change shallow output of your component. Or a bug, introduced to a child component, won’t break your component’s test. It also doesn’t require DOM.
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App />)


//unit test for rendering the app component
it("renders correctly", () =>{
    expect(app).toMatchSnapshot()
})

it("initializes the `state` with an empty list of gifts",()=> {
    expect(app.state().gifts).toEqual([])
});

// having to tests where we are clicking on the same button results in receiving errors for both
//this is test pollution
//changing the gift-rendering test  from .toEqual(1) to .toEqual(2) hacks our way around the failed test (because its not the first click in the second test)

describe('when clicking the `add-gift` button', () =>{

    beforeEach(()=>{
        app.find('.btn-add').simulate('click');
    });

    afterEach(() =>{
        app.setState({gifts:[]});
    });

    it("add a new gift to `state`", ()=>{
        //need to find and click on the `add gift` button to run the test
        //find inner child nodes or components by their JSX or className
        // app.find(".btn-add").simulate('click');
        //expect that clicking on the button with an empty state adds a gift with an id = 1

        expect(app.state().gifts).toEqual([{id:1}]);
    });

    //when we click on the `add gift` button we want the GiftList Component to display a new Gift Component inside it
    it("adds a new gift to the rendered list", ()=>{
        // app.find(".btn-add").simulate('click');

        expect(app.find(".gift-list").children().length).toEqual(1);
    });

    ///to check if a component gets created
    it("creates a gift component", ()=>{
        expect(app.find("Gift").exists()).toBe(true);
    });

});