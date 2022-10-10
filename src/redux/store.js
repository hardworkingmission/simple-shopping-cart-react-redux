import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
