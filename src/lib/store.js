import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import main from './reducers/main.js';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  main,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    sagaMiddleware,
  )),
);

sagaMiddleware.run(rootSaga);

export default store;
