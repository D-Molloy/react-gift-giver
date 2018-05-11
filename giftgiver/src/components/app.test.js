//fundamental test for a component - testing if a component renders on the DOM
import React from 'react';
// shallow - helper function from Enzyme - allow us to shallowly render a parent component
//Shallow rendering
// Shallow rendering renders only component itself without its children. So if you change something in a child component it won’t change shallow output of your component. Or a bug, introduced to a child component, won’t break your component’s test. It also doesn’t require DOM.
import {shallow} from 'enzyme';
import App from './App';
//to run coverage report when all testing is done: npm run test -- --coverage
// % Stmts - statement in the code vs home many are run in the tests (94.74 for all component == good)
// % Branch - all the different possibilities of the code (initially this is due to the ternary operator in App.js ln 19)
// % Funcs / Lines - Func methods and helpers run in the code.  Lines -how many lines
// Uncovered Line #s - what isn't tested
// -------------------|----------|----------|----------|----------|-------------------|
// File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
// -------------------|----------|----------|----------|----------|-------------------|
// All files          |    66.67 |    16.67 |    78.57 |    79.17 |                   |
//  src               |    18.18 |        0 |        0 |    28.57 |                   |
//   index.js         |        0 |        0 |        0 |        0 |           1,2,3,5 |
//   setupTests.js    |      100 |      100 |      100 |      100 |                   |
//   tempPolyfills.js |       50 |      100 |        0 |       50 |                 2 |
//  src/components    |    94.74 |       50 |    91.67 |      100 |                   |
//   App.js           |    92.31 |       50 |    85.71 |      100 |                19 |
//   Gift.js          |      100 |      100 |      100 |      100 |                   |
// -------------------|----------|----------|----------|----------|-------------------|


// adding the following to package.json specifies where to run the test (i.e. collectCoverageFrom) using a regex string to check all folders and subfolders for js files, but don't include index.js (cause boilerplate)
// "jest": {
//     "collectCoverageFrom": [
//       "src/**/*.js",
//       "!src/index.js"
//     ]
//   }

// -------------------|----------|----------|----------|----------|-------------------|
// File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
// -------------------|----------|----------|----------|----------|-------------------|
// All files          |    90.91 |       50 |    84.62 |       95 |                   |
//  src               |    66.67 |      100 |        0 |    66.67 |                   |
//   setupTests.js    |      100 |      100 |      100 |      100 |                   |
//   tempPolyfills.js |       50 |      100 |        0 |       50 |                 2 |
//  src/components    |    94.74 |       50 |    91.67 |      100 |                   |
//   App.js           |    92.31 |       50 |    85.71 |      100 |                19 |
//   Gift.js          |      100 |      100 |      100 |      100 |                   |
// -------------------|----------|----------|----------|----------|-------------------|

// refactoring the ids portion of App.js and add the helper function results in this test coverage:
// -------------------|----------|----------|----------|----------|-------------------|
// File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
// -------------------|----------|----------|----------|----------|-------------------|
// All files          |    90.91 |      100 |    85.71 |       95 |                   |
//  src               |    66.67 |      100 |        0 |    66.67 |                   |
//   setupTests.js    |      100 |      100 |      100 |      100 |                   |
//   tempPolyfills.js |       50 |      100 |        0 |       50 |                 2 |
//  src/components    |    94.12 |      100 |    91.67 |      100 |                   |
//   App.js           |    90.91 |      100 |    85.71 |      100 |                   |
//   Gift.js          |      100 |      100 |      100 |      100 |                   |
//  src/helper        |      100 |      100 |      100 |      100 |                   |
//   index.js         |      100 |      100 |      100 |      100 |                   |
// -------------------|----------|----------|----------|----------|-------------------|





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
    //allow us to destructure below when id is referenced
    const id = 1;

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

        expect(app.state().gifts).toEqual([{id}]);
    });

    //when we click on the `add gift` button we want the GiftList Component to display a new Gift Component inside it
    it("adds a new gift to the rendered list", ()=>{
        // app.find(".btn-add").simulate('click');

        expect(app.find(".gift-list").children().length).toEqual(id);
    });

    ///to check if a component gets created
    it("creates a gift component", ()=>{
        expect(app.find("Gift").exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () =>{
        beforeEach(()=>{
            // .instance allows us to call helper functions
            app.instance().removeGift(id);
        })

        it('removes the gift from `state`', () =>{
            expect(app.state().gifts).toEqual([])
        })

    })

});