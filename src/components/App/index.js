import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import Timer from '../../containers/Timer';

const App = () => (
  <Container textAlign='center'>
    <Header dividing size='huge'>Pomodoro Timer</Header>
    <Timer/>
  </Container>
);

export default App;
