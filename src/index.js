import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './redux_store'
import {Provider} from 'react-redux'
import {Route, BrowserRouter} from 'react-router-dom'
import Root from './Components/Root'
import QuestionPage from './Components/QuestionPage'
import EndGame from './Components/EndGame'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route path={'/'} exact component={Root} />
          <Route path={'/questions'} exact component={QuestionPage} />
          <Route path={'/endgame'} exact component={EndGame} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
