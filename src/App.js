import React, { Component } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'

// Required Components
import './DisplayQuestion'

// Redux Actions
import {addQuestionsToQueue} from './redux_actions'
import {connect} from 'react-redux'
import DisplayQuestion from './DisplayQuestion'

class App extends Component {
  constructor (props) {
    super(props)
    this.getASetOfQuestions = this.getASetOfQuestions.bind(this)
  }

  getASetOfQuestions (e) {
    const apiURL = 'http://localhost:8080/api/get-questions'
    axios.get(apiURL)
      .then(response => {
        console.log('Success...questions received')
        this.props.addQuestions(response.data)
      })
      .catch(err => console.error(err))
  }

  render () {
    const retrieveQuestionsAPI = (event) => this.getASetOfQuestions()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Trivia App</h1>
        </header>

        <div>
          <button onClick={retrieveQuestionsAPI}>Get Questions</button>
          <DisplayQuestion />
          {/* <DisplayQuestion trivia={this.state.questions}
            onAppAnswerSelect={this.AnswerSelect}/> */}
          {/* <DisplayQuestion /> */}
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
function mapDispatchToProps (dispatch) {
  return {
    addQuestions: (data) => {
      console.log('sending data to dispatch')
      dispatch(addQuestionsToQueue(data))
    }
  }
}

var ReduxTriviaApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ReduxTriviaApp
