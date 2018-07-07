// My Actions
const ADD_NEW_QUESTIONS = 'ADD_NEW_QUESTIONS' // user asked to make a call to API for new questions

export function addQuestionsToQueue (data) {
  return {
    type: ADD_NEW_QUESTIONS,
    data: data
  }
}
