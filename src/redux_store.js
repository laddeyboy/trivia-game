import { createStore } from 'redux'
import triviaStore from './redux_reducers'

var store = createStore(triviaStore)

export default store
