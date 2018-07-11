import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../ComponentsStyles/QuestionPage.css'
import Answers from './Answer'

class Question extends Component {
  constructor (props) {
    super(props)
    this.parseQuestionData = this.parseQuestionData.bind(this)
  }

  parseQuestionData () {
    const shortenTriviaVar = this.props.triviaQuestions[this.props.questionIndex]
    console.log('[Question.js] in parseQuestionDate', shortenTriviaVar.question)
    const questionArr =
      shortenTriviaVar.map((questionItem, index) => {
        return (
          <div>
            <h4>Question: {index + 1}</h4>
            <p dangerouslySetInnerHTML={{__html: questionItem.question}} />
            <Answers answers={questionItem}/>
          </div>
        )
      })
    return questionArr
  }

  render () {
    // const questions = this.parseQuestionData()
    return (
      <div className="questions">
        <p>Test</p>
        {console.log('[Question.js] props is: ', this.props.triviaQuestions)}
        {/* {questions[0]} */}
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
