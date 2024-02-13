// Define action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// src/store/reducers/authReducer.ts
export type AuthState = {
    isAuthenticated: boolean;
    token: string | null;
    loading: boolean;
    error: string | null;
};

// Update to include specific action types
export type ActionType =
    | typeof LOGIN_REQUEST
    | typeof LOGIN_SUCCESS
    | typeof LOGOUT
    | typeof LOGIN_FAILURE;
