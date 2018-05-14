import {FETCH_BITCOIN} from './constants';
// redux action to fetch bitcoin data
export const fetchBitcoin = () => {
    //the way the redux-thunk middleware works is  that when we want to return an async action (like a promise), the thunk middleware takes it and gives us a dispatch function that represents the dispatch ability of the redux store
    //this dispatch is extra powerful - we can return the async fetch
    //the dispatch wraps around the async function we want to return
    return dispatch => {
        //returning the promise from the async code
        return fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        //handle the response
        .then(response => response.json())
        //boil down the json further - final dispatch to the redux store
        .then(json => dispatch({type: FETCH_BITCOIN, bitcoin: json }))
    }
}