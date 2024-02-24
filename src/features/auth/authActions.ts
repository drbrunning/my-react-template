import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    LoginPayload,
    LoginRequestAction,
    LoginSuccessAction,
    LoginFailureAction,
    LogoutRequestAction,
    LogoutSuccessAction,
    LogoutFailureAction,
} from './authTypes';

export const loginRequest = (payload: LoginPayload): LoginRequestAction => ({
    type: LOGIN_REQUEST,
    payload,
});

export const loginSuccess = (
    user: LoginSuccessAction['payload']['user'],
    tokens: LoginSuccessAction['payload']['tokens']
): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
    payload: { user, tokens },
});

export const loginFailure = (error: string): LoginFailureAction => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logoutRequest = (): LogoutRequestAction => ({
    type: LOGOUT_REQUEST,
});

export const logoutSuccess = (): LogoutSuccessAction => ({
    type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error: string): LogoutFailureAction => ({
    type: LOGOUT_FAILURE,
    payload: error,
});
