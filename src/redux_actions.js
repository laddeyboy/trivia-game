// My Actions
const ADD_PLAYER_NAME = 'ADD_PLAYER_NAME'
const ADD_NEW_QUESTIONS = 'ADD_NEW_QUESTIONS' // user asked to make a call to API for new questions
const END_OF_QUESTIONS = 'END_OF_QUESTIONS'
const INCREMENT_QUESTION_CTR = 'INCREMENT_QUESTION_CTR'
const INCREMENT_QUESTION_SET_CTR = 'INCREMENT_QUESTION_SET_CTR'
const DISABLE_BUTTON = 'DISABLE_ANSWER_BUTTON'
const ENABLE_BUTTON = 'ENABLE_ANSWER_BUTTON'
const ADD_POINT = 'ADD_POINT'
const QUESTIONS_IS_LOADING = 'QUESTIONS_IS_LOADING'

export function addQuestionsToQueue (data) {
  return {
    type: ADD_NEW_QUESTIONS,
    data: data
  }
}

export function toggleEndOfQuestions (data) {
  return {
    type: END_OF_QUESTIONS,
    data: data
  }
}

export function addPlayersName (data) {
  return {
    type: ADD_PLAYER_NAME,
    data: data
  }
}

export function incrementQuestionCounter (data) {
  return {
    type: INCREMENT_QUESTION_CTR,
    data: data
  }
}

export function incrementQuestionSetCounter (data) {
  return {
    type: INCREMENT_QUESTION_SET_CTR,
    data: data
  }
}

export function disableAnswerButtons () {
  return {
    type: DISABLE_BUTTON,
    data: null
  }
}

export function enableAnswerButtons () {
  return {
    type: ENABLE_BUTTON,
    data: null
  }
}

export function addUserPoint () {
  return {
    type: ADD_POINT,
    data: null
  }
}

export function toggleQuestionsLoading (data) {
  return {
    type: QUESTIONS_IS_LOADING,
    data: data
  }
}
