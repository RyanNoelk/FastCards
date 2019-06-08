import quizConst from '../constants/quizConst'

const quiz = (state = {total: 0, incorrect: 0, correct: 0, current: 0}, action) => {
  switch (action.type) {
    case quizConst.INIT:
      return { ...state, questions: action.questions};
    case quizConst.CORRECT:
      return { ...state, correct: state.correct + 1, current: state.current + 1};
    case quizConst.INCORRECT:
      return { ...state, incorrect: state.incorrect + 1, current: state.current + 1};
    case quizConst.SKIP:
      return { ...state, current: state.current + 1};
    default:
      return state
  }
};

export default quiz
