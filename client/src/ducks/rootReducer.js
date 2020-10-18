import { combineReducers } from 'redux';
import { il8nReducer, il8n_REDUCER_KEY } from './il8n';

export const rootReducer = combineReducers({
  [il8n_REDUCER_KEY]: il8nReducer,
});
