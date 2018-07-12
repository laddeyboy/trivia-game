import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../ComponentsStyles/WelcomeTile.css'

// Redux Actions
import {connect} from 'react-redux'
import {addPlayersName} from '../redux_actions'

class WelcomeTile extends Component {
  constructor (props) {
    super(props)
    this.state = {name: ''}
  }

  render () {
    return (
      <div className="welcomeTile-content">
        <h2>Riddle Me This...</h2>
        <p>This is a project I'm creating for my DigitalCrafts Bootcamp in Houston.  It is powered by the <a href="https://opentdb.com/" target="blank">
              Open Trivia Database</a> and built with React.  It's a work in progress, but I hope you enjoy.</p>
        <p>This is starting out as a solo player game, with hopes/intent to make it muliplayer so you can play your friends.  Answer the question, if you
        get it right you get a point.  Whoever gets the most points, WINS!</p>
        <form>
          <label>Player Name:
            <input type="text" value={this.state.name}
              onChange={e => this.setState({name: e.target.value})}/>
          </label>
          <br/>
          <Link to='/questions'><button type="submit" className="btn"
            onClick={() => this.props.addPlayerName(this.state.name)}>Let's Play</button></Link>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    playerName: state.playerName
  }
}
function mapDispatchToProps (dispatch) {
  return {
    addPlayerName: (data) => {
      console.log('[WelcomeTile.js] sending data to dispatch')
      dispatch(addPlayersName(data))
    }
  }
}

var reduxWelcomeTile = connect(mapStateToProps, mapDispatchToProps)(WelcomeTile)

export default reduxWelcomeTile
