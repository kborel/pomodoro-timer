import { START_TIMER, STOP_TIMER, RESET_TIMER, TICK } from './constants';

export const startTimer = () => (
  {
    type: START_TIMER
  }
);

export const stopTimer = () => (
  {
    type: STOP_TIMER
  }
);

export const resetTimer = () => (
  {
    type: RESET_TIMER
  }
);

export const tick = () => (
  {
    type: TICK
  }
);