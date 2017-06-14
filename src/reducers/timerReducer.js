import { START, STOP, TICK, RESET } from '../actions/constants';

const defaultState = {
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
      return { seconds: 1500, active: false };
    case TICK:
      return { ...state, seconds: state.seconds - 1 };
    default: 
      return state;
  }
};