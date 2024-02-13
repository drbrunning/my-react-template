import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './authTypes';
import {
    LoginPayload,
    LoginSuccessAction,
    LoginFailureAction,
    LogoutAction,
} from '../auth/authActions';

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        loginRequest: (state, _action: PayloadAction<LoginPayload>) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (
            state,
            action: PayloadAction<LoginSuccessAction['payload']>
        ) => {
            state.isAuthenticated = true;
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure: (
            state,
            action: PayloadAction<LoginFailureAction['payload']>
        ) => {
            state.loading = false;
            state.error = action.payload;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        logout: (state, _action: PayloadAction<LogoutAction>) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
    authSlice.actions;

export default authSlice.reducer;
