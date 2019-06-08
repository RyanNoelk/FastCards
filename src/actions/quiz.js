import quizConst from '../constants/quizConst'

export const init = questions => ({
  type: quizConst.INIT,
  questions: questions
});

export const correct = () => ({
  type: quizConst.CORRECT
});

export const incorrect = () => ({
  type: quizConst.INCORRECT
});

export const skip = () => ({
  type: quizConst.SKIP
});
