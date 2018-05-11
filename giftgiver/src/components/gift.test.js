import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

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