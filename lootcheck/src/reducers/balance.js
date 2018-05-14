import * as constants from '../actions/constants';
//saving the balance in cookies
// read_cookie takes a string for it argument (the cookie we want to read)

///bake_cookie take a string for the first argument(to identify the cookie we want to bake) and the second parameter is the data we want to store
import {
    read_cookie,
    bake_cookie
} from 'sfcookies';

//the string for the arguments (cookies)
const BALANCE_COOKIE = "BALANCE_COOKIE"

// which takes the place of returning the default state
// default:
// return state;

//we have the balance action, but now we need a balance reducer
// a reducer is the way that redux knows how to update the store based on certain actions
//reducers (like actionCreators) are pure function with unique results solely based on the input
//state should always have a default value
const balance = (state = 0, action) => {
    let balance;

    switch (action.type) {
        case constants.SET_BALANCE:
            balance = action.balance;
            break;
        case constants.DEPOSIT:
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            balance = state - action.withdrawal;
            break;
        default:
            balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
    }

    //jest simulates a mock window object complete with cookies
    bake_cookie(BALANCE_COOKIE, balance);

    return balance;
}

export default balance;