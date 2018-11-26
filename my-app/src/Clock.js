import React from 'react';
import './Clock.css'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    let { timezone } = props;
    this.state = {
      date: time(timezone)
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    let { timezone } = this.props;
    this.setState({
      date: time(timezone),
    });
  }
  render() {
    const { city } = this.props;
    return (
      <div className='box'>
        <h2>{city}: <br />
          {this.state.date}
        </h2>
      </div>


    );
  }
}

function time(offset) {
  let date = new Date();
  let localtime = date.getTime();
  let utc = localtime + (date.getTimezoneOffset() * 60000);
  let newtime = new Date(utc + (offset * 3600000));
  return `${newtime.getHours()} : ${newtime.getMinutes()} : ${newtime.getSeconds()}`;
}

export default Clock;
