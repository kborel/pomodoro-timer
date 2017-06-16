import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Button, Statistic, Grid } from 'semantic-ui-react';
import { startTimer, stopTimer, resetTimer, setTimer } from './actions';
import TimerMenu from '../TimerMenu';

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
        <Helmet>
            <title>({ seconds.toString() }) Pomodoro Timer </title>
        </Helmet>
        <Grid centered>
          <Grid.Row>
            <TimerMenu setTimer={setTimer}/>
          </Grid.Row>
          <Grid.Row>
            <Statistic>
              <Statistic.Value>{ seconds }</Statistic.Value>
            </Statistic>
          </Grid.Row>
          <Grid.Row>
            <Button.Group>
              {!active ? (
                <Button primary content='Start' icon='play' onClick={startTimer} />
              ) : (
                <Button primary content='Pause' icon='pause' onClick={stopTimer} />
              )}
                <Button secondary content='Reset' icon='undo' onClick={resetTimer}/>
            </Button.Group>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(state => ({
  active: state.active,
  seconds: state.seconds
}), { startTimer, stopTimer, resetTimer, setTimer })(Timer);