import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer, setTimer } from './actions';

 
class Timer extends Component {
  componentDidMount() {
    Notification.requestPermission();
  }

  render() {
    const { 
      seconds,
      active,
      startTimer,
      stopTimer, 
      resetTimer,
      setTimer
    } = this.props;
    return (
      <div>
        <button onClick={() => setTimer(1500)}>Pomodoro</button>
        <button onClick={() => setTimer(300)}>Break</button>
        { seconds }
        { !active ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={stopTimer}>Stop</button> 
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
  }
}

export default connect(state => ({
  active: state.active,
  seconds: state.seconds
}), { startTimer, stopTimer, resetTimer, setTimer })(Timer);