import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div> Date
          <span>{this.state.time.toLocaleDateString()}</span>
        </div>
        <div> Time
          <span>{this.state.time.toLocaleTimeString()}</span>
        </div>
      </div>
    );
  }

  tick() {
    let currentTime = this.state.time;
    let incrementedTime = currentTime.getTime() + 1000;
    this.setState({time: new Date(incrementedTime)});
  }
}
