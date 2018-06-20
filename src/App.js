import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import './DisplayQuestion'
import DisplayQuestion from './DisplayQuestion';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.getASetOfQuestions = this.getASetOfQuestions.bind(this);
  }

  getASetOfQuestions(e) {
    const apiURL = 'http://localhost:8080/api/get-questions';
    axios.get(apiURL)
      .then(response => {
        console.log("Success...questions received");
        this.setState({questions: response.data});
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Trivia App</h1>
        </header>

        <button onClick={e => this.getASetOfQuestions(e)}>Get Questions</button>
        <DisplayQuestion trivia={this.state.questions} />
      </div>
    );
  }
}

export default App;
