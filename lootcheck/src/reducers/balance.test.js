//we have the balance action, but now we need a balance reducer
// a reducer is the way that redux knows how to update the store based on certain actions
//reducers (like actionCreators) are pure function with unique results solely based on the input
import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe("balanceReducer", () => {
    const balance = 10;
    describe("when initializing", () => {
        
        it("sets a balance", () => {


            expect(balanceReducer(undefined, {
                type: constants.SET_BALANCE,
                balance
            })).toEqual(balance);
        })
    })

    describe("the re-initializing", () => {
        it("reads the balance from cookies", () => {
            expect(balanceReducer2(undefined, {})).toEqual(balance)
        })
    })

    //test for depositing into the balance
    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        //previous state is the first parameter of the reducer, followed by the action
        expect(balanceReducer(initialState, {
            type: constants.DEPOSIT,
            deposit
        })).toEqual(initialState + deposit);
    })

    //testing the withdrawal portion of the reducer
    it('withdraws from the balance', () => {
        const withdrawal = 10;
        const initialState = 20;
        //previous state is the first parameter of the reducer, followed by the action
        expect(balanceReducer(initialState, {
            type: constants.WITHDRAW,
            withdrawal
        })).toEqual(initialState - withdrawal);
    })

});