// https://api.coindesk.com/v1/bpi/currentprice.json

///need to configure a mock store in order to test the async actions
import configureMockStore from 'redux-mock-store';
// need to used middleware that will allow us to return actions that aren't objects (like a function or promise)
import thunk from 'redux-thunk';
//using a mock version of the native JS fetch method
import fetchMock from 'fetch-mock';

//constant for our action
import { FETCH_BITCOIN } from './constants';
//importing the action
import { fetchBitcoin } from './bitcoin';

//configureMockStore allows us to apply middleware
const createMockStore = configureMockStore([thunk]);
// creating the mockStore
const store = createMockStore({ bitcoin: {} });

const mockResponse = { body: { bpi: 'bitcoin price index'}};

//fetch-mock's get method
// params:
// 1 - string of the endpoint we want to stub
// 2 - object of what we want the stubbed endpoint to return
fetchMock.get("https://api.coindesk.com/v1/bpi/currentprice.json", mockResponse);

it("creates an async action to fetch the bitcoin value", ()=>{
    //the async fetchMock function will return a promise that redux can handle
    //getActions shows what actions are actually dispatched to the store
    const expectedActions = [{bitcoin: mockResponse.body, type: FETCH_BITCOIN}];
    //calling the action
    //in order for jest to process the promise, we have to return the promise
    return store.dispatch(fetchBitcoin()).then(()=> {
        expect(store.getActions()).toEqual(expectedActions);
    })
    
})