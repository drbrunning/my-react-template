import { createReducer } from '@reduxjs/toolkit';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    AuthActionTypes,
} from './authTypes';
import { LoginResponse } from './authResponse';

// Define the state shape
interface AuthState {
    isAuthenticated: boolean;
    user: LoginResponse['user'] | null;
    error: string | null;
    loading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    // Initialize other slices of state as needed
};

// Using createReducer from Redux Toolkit for simplicity and compatibility
/* const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(LOGIN_REQUEST, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(LOGIN_SUCCESS, (state, action: LoginSuccessAction) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        })
        .addCase(LOGIN_FAILURE, (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
        })
        .addCase(LOGOUT_REQUEST, (state) => {
            state.loading = true;
        })
        .addCase(LOGOUT_SUCCESS, (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = null;
        })
        .addCase(LOGOUT_FAILURE, (state) => {
            state.loading = false;
        });
}); */

// AuthReducer
function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload, // Assuming payload contains user data
                loading: false,
                error: null,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                loading: false,
                error: action.payload, // Assuming payload contains error message
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                loading: false,
                error: null,
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload, // Assuming payload contains error message
            };
        default:
            return state;
    }
}

export default authReducer;
