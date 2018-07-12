import React, {Component} from 'react'
import '../ComponentsStyles/QuestionPage.css'

// Sibling Components
import Question from './Question'
import Intermission from './Intermission'
import fetchAllQuestions from '../fetchQuestions'
// Redux Actions
import {connect} from 'react-redux'
import {addQuestionsToQueue, incrementQuestionCounter,
  incrementQuestionSetCounter, enableAnswerButtons,
  toggleEndOfQuestions, toggleQuestionsAPICall} from '../redux_actions'

class QuestionPage extends Component {
  retrieveNextQuestion (event) {
    this.props.incrementQuestionCtr(1)
    this.props.enableBtn()
    if (this.props.questionIndex === this.props.triviaQuestions[this.props.questionSet].length - 2) {
      this.props.toggleQuestionsFlag(!this.props.endOfQuestions)
      // show end of game or retrieve more questions buttons
    }
  }

  componentDidMount () {
    const fetchQuestionsPromise = fetchAllQuestions()
    fetchQuestionsPromise
      .then(response => {
        this.props.addQuestions(response)
        this.props.toggleQuestionAPICall(!this.props.isLoading)
      }).catch(err => console.error(err))
  }

  render () {
    return (
      <div className="Intro-page-container">
        <div className="question-container">
          <h1 className="userName">{this.props.playerName}</h1>
          {!this.props.isLoading && <Question />}
          <div>
            {!this.props.endOfQuestions &&
            <button onClick={() => this.retrieveNextQuestion()}>Next Question</button> }
            {this.props.endOfQuestions && <Intermission />}
          </div>
          <div className="userPoints">Points: {this.props.userPoints}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    playerName: state.playerName,
    userPoints: state.userPoints,
    triviaQuestions: state.questions,
    questionIndex: state.questionIndex,
    questionSet: state.questionSetNumber,
    disabledBtn: state.disabledButton,
    endOfQuestions: state.endOfQuestions,
    isLoading: state.questionPageIsLoading
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addQuestions: (data) => {
      dispatch(addQuestionsToQueue(data))
    },
    incrementQuestionCtr: (data) => {
      dispatch(incrementQuestionCounter(data))
    },
    incrementSetCtr: (data) => {
      dispatch(incrementQuestionSetCounter(data))
    },
    enableBtn: () => {
      dispatch(enableAnswerButtons())
    },
    toggleQuestionsFlag: (data) => {
      dispatch(toggleEndOfQuestions(data))
    },
    toggleQuestionAPICall: (data) => {
      dispatch(toggleQuestionsAPICall(data))
    }
  }
}

var QuestionsPage = connect(mapStateToProps, mapDispatchToProps)(QuestionPage)

export default QuestionsPage
