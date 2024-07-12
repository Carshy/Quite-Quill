export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const LOAD_USER = 'LOAD_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

export interface User {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: { token: string };
}

interface RegisterFailAction {
  type: typeof REGISTER_FAIL;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: { token: string };
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LoadUserAction {
  type: typeof LOAD_USER;
  payload: User;
}

interface AuthErrorAction {
  type: typeof AUTH_ERROR;
}

export type AuthActionTypes =
  | RegisterSuccessAction
  | RegisterFailAction
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction
  | LoadUserAction
  | AuthErrorAction;
