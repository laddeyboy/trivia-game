// My Actions
const ADD_NEW_QUESTIONS = 'ADD_NEW_QUESTIONS' // user asked to make a call to API for new questions
const REQUEST_API = 'REQUEST_API'
const RECEIVED_API = 'RECEIVED_API'

export function addQuestionsToQueue (data) {
  return {
    type: ADD_NEW_QUESTIONS,
    data: data
  }
}

export function requestAPI (data) {
  return {
    type: REQUEST_API,
    data
  }
}

export function receiveAPI (data) {
  return {
    type: RECEIVED_API,
    data: data
  }
}
