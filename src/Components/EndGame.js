import React from 'react'
import {connect} from 'react-redux'

class EndGame extends React.Component {
  render () {
    return (
      <div>
        <h1>Thanks for playing, {this.props.playerName}!</h1>
        <h3>You finished the game with {this.props.userPoints} point</h3>
        <button>Play Again?</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    playerName: state.playerName,
    userPoints: state.userPoints
  }
}

var reduxEndGame = connect(mapStateToProps)(EndGame)

export default reduxEndGame
