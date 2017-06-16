import { START, STOP, TICK, RESET, SET } from '../actions/constants';

const defaultState = {
  start: 1500,
  active: false,
  seconds: 1500
};

export default function timer(state = defaultState, action) {
  switch(action.type) {
    case START:
      return { ...state, active: true };
    case STOP:
      return { ...state, active: false };
    case RESET:
      return { ...state, seconds: state.start, active: false };
    case TICK:
      return { ...state, seconds: state.seconds - 1 };
    case SET:
      return { 
        start: action.payload,
        seconds: action.payload,
        active: false
      };
    default: 
      return state;
  }
};