import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../ComponentsStyles/QuestionPage.css'

class Question extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     category: '',
  //     type: '',
  //     difficulty: '',
  //     questions: '',
  //     answers: []
  //   }
  //   this.combineAnswers = this.combineAnswers.bind(this)
  //   this.parseQuestionData = this.parseQuestionData.bind(this)
  // }

  render () {
    // const questions = this.parseQuestionData()
    return (
      <div className="questions">
        <p>Test</p>
        {console.log('[Question.js] props is: ', this.props.triviaQuestions)}
        <p>{this.props.triviaQuestions[this.props.questionIndex][0].question}</p>
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

var Questions = connect(mapStateToProps)(Question)

export default Questions
