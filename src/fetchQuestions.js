import axios from 'axios'

function shuffleAnswers (anArrayOfAnswers) {
  let ctr = anArrayOfAnswers.length
  let temp
  let index

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr)
    ctr--
    temp = anArrayOfAnswers[ctr]
    anArrayOfAnswers[ctr] = anArrayOfAnswers[index]
    anArrayOfAnswers[index] = temp
  }
  return anArrayOfAnswers
}

function formatTriviaAnswers (correctAns, incorrectAnsArr, questionType) {
  var answerArr = []
  answerArr.push({answer: correctAns, correct: true})
  for (let i = 0; i < incorrectAnsArr.length; i++) {
    answerArr.push({answer: incorrectAnsArr[i], correct: false})
  }
  if (questionType === 'boolean') {
    return answerArr
  } else {
    return shuffleAnswers(answerArr)
  }
}

function formatTriviaData (APIdata) {
  var newQuestionSet = APIdata.map((questionItem) => {
    return {
      category: questionItem.category,
      type: questionItem.type,
      difficulty: questionItem.difficulty,
      question: questionItem.question,
      answers: formatTriviaAnswers(
        questionItem.correct_answer,
        questionItem.incorrect_answers,
        questionItem.type)
    }
  })
  return newQuestionSet
}

function fetchAllQuestions () {
  const apiURL = 'http://localhost:8080/api/get-questions'
  return axios.get(apiURL)
    .then(response => {
      console.log('Success...questions received')
      return formatTriviaData(response.data)
    })
    .catch(err => console.error(err))
}

export default fetchAllQuestions
