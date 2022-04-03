import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CounterState, SystemStore } from './models/CounterModel';
import reducers from './reducers';

export default (initStates: SystemStore) =>
  createStore(combineReducers(reducers), initStates, composeWithDevTools());
