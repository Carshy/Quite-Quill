import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOAD_USER,
    AUTH_ERROR,
    AuthActionTypes,
    AuthState,
  } from '../actionTypes/authTypes';
  
  const initialState: AuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
  };
  
  export default function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          loading: false,
        };
      case LOAD_USER:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: action.payload,
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
        };
      default:
        return state;
    }
  }
  