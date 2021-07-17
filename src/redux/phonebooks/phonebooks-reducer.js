import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

// import types from './phonebooks-types';
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    changeFilter,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
} from './phonebooks-actions';



const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact =>
        contact.id !== payload),
})
// const items = (
//     state = [], { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [payload, ...state];
//         case types.DELETE:
//             return state.filter(contact =>
//                 contact.id !== payload)
//         default:
//             return state;
//     }
// };

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
})
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;
//         default:
//             return state;
//     }

// };


export default combineReducers({
    items,
    filter,
    loading,
})



            // const findContact = state.find(contact => contact.name === payload.name && contact.number === payload.number);


            // if (findContact) {
            //     alert(`${payload.name} is already in contacts!`);
            //     break;
            // }