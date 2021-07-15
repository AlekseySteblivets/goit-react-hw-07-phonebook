// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from "redux-devtools-extension";
import phonebooksReducer from "./phonebooks-reducer";



const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}),
    logger,
];

// const rootReducer = combineReducers({
//     contacts: persistReducer(persistConfig, phonebooksReducer),
// })

// const store = createStore(rootReducer, composeWithDevTools());

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const contactsPersistConfig = {
    key: 'myLocalStorageContacts',
    storage,
    blacklist: ['filter'],
}

const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, phonebooksReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };