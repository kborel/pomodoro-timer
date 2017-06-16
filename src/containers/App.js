import React, { Component } from 'react';
import { Header, Grid, Container } from 'semantic-ui-react';
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
      <Container>
        <Helmet>
            <title>({ formattedTime }) Pomodoro Timer </title>
        </Helmet>
        <Grid textAlign='center'>
          <Grid.Row>
            <Header dividing size='huge'>Pomodoro Timer</Header>
          </Grid.Row>
          <Grid.Row>
            <TimerMenu setTimer={setTimer}></TimerMenu>
          </Grid.Row>
          <Grid.Row>
            <Timer
              startTimer={startTimer}
              stopTimer={stopTimer}
              resetTimer={resetTimer}
              active={active}
              seconds={formattedTime}
            />
          </Grid.Row>
        </Grid>
      </Container>
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
