//fundamental test for a component - testing if a component renders on the DOM
import React from 'react';
// shallow - helper function from Enzyme - allow us to shallowly render a parent component
import {shallow} from 'enzyme';
import App from './App';

const app = shallow(<App />)

//unit test for app component
it("renders correctly", () =>{
    expect(app).toMatchSnapshot()
})