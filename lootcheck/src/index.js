import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
//need a rootReducer (the balance reducer in this case)
import rootReducer from "./reducers/balance";
//also need the provider (React specific component)  from react-redux
//  the provider PROVIDES the redux store to the whole application
import {Provider} from 'react-redux';
import App from "./components/App";

//CREATING THE REDUX STORE
// assigned to the result of call createStore and passing createStore our rootReducer
const store = createStore(rootReducer);

//To provide the store to the entire app, we wrap it around the app component and pass the store as an attribute (always to the top lvl provider tag)
render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);