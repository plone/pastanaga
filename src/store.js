import createLogger from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

/**
 * AddToMiddleWare.
 * @function addToMiddleWare
 * @param {Array} data Middleware Array
 * @param {Object} logger Logger instance
 * @returns {Array} middleware.
 */
const addToMiddleWare = (data, logger) => {
  const devTools = typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f;
  const debugLogger = logger ? applyMiddleware(createLogger()) : f => f;
  return [...data, devTools, debugLogger];
};

/**
 * Configure store.
 * @function configureStore
 * @param {Object} initialState state object
 * @param {Object} history state object
 * @param {bool} logger showLogger
 * @param {Object} apiHelper ApiHelper
 * @returns {Object} Store.
 */
export default function configureStore(
  initialState,
  history,
  logger
) {
  const middlewares = addToMiddleWare(
    [applyMiddleware(routerMiddleware(history), thunk)],
    logger,
  );

  const createStoreWithMiddleware = compose(...middlewares)(createStore);
  const store = createStoreWithMiddleware(reducer, initialState);

  return store;
}
