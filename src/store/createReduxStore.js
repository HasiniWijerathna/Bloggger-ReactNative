import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducers from '../reducers';

/**
 * Creates and returns a redux store
 * @param  {Object} initialState The initial state of the application
 * @return  {Store}              Redux Store
 */
export default function createReduxStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk)
  );
  
  return createStore(rootReducers, initialState, enhancer);
}
