import {combineReducers } from 'redux';
//grabbing reducers
import balance from './balance';
import bitcoin from './bitcoin';

export default combineReducers({balance, bitcoin});