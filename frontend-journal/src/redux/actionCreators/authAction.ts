import axios from 'axios';
import { Dispatch } from 'redux';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOAD_USER,
  AUTH_ERROR,
  AuthActionTypes,
} from '../actionTypes/authTypes';

const API_URL = 'http://localhost:8000/api/users';

export const loadUser = () => async (dispatch: Dispatch<AuthActionTypes>) => {
  try {
    const res = await axios.get(`${API_URL}/profile`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = (username: string, password: string, email: string, first_name: string, last_name: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password, password2: password, email, first_name, last_name });

  try {
    const res = await axios.post(`${API_URL}/registers/`, body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (username: string, password: string) => async (dispatch: Dispatch<AuthActionTypes>) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(`${API_URL}/login/`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    // dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch: Dispatch<AuthActionTypes>) => {
  dispatch({ type: LOGOUT });
};
