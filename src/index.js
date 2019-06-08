import React from 'react';
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import to_be from './data/to_be.json'

import Quiz from './containers/Quiz'

const store = createStore(
  rootReducer, {
    quiz: {total: 5, incorrect: 0, correct: 0, current: 0, questions: to_be}
  }
);

render(
  <Provider store={store}>
    <Quiz />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
