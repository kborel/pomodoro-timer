import { START, STOP, RESET, TICK, SET } from './constants';

export const startTimer = () => (
  {
    type: START
  }
);

export const stopTimer = () => (
  {
    type: STOP
  }
);

export const resetTimer = () => (
  {
    type: RESET
  }
);

export const tick = () => (
  {
    type: TICK
  }
);

export const setTimer = seconds => (
  {
    type: SET,
    payload: seconds
  }
);