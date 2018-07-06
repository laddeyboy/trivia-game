import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../ComponentsStyles/QuestionPage.css'

class Question extends Component {
  render () {
    return (
      <div className="questions">
        <p>Test</p>
        {console.log('[Question.js] props is: ', this.props.triviaQuestions[0])}
        {/* <p>{console.log('[Question.js] props is: ', this.props.triviaQuestions[0][0].question)}</p> */}
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    triviaQuestions: state.questions
  }
}

var Questions = connect(mapStateToProps)(Question)

export default Questions
