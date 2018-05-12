import * as constants from './constants';

// an action is an object, we're testing the action creators that make the actions
// action creator is a function that returns an action with a specific type, but gives it dynamic data based on what we pass as arguments to the action creator function

export const setBalance = balance =>{
    return {
        type: constants.SET_BALANCE,
        balance
    }
}