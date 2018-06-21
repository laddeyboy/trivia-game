import React, {Component} from 'react'

class DisplayAnswers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonclass: 'Ans-btn'
    }
    this.onHandleAnswerClick = this.onHandleAnswerClick.bind(this)
  }
  parseAnswerData () {
    var ansArr = []
    ansArr.push(this.props.correctAns)
    for (let i = 0; i < this.props.otherAns.length; i++) {
      ansArr.push(this.props.otherAns[i])
    }
    return ansArr
  }

  onHandleAnswerClick (e) {
    e.preventDefault()
    // console.log('You picked answer', e.target.id)
    this.setState({buttonclass: 'Ans-btnSelected'})
    this.props.onAnswerSelect(e.target.id)
  }

  render () {
    const answers = this.parseAnswerData()
    return (
      answers.map((ansInArr, index) => {
        return (
          <button
            id={ansInArr} key={index} className={this.state.buttonclass}
            onClick={this.onHandleAnswerClick}
            dangerouslySetInnerHTML={{__html: ansInArr}}>
          </button>
        )
      })
    )
  }
}

export default DisplayAnswers
