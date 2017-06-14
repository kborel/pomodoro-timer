import { combineReducers } from 'redux';
import * as reducers from './timerReducer';

const pomodoroApp = combineReducers(reducers);

export default pomodoroApp;