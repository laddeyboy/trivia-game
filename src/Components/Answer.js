import React, {Component} from 'react'
import {connect} from 'react-redux'

class Answers extends Component {
  answers () {
    let answerArr = []
    answerArr.push({answer: this.props.answers.correct_answer, correct: true})
    console.log('[Answers.js], answerArr ', answerArr)
    for (let i = 0; i < this.props.answers.incorrect_answers.length; i++) {
      console.log('[Answers.js], incorrectAnswer ', this.props.answers.incorrect_answers[i])
    }
  }

  render () {
    console.log('TEST1')
    const answer = this.answers()
    console.log('TEST2')
    return (
      <div className="questions">
        <p>[Answer.js]</p>
        {/* {console.log('[Answer.js] correct answer',
          this.props.triviaQuestions[this.props.questionIndex][0].correct_answer)} */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    triviaQuestions: state.questions,
    questionIndex: state.questionIndex
  }
}

var ConnectedAnswers = connect(mapStateToProps)(Answers)

export default ConnectedAnswers
