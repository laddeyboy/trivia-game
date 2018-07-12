import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../ComponentsStyles/QuestionPage.css'
import { disableAnswerButtons, addUserPoint } from '../redux_actions'

class Question extends Component {
  checkAnswer (event) {
    let userAnswer = event.target.value
    const currentAnswerSet =
      this.props.triviaQuestions[this.props.questionSetNumber][this.props.questionIndex].answers
    let correctAnswer = currentAnswerSet.find((answer) => userAnswer === answer.answer)
    if (correctAnswer.correct) {
      this.props.addPoint()
    }
    this.props.disableBtn()
  }

  render () {
    const currentQuestionSet = this.props.triviaQuestions[this.props.questionSetNumber]
    let questionIndex = this.props.questionIndex
    return (
      <div className="questions">
        {console.log('[Question.js] my props are ', this.props.triviaQuestions)}
        <p>Question {this.props.questionIndex + 1}</p>
        <p dangerouslySetInnerHTML={{__html: currentQuestionSet[questionIndex].question}} />
        <p>{currentQuestionSet[questionIndex].answers.map((anAnswer, index) => {
          return <button key={index} value={anAnswer.answer}
            onClick={(e) => this.checkAnswer(e)} disabled={!this.props.disabledButton}
            dangerouslySetInnerHTML={{__html: anAnswer.answer}}/>
        })}</p>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    triviaQuestions: state.questions,
    questionIndex: state.questionIndex,
    userAnswers: state.userAnswers,
    questionSetNumber: state.questionSetNumber,
    disabledButton: state.disabledButton,
    userPoints: state.userPoints
  }
}

function mapDispatchToProps (dispatch) {
  return {
    disableBtn: () => {
      dispatch(disableAnswerButtons())
    },
    addPoint: () => {
      dispatch(addUserPoint())
    }
  }
}

var Questions = connect(mapStateToProps, mapDispatchToProps)(Question)

export default Questions
