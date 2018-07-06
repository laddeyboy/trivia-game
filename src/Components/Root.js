import React, { Component } from 'react'
import logo from '../logo.svg'
import '../ComponentsStyles/Root.css'

// Required Components
import WelcomeTile from './WelcomeTile'

// Redux Actions

class Root extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Trivia App</h1>
        </header>

        {/* Below is the start of my React Trivia App */}
        <div className="Intro-page-container">
          <WelcomeTile />
        </div>
      </div>
    )
  }
}

export default Root
