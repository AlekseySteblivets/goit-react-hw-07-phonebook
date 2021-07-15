import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import types from './phonebooks-types';
import * as phonebooksActions from './phonebooks-actions';

// import actions from './phonebooks-actions';
// {
//     contacts: {
//         items: [],
//             filter: ''
//     }
// }

const items = createReducer([], {
    [phonebooksActions.addContact]: (state, { payload }) => [payload, ...state],
    [phonebooksActions.deleteContact]: (state, { payload }) => state.filter(contact =>
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


const filter = createReducer('', {
    [phonebooksActions.changeFilter]: (_, { payload }) => payload,
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
    filter
})



            // const findContact = state.find(contact => contact.name === payload.name && contact.number === payload.number);


            // if (findContact) {
            //     alert(`${payload.name} is already in contacts!`);
            //     break;
            // }