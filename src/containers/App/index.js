import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Timer from '../../containers/Timer';

const App = props => (
  <Container textAlign='center'>
    <Helmet>
      <title>({ props.seconds.toString() }) Pomodoro Timer </title>
    </Helmet>
    <Header dividing size='huge'>Pomodoro Timer</Header>
    <Timer/>
  </Container>
);

const mapStateToProps = state => (
  {
    seconds: state.seconds
  }
);

export default connect(mapStateToProps)(App);
