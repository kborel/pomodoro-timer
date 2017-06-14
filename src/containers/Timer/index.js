import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from './actions';

 
class Timer extends Component {
  componentDidMount() {
    Notification.requestPermission();
  }

  render() {
    return (
      <div>
        { this.props.seconds }
        { !this.props.active ? <button onClick={this.props.startTimer}>Start</button>
                        : <button onClick={this.props.stopTimer}>Stop</button> }
        <button onClick={this.props.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default connect(state => ({
  active: state.active,
  seconds: state.seconds
}), { startTimer, stopTimer, resetTimer })(Timer);