var initialState = {
  playerName: 'Player1',
  userAnswers: [],
  userPoints: 0,
  questions: [],
  // questionIndex is going to have to keep track of where I'm at in my state questions array
  questionIndex: 0
}

export function triviaStore (state, action) {
  if (state === undefined) {
    return initialState
  }
  switch (action.type) {
    case 'ADD_NEW_QUESTIONS':
      // make a copy of the state
      var newState = {...state}
      newState.questions = [...state.questions]
      newState.questions.push(action.data)
      return newState
    default:
      return state
  }
}

export default triviaStore
