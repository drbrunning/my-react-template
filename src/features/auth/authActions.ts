import { AuthState } from '../auth/authTypes';

export type LoginPayload = {
    username: string;
    password: string;
};

// Deprecated
export type LoginAction = {
    type: string;
    payload: LoginPayload;
};

export type LoginSuccessAction = {
    type: 'LOGIN_SUCCESS';
    payload: AuthState['token'];
};

// Deprecated
export type LogoutAction = {
    type: 'LOGOUT';
};

export type LoginFailureAction = {
    type: 'LOGIN_FAILURE';
    payload: string; // Error message
};

// Use a union type for actions handled by the authReducer
export type AuthAction = LoginSuccessAction | LogoutAction | LoginFailureAction;
