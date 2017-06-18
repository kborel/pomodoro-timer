import React from 'react';
import { Button, Statistic, Grid } from 'semantic-ui-react';

const Timer = props => {
  const {
    seconds,
    active,
    startTimer,
    stopTimer,
    resetTimer
  } = props;
  
  const activeButton = !active ? (
  <Button primary content='Start' icon='play' onClick={startTimer} /> ) : (
  <Button primary content='Pause' icon='pause' onClick={stopTimer} /> );

  return (
    <Grid textAlign='center'>
      <Grid.Row>
        <Statistic>
          <Statistic.Value>{seconds}</Statistic.Value>
        </Statistic>
      </Grid.Row>
      <Grid.Row>
        <Button.Group>
          { activeButton }
          <Button secondary content='Reset' icon='undo' onClick={resetTimer} />
        </Button.Group>
      </Grid.Row>
    </Grid>
  );
}

export default Timer;