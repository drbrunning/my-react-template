// Define action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

// src/store/reducers/authReducer.ts
export type AuthState = {
    isAuthenticated: boolean;
    token: string | null;
    loading: boolean;
    error: string | null;
};

export type LoginPayload = {
    username: string;
    password: string;
};

// Update to include specific action types
export type ActionType =
    | typeof LOGIN_REQUEST
    | typeof LOGIN_SUCCESS
    | typeof LOGIN_FAILURE
    | typeof LOGOUT_REQUEST;
