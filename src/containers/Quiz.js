import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as quizActions from '../actions/quiz'


import Card from '../components/Card'

const Quiz = ({ quiz, quizActions }) => {
  return (
    <div>
      <div><pre>{JSON.stringify(quiz)}</pre></div>

      <Card data={quiz.questions[quiz.current]}/>

      <button onClick={() => quizActions.correct()}>correct</button>
      <button onClick={() => quizActions.incorrect()}>incorrect</button>
      <button onClick={() => quizActions.skip()}>skip</button>
    </div>
  )
};

const mapStateToProps = state => ({
  quiz: state.quiz
});

const mapDispatchToProps = dispatch => ({
  quizActions: bindActionCreators(quizActions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)
