import React from 'react'
import './Digit.css'

class Digit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prevNum: 0,
      currNum: 0,
      flipping: false,
    }
  }

  flip = async (prevProps) => {
    await this.setState({
      prevNum: prevProps.num,
      currNum: this.props.num,
      flipping: true,
    })
    setTimeout(() => {
      this.setState({
        prevNum: this.props.num,
        flipping: false
      })
    }, 600)
  }

  componentDidUpdate = prevProps => {
    if (prevProps.num !== this.props.num) {
      this.flip(prevProps)
    }
  }

  render() {
    const frontFlip = this.state.flipping ? 'Digit__front--flip' : ''
    const backFlip = this.state.flipping ? 'Digit__back--flip' : ''
    const {prevNum, currNum} = this.state
    return (
      <div className="Digit">
        <div className="Digit__top">{currNum}</div>
          <div className={`Digit__front ${frontFlip}`}>{prevNum}</div>
          <div className={`Digit__back ${backFlip}`}>{currNum}</div>
        <div className="Digit__bottom">{prevNum}</div>
      </div>
    )
  }
}

export default Digit