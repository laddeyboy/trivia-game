import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import '../ComponentsStyles/QuestionPage.css'

// Sibling Components
import DisplayAnswers from './DisplayAnswers'
import Question from './Question'

// Redux Actions
import {addQuestionsToQueue} from '../redux_actions'

class QuestionPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount () {
    const apiURL = 'http://localhost:8080/api/get-questions'
    axios.get(apiURL)
      .then(response => {
        console.log('Success...questions received')
        this.props.addQuestions(response.data)
        this.setState({ isLoading: false })
      })
      .catch(err => console.error(err))
  }

  // parseQuestionData () {
  //   const questionArr =
  //       this.props.trivia.map((questionItem, index) => {
  //         return (
  //           <div className="DQ-question">
  //             <h4>Question: {index + 1}</h4>
  //             <p dangerouslySetInnerHTML={{__html: questionItem.question}} />
  //             <div>
  //               <DisplayAnswers key={index} index={index} correctAns={questionItem.correct_answer}
  //                 otherAns={questionItem.incorrect_answers}
  //                 onAnswerSelect={this.onAnswerSelect}/>
  //             </div>
  //           </div>
  //         )
  //       })
  //   return questionArr
  // }

  render () {
    // var questions = this.parseQuestionData()
    return (

      <div className="Intro-page-container">
        <div className="question-container">
          <h1 className="userName">{this.props.playerName}</h1>
          {!this.state.isLoading && <Question />}
          <div className="answers">ANSWERS</div>
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
