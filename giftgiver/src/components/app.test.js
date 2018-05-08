//fundamental test for a component - testing if a component renders on the DOM
import React from 'react';
// shallow - helper function from Enzyme - allow us to shallowly render a parent component
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App />)

//unit test for rendering the app component
it("renders correctly", () =>{
    expect(app).toMatchSnapshot()
})

//make sure the app initializes the state with a empty list of gifts
it("initializes the `state` with an empty list of gifts", () => {
    expect(app.state().gifts).toEqual([]);
})

it("add a new gift to `state` when clicking on the `add gift` button", ()=>{
    //need to find and click on the `add gift` button to run the test
    //find inner child nodes or components by their JSX or className
    app.find(".btn-add").simulate('click');
    //expect that clicking on the button with an empty state adds a gift with an id = 1

    expect(app.state().gifts).toEqual([{id:1}]);
})