import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import uiReducer from './ui';
import appReducer from './appflow';

export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  app: appReducer,
});
