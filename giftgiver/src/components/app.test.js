//fundamental test for a component - testing if a component renders on the DOM
import React from 'react';
// shallow - helper function from Enzyme - allow us to shallowly render a parent component
import {
	shallow
} from 'enzyme';
import App from './App';



//grouping tests together for just the App component
describe("App", () => {
	const app = shallow( < App / > )

	{ /* unit test for rendering the app component */ }
	it("renders correctly", () => {
		expect(app).toMatchSnapshot()
	})

	{ /* //make sure the app initializes the state with a empty list of gifts */ }

	it("initializes the `state` with an empty list of gifts", () => {
		expect(app.state().gifts).toEqual([]);
	})

	{
		/* // having to tests where we are clicking on the same button results in receiving errors for both
		    //this is test pollution */
	}

	describe("when clicking the `add gift` button", () => {

		// beforeEach - runs some code before each test in the describe block
		// since we were doing a button click in both it statements below, we put it in the before each
		beforeEach(()=>{
			app.find(".btn-add").simulate('click');
		})

		//after each test we rest the state back to empty gifts array
		afterEach(()=>{
			app.setState({gifts: []})
		})

		it("add a new gift to `state`", () => {
			//need to find and click on the `add gift` button to run the test
			//find inner child nodes or components by their JSX or className
			// app.find(".btn-add").simulate('click');
			//expect that clicking on the button with an empty state adds a gift with an id = 1

			expect(app.state().gifts).toEqual([{
				id: 1
			}]);
		})

		{ /* //when we click on the `add gift` button we want the GiftList Component to display a new Gift Component inside it */ }
		it("adds a new gift to the rendered list", () => {
			// app.find(".btn-add").simulate('click');

			expect(app.find(".gift-list").children().length).toEqual(1);
		})
	})

})