import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../features/auth/authSlice';
import rootSaga from '../sagas/rootSaga';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
    auth: authReducer,
});

export const makeStore = (preloadedState?: Partial<RootState>) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: rootReducer,
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({ thunk: false }).concat(
                sagaMiddleware,
            );
        },
        preloadedState,
    });
    // configure listeners using the provided defaults
    // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
    setupListeners(store.dispatch);
    sagaMiddleware.run(rootSaga);
    return store;
};

export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
