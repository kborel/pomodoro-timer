import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class TimerMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTimer: 'pomodoro'
    };
  }

  handleItemClick = (e, {name}) => {
    this.setState({
      activeTimer: name
    });
    const seconds = name === 'pomodoro' ? 1500 : 300;
    this.props.setTimer(seconds);
  }

  render() {
    const { activeTimer } = this.state;
    return (
      <Menu widths={2}>
        <Menu.Item
          name='pomodoro'
          active={activeTimer === 'pomodoro'}
          onClick={this.handleItemClick}
        >
          Pomodoro
        </Menu.Item>
        <Menu.Item
          name='break'
          active={activeTimer === 'break'}
          onClick={this.handleItemClick}
        >
          Break
        </Menu.Item>
      </Menu>
    );
  }
}

export default TimerMenu;