import { configureStore } from '@reduxjs/toolkit';
// import { compose, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
// import { loggerMiddleware } from './middleware/logger';

import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({ 
    reducer: persistedReducer, 
    middleware: [process.env.NODE_ENV !== 'production' && logger].filter(Boolean) 
});

export const persistor = persistStore(store);