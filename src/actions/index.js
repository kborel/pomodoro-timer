import { START, STOP, RESET, TICK } from './constants';

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