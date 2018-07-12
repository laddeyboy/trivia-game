import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fetchAllQuestions from '../fetchQuestions'

import {connect} from 'react-redux'
import {addQuestionsToQueue, incrementQuestionCounter,
  incrementQuestionSetCounter, enableAnswerButtons,
  toggleEndOfQuestions} from '../redux_actions'

class Intermission extends Component {
  getMoreQuestions (event) {
    console.log('[Intermission.js] In getMoreQuestions')
    const fetchQuestionsPromise = fetchAllQuestions()
    fetchQuestionsPromise
      .then(response => {
        this.props.addQuestions(response)
        this.setState({ isLoading: false })
      }).catch(err => console.error(err))
  }

  render () {
    return (
      <div>
        <button onClick={(event) => this.getMoreQuestions(event)}>More Questions</button>
        <Link to='/endgame'><button>End Game</button></Link>
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
    endOfQuestions: state.endOfQuestions
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
    }
  }
}

var reduxIntermission = connect(mapStateToProps, mapDispatchToProps)(Intermission)
export default reduxIntermission
