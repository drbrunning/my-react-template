// sagas/authSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../../api/AxiosInstance';
import {
    loginSuccess,
    loginFailure,
    logoutSuccess,
    logoutFailure,
} from '../auth/authActions';
import { LOGIN_REQUEST, LOGOUT_REQUEST, LoginRequestAction } from './authTypes';
import { LoginResponse } from './authResponse';
import { extractSagaErrorMessage } from '../../utils/HandleError';
import { toast } from 'react-hot-toast';

function* loginSaga(action: LoginRequestAction) {
    try {
        // Specify the response type for better type-checking
        const response: { data: LoginResponse } = yield call(
            axiosInstance.post,
            '/api/login',
            action.payload
        );

        // Assuming you want to store user details on login success
        yield put(loginSuccess(response.data.user, response.data.tokens));

        // Optionally, show a success toast message
        toast.success('Logged in successfully');
    } catch (error) {
        // Consider a more specific error handling strategy
        const message = extractSagaErrorMessage(error, 'Login failed');
        yield put(loginFailure(message));
        toast.error(message);
    }
}

function* logoutSaga() {
    try {
        yield call(axiosInstance.post, '/api/logout');
        yield put(logoutSuccess());
        toast.success('Logged out successfully');
    } catch (error) {
        const message = extractSagaErrorMessage(error, 'Logout failed');
        yield put(logoutFailure(message));
        toast.error(message);
    }
}

export default function* watchAuthSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
    yield takeLatest(LOGOUT_REQUEST, logoutSaga);
}
