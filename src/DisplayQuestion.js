import React, {Component} from 'react'
import './DisplayQuestions.css'
import './DisplayAnswers'
import DisplayAnswers from './DisplayAnswers'

class DisplayQuestion extends Component {
  parseQuestionData () {
    const questionArr =
        this.props.trivia.map(questionItem => {
          console.log('QuestionItem', questionItem)
          return (
            <div className="DQ-base">
              <p dangerouslySetInnerHTML={{__html: questionItem.question}} />
              <div>
                <DisplayAnswers correctAns={questionItem.correct_answer}
                  otherAns={questionItem.incorrect_answers} />
              </div>
            </div>
          )
        })
    return questionArr
  }
  render () {
    var questions = []
    questions = this.parseQuestionData()
    // console.log("My questions array", questions);
    return (
    // return question data
      <div>
        <h1>Let me ask a question: {questions}</h1>
      </div>
    )
  }
}

export default DisplayQuestion
