import React from "react";
import { connect } from "react-redux";
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as phonebookOperations from '../../redux/phonebooks/phonebooks-operations';
import * as phonebookSelectors from '../../redux/phonebooks/phonebooks-selectors';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className="Contact-container">
            {/* <h2 className="Contact-container__title">Contacts</h2> */}
            <ul >
                {contacts.map(contact => (
                    <li className={styles.contactList} key={uuidv4()}>{contact.name} : {contact.number}
                        <button onClick={() => onDeleteContact(contact.id)} >Delete</button>
                    </li>))
                }
            </ul>
        </div>
    )
};

ContactList.propTypes = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,

        })
    ),
};

const mapStateToProps = (state) => ({
    contacts: phonebookSelectors.getVisibleContacts(state),
});


const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
    // contacts: () => null,

});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);



// const getVisibleContacts = (allContacts, filter) => {
//     const filterNormalize = filter.toLowerCase();

//     return allContacts.filter(contact =>
//         contact.name.toLowerCase().includes(filterNormalize),
//     );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contactsData: getVisibleContacts(items, filter),
// });