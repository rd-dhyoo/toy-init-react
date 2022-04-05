import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SystemStore } from './models/Common';
import reducers from './reducers';

export default (initStates: SystemStore) =>
  createStore(combineReducers(reducers), initStates, composeWithDevTools());
