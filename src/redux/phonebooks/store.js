// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
// import { composeWithDevTools } from "redux-devtools-extension";
import phonebooksReducer from "./phonebooks-reducer";

// const myMiddleware = store => next => action => {
//     console.log('Моя прослойка!', action);
//     next(action);
// }

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    // myMiddleware,
    logger,
];

// const rootReducer = combineReducers({
//     contacts: persistReducer(persistConfig, phonebooksReducer),
// })

// const store = createStore(rootReducer, composeWithDevTools());

// const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: {
        contacts: phonebooksReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export default store;