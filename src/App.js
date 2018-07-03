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
        {/* Above is the native create-react-app header */}
        {/* Below is the start of my React Trivia App */}
        <div className="Intro-page-container">
          <div className="Intro-page-content">
            <h2>Riddle Me This...</h2>
            <p>This is a project I'm creating for my DigitalCrafts Bootcamp in Houston.  It is powered by the <a href="https://opentdb.com/" target="blank">
              Open Trivia Database</a> and built with React.  It's a work in progress, but I hope you enjoy.</p>
            <p>This is starting out as a solo player game, with hopes/intent to make it muliplayer so you can play your friends.  Whoever gets the most points,
              WINS!</p>
            <button onClick={retrieveQuestionsAPI}>Let's Play</button>
          </div>
          <DisplayQuestion />
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
