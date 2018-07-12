import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fetchAllQuestions from '../fetchQuestions'

import {connect} from 'react-redux'
import {addQuestionsToQueue, incrementQuestionCounter,
  incrementQuestionSetCounter, enableAnswerButtons,
  toggleEndOfQuestions, toggleQuestionsAPICall,
  resetQuestionArrCounter} from '../redux_actions'

class Intermission extends Component {
  getMoreQuestions (event) {
    this.props.toggleQuestionAPICall(!this.props.isLoading)
    console.log('[Intermission.js] In getMoreQuestions')
    const fetchQuestionsPromise = fetchAllQuestions()
    fetchQuestionsPromise
      .then(response => {
        this.props.addQuestions(response)
        this.props.toggleQuestionAPICall(!this.props.isLoading)
        this.props.incrementSetCtr()
        this.props.toggleQuestionsFlag(!this.props.endOfQuestions)
        // reset question array counter
      }).catch(err => console.error(err))
    this.props.resetQuestionArrayCtr()
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
    incrementSetCtr: () => {
      dispatch(incrementQuestionSetCounter())
    },
    enableBtn: () => {
      dispatch(enableAnswerButtons())
    },
    toggleQuestionsFlag: (data) => {
      dispatch(toggleEndOfQuestions(data))
    },
    toggleQuestionAPICall: (data) => {
      dispatch(toggleQuestionsAPICall(data))
    },
    resetQuestionArrayCtr: () => {
      dispatch(resetQuestionArrCounter())
    }

  }
}

var reduxIntermission = connect(mapStateToProps, mapDispatchToProps)(Intermission)
export default reduxIntermission
