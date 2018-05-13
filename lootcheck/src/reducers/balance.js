import * as constants from '../actions/constants';


//we have the balance action, but now we need a balance reducer
// a reducer is the way that redux knows how to update the store based on certain actions
//reducers (like actionCreators) are pure function with unique results solely based on the input
//state should always have a default value
const balance = (state = 0, action) => {
    switch (action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        default:
            return state;
    }
}

export default balance;