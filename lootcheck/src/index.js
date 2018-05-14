import React from 'react';
import { render } from 'react-dom';
//added applyMiddleware to prepare to handle the promises
import { createStore, applyMiddleware } from 'redux';
//importing thunk to actually handle the promise
import thunk from 'redux-thunk';
//need a rootReducer (the balance reducer in this case)
import rootReducer from "./reducers";
//redux gives us the combineReducers function by mapping all the reducers to an object, so we add the index.js file to the reducers folder


//also need the provider (React specific component)  from react-redux
//  the provider PROVIDES the redux store to the whole application
import {Provider} from 'react-redux';
import App from "./components/App";

//CREATING THE REDUX STORE
// assigned to the result of call createStore and passing createStore our rootReducer
//because we only use store once, we can just inline the value into the store attribute
// const store = createStore(rootReducer, applyMiddleware(thunk));

//To provide the store to the entire app, we wrap it around the app component and pass the store as an attribute (always to the top lvl provider tag)
render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>, 
    document.getElementById("root")
);