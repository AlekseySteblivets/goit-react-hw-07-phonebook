import { v4 as uuidv4 } from 'uuid';
// import types from './phonebooks-types';
import { createAction } from '@reduxjs/toolkit';


export const addContact = createAction('phonebooks/add', (name, number) => {
    return {
        payload: {
            name: name,
            number: number,
            id: uuidv4()
        }
    }
})
// console.log(addContact('ku-ku', 55));

// export const addContact = (name, number) => ({
//     type: types.ADD,
//     payload: {
//         name: name,
//         number: number,
//         id: uuidv4()

//     },

// });

export const deleteContact = createAction('phonebooks/delete')
// export const deleteContact = idFromContact => ({
//     type: types.DELETE,
//     payload: idFromContact,
// })

export const changeFilter = createAction('phonebooks/changeFilter')
// export const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })
