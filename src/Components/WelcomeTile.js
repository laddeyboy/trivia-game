import React from 'react'
import {Link} from 'react-router-dom'
import '../ComponentsStyles/WelcomeTile.css'

const WelcomeTile = () => {
  return (
    <div className="welcomeTile-content">
      <h2>Riddle Me This...</h2>
      <p>This is a project I'm creating for my DigitalCrafts Bootcamp in Houston.  It is powered by the <a href="https://opentdb.com/" target="blank">
              Open Trivia Database</a> and built with React.  It's a work in progress, but I hope you enjoy.</p>
      <p>This is starting out as a solo player game, with hopes/intent to make it muliplayer so you can play your friends.  Answer the question, if you
        get it right you get a point.  Whoever gets the most points, WINS!</p>
      {/* <button onClick={retrieveQuestionsAPI}><Link to='/questions'/>Let's Play</button> */}
      <Link to='/questions'><button className="btn">Let's Play</button></Link>
    </div>
  )
}

export default WelcomeTile
