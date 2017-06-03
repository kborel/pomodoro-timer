import React from 'react';
import styled from 'styled-components';
import Timer from './components/Timer';

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  justify-items: center;
`;

const Heading = styled.h1`
  font-size: 50px;
  color: deepskyblue;
`;

const App = () => (
  <Div>
    <Heading>Pomodoro Timer</Heading>
    <Timer/>
  </Div>
);

export default App;
