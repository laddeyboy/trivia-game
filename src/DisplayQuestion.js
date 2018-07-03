import React, {Component} from 'react'
import {connect} from 'react-redux'

// Sibling Components
import DisplayAnswers from './DisplayAnswers'

// Redux Actions

class DisplayQuestion extends Component {
  constructor (props) {
    super(props)
    this.onAnswerSelect = this.onAnswerSelect.bind(this)
  }
  parseQuestionData () {
    const questionArr =
        this.props.trivia.map((questionItem, index) => {
          return (
            <div className="DQ-question">
              <h4>Question: {index + 1}</h4>
              <p dangerouslySetInnerHTML={{__html: questionItem.question}} />
              <div>
                <DisplayAnswers key={index} index={index} correctAns={questionItem.correct_answer}
                  otherAns={questionItem.incorrect_answers}
                  onAnswerSelect={this.onAnswerSelect}/>
              </div>
            </div>
          )
        })
    return questionArr
  }

  onAnswerSelect (anAnswer, index) {
    console.log('index is???? ', index)
    this.props.onAppAnswerSelect(anAnswer)
  }

  render () {
    // var questions = this.parseQuestionData()
    return (
      <div>
        <div>
          {this.props.questions}
        </div>
      </div>

    )
  }
}

function mapStateToProps (state) {
  return {
    triviaQuestions: state.questions
  }
}

var DisplayQuestions = connect(mapStateToProps)(DisplayQuestion)

export default DisplayQuestions
