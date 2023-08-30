import { combineReducers } from 'redux';
import authReducer from './authSlice';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  // Otros reducers aquí si los tienes
});

export default rootReducer;
