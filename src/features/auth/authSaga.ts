import { AxiosResponse } from 'axios';
import { LoginAction } from './authActions';
import { LoginResponse } from './authResponse';
import {
    call,
    put,
    takeLatest,
    CallEffect,
    PutEffect,
} from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from './authTypes';
import axiosInstance from '../../api/AxiosInstance';

// Define the return type of the API call function
const loginUser = (
    payload: LoginAction['payload']
): Promise<AxiosResponse<LoginResponse>> => {
    return axiosInstance.post('/api/auth/login', payload);
};

function* login(
    action: LoginAction
): Generator<
    CallEffect<AxiosResponse<LoginResponse>> | PutEffect,
    void,
    AxiosResponse<LoginResponse>,
> {
    try {
        const response: AxiosResponse<LoginResponse> = yield call(
            loginUser,
            action.payload
        );

        yield put({ type: LOGIN_SUCCESS, payload: response.data });
        // Navigate or save token here as needed
    } catch (error: unknown) {
        if (error instanceof Error) {
            yield put({
                type: LOGIN_FAILURE,
                payload: error.message || 'Error',
            });
        } else {
            yield put({
                type: LOGIN_FAILURE,
                payload: 'An unknown error occurred.',
            });
        }
    }
}

function* authSaga() {
    yield takeLatest(LOGIN_REQUEST, login);
}

export default authSaga;
