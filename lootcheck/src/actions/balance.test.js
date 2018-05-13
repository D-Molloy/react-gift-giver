// redux - actions are essentially packages of data in the form of an object
// actions need keys and data

// constant file has a bunch of exports that get added to the constants object
import * as constants from './constants';
import * as actions from './balance';

// an action is an object, we're testing the action creators that make the actions
// action creator is a function that returns an action with a specific type, but gives it dynamic data based on what we pass as arguments to the action creator function

it("creates an action to set the balance", ()=>{
    const balance = 0;

    const expectedAction = {type: constants.SET_BALANCE, balance};
    //SET_BALANCE is an action..created by the action creator:
    expect(actions.setBalance(balance)).toEqual(expectedAction);

})