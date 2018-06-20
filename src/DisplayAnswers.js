import React, {Component} from 'react'

class DisplayAnswers extends Component {
  
    parseAnswerData () {
    var ansArr = [];
      ansArr.push({'answer': this.props.correctAns, 'correct': true});
      for(let i = 0; i < this.props.otherAns.length; i++){
        ansArr.push({'answer': this.props.otherAns[i], 'correct': false})
      }
    return ansArr;
  }

  render () {
    const answers = this.parseAnswerData();
    console.log("DID I GET MY ANSWERS", answers)
    return (
      <div>
        <button>{answers}</button>
      </div>
    )
  }
}

export default DisplayAnswers
