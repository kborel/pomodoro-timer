import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from './actions';

 
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
      resetTimer
    } = this.props;
    return (
      <div>
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
}), { startTimer, stopTimer, resetTimer })(Timer);