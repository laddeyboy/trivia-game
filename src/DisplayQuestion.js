import React, {Component} from 'react'
import DisplayAnswers from './DisplayAnswers'

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
                <DisplayAnswers key={index} correctAns={questionItem.correct_answer}
                  otherAns={questionItem.incorrect_answers}
                  onAnswerSelect={this.onAnswerSelect}/>
              </div>
            </div>
          )
        })
    return questionArr
  }

  onAnswerSelect (anAnswer) {
    this.props.onAppAnswerSelect(anAnswer)
  }

  render () {
    var questions = this.parseQuestionData()
    return (
      <div>
        <h2>Let me ask you a question:</h2>
        <div>
          {questions}
        </div>
      </div>

    )
  }
}

export default DisplayQuestion
