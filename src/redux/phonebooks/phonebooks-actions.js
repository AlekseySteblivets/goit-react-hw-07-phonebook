// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';
export const addContact = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };
    dispatch({ type: 'phonebooks/addContactRequest' });

    axios
        .post('/contacts', contact)
        .then(({ data }) =>
            dispatch({ type: 'phonebooks/addContactSuccess', payload: data }),
        )
        .catch(error => dispatch({ type: 'phonebooks/addContactError', payload: error }));
};

// export const addContact = createAction('phonebooks/add', (name, number) => {
//     return {
//         payload: {
//             name: name,
//             number: number,
//             id: uuidv4()
//         }
//     }
// })

export const deleteContact = createAction('phonebooks/delete')

export const changeFilter = createAction('phonebooks/changeFilter')
