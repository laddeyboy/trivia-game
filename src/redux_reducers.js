var initialState = {
  playerName: 'Player1',
  userAnswers: [],
  userPoints: 0,
  questions: [],
  // questionIndex is going to have to keep track of where I'm at in my state questions array
  questionIndex: 0,
  questionSetNumber: 0,
  disabledButton: true,
  endOfQuestions: false,
  questionPageIsLoading: true
}

export function triviaStore (state, action) {
  if (state === undefined) {
    return initialState
  }
  switch (action.type) {
    case 'ADD_NEW_QUESTIONS':
      // make a copy of the state
      var newState = {...state}
      newState.questions = [...state.questions, action.data]
      return newState
    case 'ADD_PLAYER_NAME':
      newState = {...state}
      newState.playerName = action.data
      return newState
    case 'INCREMENT_QUESTION_CTR':
      newState = {...state}
      newState.questionIndex++
      return newState
    case 'INCREMENT_QUESTION_SET_CTR':
      newState = {...state}
      newState.questionSetNumber++
      return newState
    case 'DISABLE_ANSWER_BUTTON':
      newState = {...state}
      newState.disabledButton = false
      return newState
    case 'ENABLE_ANSWER_BUTTON':
      newState = {...state}
      newState.disabledButton = true
      return newState
    case 'ADD_POINT':
      newState = {...state}
      newState.userPoints++
      return newState
    case 'END_OF_QUESTIONS':
      newState = {...state}
      newState.endOfQuestions = action.data
      return newState
    case 'QUESTIONS_IS_LOADING':
      newState = {...state}
      newState.questionPageIsLoading = action.data
      return newState
    case 'RESET_QUESTION_ARRAY_COUNTER':
      newState = {...state}
      newState.questionIndex = 0
      return newState
    default:
      return state
  }
}

export default triviaStore
