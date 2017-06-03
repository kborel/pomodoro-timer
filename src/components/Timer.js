import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-radius: 100%;
  border: 3px solid lightgray;
  height: 300px;
  width: 300px;
  padding: 75px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.h3`
  color: deepskyblue;
  font-size: 75px;
  margin: 0;
`;

const StartButton = styled.div`
  width: 0; 
	height: 0; 
	border-top: 25px solid transparent;
	border-bottom: 25px solid transparent;
	border-left: 25px solid deepskyblue;
  cursor: pointer;
`;

const Timer = () => (
  <Div>
    <Text>25:00</Text>
    <StartButton/>
  </Div>
);

export default Timer;