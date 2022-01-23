import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

const logger = createLogger({
  stateTransformer: (state) => 
    Object.keys(state).reduce((acum, key) => {
      if (Immutable.Iterable.isIterable(state[key])) {
        acum[key] = state[key].toJS();
      } else {
        acum[key] = state[key];
      }

      return acum;
    }, {})
});

import rootReducer from './modules';

const env = process.env.NODE_ENV || 'development';

const sagaMiddleware = createSagaMiddleware();

// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware,
    env === 'development' ? logger : false
  )
);

// then run the saga
// sagaMiddleware.run(mySaga);

// render the application

export default store;
