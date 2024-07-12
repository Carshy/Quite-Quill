import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

// Combine reducers if you have more than one
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // Pass root reducer to configureStore
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// Define the RootState type using ReturnType
export type RootState = ReturnType<typeof rootReducer>;

// Export the store as the default export
export default store;
