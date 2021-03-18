import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import logger from 'redux-logger'
export default createStore(
  rootReducer,
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
