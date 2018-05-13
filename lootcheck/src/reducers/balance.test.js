//we have the balance action, but now we need a balance reducer
// a reducer is the way that redux knows how to update the store based on certain actions
//reducers (like actionCreators) are pure function with unique results solely based on the input
import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe("balanceReducer", ()=>{

    it("sets a balance", ()=>{
        const balance = 10;

        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
    })

})


