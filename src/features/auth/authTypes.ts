import { LoginResponse } from './authResponse';

// features/auth/authTypes.ts
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// Payload Types
export type LoginPayload = {
    email: string;
    password: string;
};

// Action Types
export type LoginRequestAction = {
    type: typeof LOGIN_REQUEST;
    payload: LoginPayload;
};

export type LoginSuccessAction = {
    type: typeof LOGIN_SUCCESS;
    payload: LoginResponse['user'];
};

export type LoginFailureAction = {
    type: typeof LOGIN_FAILURE;
    payload: string;
};

export type LogoutRequestAction = {
    type: typeof LOGOUT_REQUEST;
};

export type LogoutSuccessAction = {
    type: typeof LOGOUT_SUCCESS;
};

export type LogoutFailureAction = {
    type: typeof LOGOUT_FAILURE;
    payload: string;
};

// Combining Action Types
export type AuthActionTypes =
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutRequestAction
    | LogoutSuccessAction
    | LogoutFailureAction;
