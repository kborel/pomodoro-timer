import { START, STOP, RESET, SET } from './constants';
import { tick, resetTimer } from './actions';
import { take, call, put, race, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

const getSeconds = state => state.seconds;

export default function* runTimer() {
  while(yield take(START)) {
    while(true) {
      let seconds = yield select(getSeconds);
      if (seconds === 0) {
        // Finished action
        new Notification('Timer Finished!');
        yield put(resetTimer());
        break;
      }

      const { stop, reset, set } = yield race({
        stop: take(STOP),
        reset: take(RESET),
        set: take(SET),
        tick: call(delay, 1000)
      })
      if (!stop && !reset && !set) {
        yield put(tick());
      } else {
        break;
      }
    }
  }
}