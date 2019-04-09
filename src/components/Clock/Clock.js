import React from 'react'
import './Clock.css'

import Digit from '../Digit/Digit'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: [0,0],
      minutes: [0,0],
      seconds: [0,0]
    }
  }

  setTime = () => {
    const now = new Date()
    const hours = this.timeFormat(this.hourFormat(now.getHours()))
    const minutes = this.timeFormat(now.getMinutes())
    const seconds = this.timeFormat(now.getSeconds())
    this.setState({hours, minutes, seconds})
  }

  hourFormat = hours => {
    let formatted = hours % 12
    return formatted ? formatted : 12
  }

  timeFormat = (int) => {
    let str = int.toString()
    str = str.length < 2 ? "0" + str : str
    return str.split('')
  }

  componentDidMount() {
    setInterval(() => {
      this.setTime()
    }, 1000)
  }

  render() {
    const {hours, minutes, seconds} = this.state
    return (
      <div className="Clock">
        <Digit num={hours[0]} />
        <Digit num={hours[1]} />
        <div className="Clock__separator">:</div>
        <Digit num={minutes[0]} />
        <Digit num={minutes[1]} />
        <div className="Clock__separator">:</div>
        <Digit num={seconds[0]} />
        <Digit num={seconds[1]} />
      </div>
    )
  }
}

export default Clock