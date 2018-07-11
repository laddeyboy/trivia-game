import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import '../ComponentsStyles/QuestionPage.css'

// Sibling Components
import DisplayAnswers from './DisplayAnswers'
import Question from './Question'
import fetchAllQuestions from '../fetchQuestions'
// Redux Actions
import {addQuestionsToQueue} from '../redux_actions'

class QuestionPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  retrieveNextQuestion () {
    console.log('[QuestionPage.js] retrieveNext Question')
  }

  componentDidMount () {
    const fetchQuestionsPromise = fetchAllQuestions()
    fetchQuestionsPromise
      .then(response => {
        this.props.addQuestions(response)
        this.setState({ isLoading: false })
      }).catch(err => console.error(err))
  }

  render () {
    // var questions = this.parseQuestionData()
    return (

      <div className="Intro-page-container">
        <div className="question-container">
          <h1 className="userName">{this.props.playerName}</h1>
          {!this.state.isLoading && <Question />}
          <div className="answers">ANSWERS
            <button onClick={this.retrieveNextQuestion}>Next Question</button>
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
    triviaQuestions: state.questions
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addQuestions: (data) => {
      console.log('[QuestionPage.js] sending data to dispatch')
      dispatch(addQuestionsToQueue(data))
    }
  }
}

var QuestionsPage = connect(mapStateToProps, mapDispatchToProps)(QuestionPage)

export default QuestionsPage
