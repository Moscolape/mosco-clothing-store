import { configureStore } from '@reduxjs/toolkit';
// import { compose, applyMiddleware } from '@reduxjs/toolkit';
// import { loggerMiddleware } from './middleware/logger';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';


// import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ 
    reducer: persistedReducer, 
    middleware: [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean) 
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);