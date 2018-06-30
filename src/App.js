import React, { Component } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'
import {Provider} from 'react-redux'
import store from './redux_store'

// Required Components
import DisplayQuestion from './DisplayQuestion'

// Redux Actions
import {addQuestionsToQueue} from './redux_actions'
import {connect} from 'react-redux'

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Trivia App</h1>
        </header>

        <div>
          <button onClick={e => this.getASetOfQuestions(e)}>Lets Play!</button>
          {console.log('TESTING', this.props.questions)}
          <h1>HELLO</h1>
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
    addQuestions: (data) => { dispatch(addQuestionsToQueue(data)) }
  }
}

var ReduxTriviaApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ReduxTriviaApp
