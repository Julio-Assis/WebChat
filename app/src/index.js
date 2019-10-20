import { rootReducer } from './redux/rootReducer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./sagas/rootSaga";
import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
