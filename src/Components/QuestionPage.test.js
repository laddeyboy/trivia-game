const rewire = require("rewire")
const QuestionPage = rewire("./QuestionPage")
const mapStateToProps = QuestionPage.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ playerName: "user_name", userPoints: "Identity", questions: 75017, questionIndex: 100, questionSetNumber: 0, disabledButton: "George", endOfQuestions: "logistical", questionPageIsLoading: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ playerName: "user-name", userPoints: "Interactions", questions: 75017, questionIndex: 100, questionSetNumber: 100, disabledButton: "Michael", endOfQuestions: "methodical", questionPageIsLoading: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ playerName: "username", userPoints: "Implementation", questions: 99950, questionIndex: 100, questionSetNumber: 100, disabledButton: "Anas", endOfQuestions: "logistical", questionPageIsLoading: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ playerName: "user_name", userPoints: "Quality", questions: 107050, questionIndex: 0, questionSetNumber: -100, disabledButton: "George", endOfQuestions: "4th generation", questionPageIsLoading: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ playerName: "user123", userPoints: "Interactions", questions: "09498-0048", questionIndex: 0, questionSetNumber: 1, disabledButton: "Anas", endOfQuestions: "value-added", questionPageIsLoading: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps({ playerName: "", userPoints: "", questions: "", questionIndex: -Infinity, questionSetNumber: -Infinity, disabledButton: "", endOfQuestions: "", questionPageIsLoading: false })
        }
    
        expect(callFunction).not.toThrow()
    })
})
