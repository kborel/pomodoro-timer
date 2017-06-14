import { combineReducers } from 'redux';
import * as reducers from './reducers';

const pomodoroApp = combineReducers(reducers);

export default pomodoroApp;