// Store/configureStore.js

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {userReducer} from './reducers/userReducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({user: userReducer}), applyMiddleware(thunk));

export default store;
