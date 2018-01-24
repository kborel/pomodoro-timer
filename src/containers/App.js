import React, { Component } from 'react';
import { Grid, Container, Menu, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Timer from './Timer';
import TimerMenu from './TimerMenu';
import { startTimer, stopTimer, resetTimer, setTimer } from '../actions';
import { formatTimer } from '../utils/helpers';

class App extends Component {
  componentDidMount() {
    Notification.requestPermission();
  }

  render() {
    const { 
      startTimer,
      stopTimer,
      resetTimer,
      setTimer,
      seconds,
      active
    } = this.props;
    const formattedTime = formatTimer(seconds);
    return (
      <React.Fragment>
        <Helmet>
            <title>({ formattedTime }) Pomodoro Timer </title>
        </Helmet>
        <Menu>
          <Menu.Item header>Pomodoro Timer</Menu.Item>
        </Menu>
        <Container style={{ marginTop: '6em'}}>
          <Grid centered>
            <TimerMenu setTimer={setTimer} />
            <Segment circular size="massive" style={{ marginTop: '3em' }}>
              <Timer
                startTimer={startTimer}
                stopTimer={stopTimer}
                resetTimer={resetTimer}
                active={active}
                seconds={formattedTime}
              />
            </Segment>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => (
  {
    active: state.active,
    seconds: state.seconds
  }
);

export default connect(mapStateToProps,
  { startTimer, stopTimer, resetTimer, setTimer }
)(App);
