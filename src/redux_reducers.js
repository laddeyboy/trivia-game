var initialState = {
  userAnswers: [],
  userPoints: 0,
  questions: []
}

export function triviaStore (state, action) {
  if (state === undefined) {
    return initialState
  }
  switch (action.type) {
    case 'ADD_NEW_QUESTION':
      // make a copy of the state
      var newState = {...state}
      newState = {...state.questions}
      // update state
      newState.questions.push(action.data)
      return newState
    default:
      return state
  }
}

export default triviaStore
