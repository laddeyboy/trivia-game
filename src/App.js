import React, { Component } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'
import DisplayQuestion from './DisplayQuestion'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userAnswers: [],
      userPoints: 0,
      questions: []
    }
    this.getASetOfQuestions = this.getASetOfQuestions.bind(this)
    this.AnswerSelect = this.AnswerSelect.bind(this)
  }

  getASetOfQuestions (e) {
    const apiURL = 'http://localhost:8080/api/get-questions'
    axios.get(apiURL)
      .then(response => {
        console.log('Success...questions received')
        this.setState({questions: response.data})
      })
      .catch(err => console.error(err))
  }

  AnswerSelect (anAnswer) {
    console.log('Im in App.js with: ', anAnswer)
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Trivia App</h1>
        </header>

        <div>
          <button onClick={e => this.getASetOfQuestions(e)}>Lets Play!</button>
          <DisplayQuestion trivia={this.state.questions}
            onAppAnswerSelect={this.AnswerSelect}/>
        </div>

      </div>
    )
  }
}

export default App
