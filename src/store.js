import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import themeReducer from './reducers/themeReducer';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userSlice,
  theme: themeReducer,
});

const persistReducerConfig = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducerConfig,
  
});

export const persistor = persistStore(store);