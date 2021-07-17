import React, { Component } from "react";
import { connect } from "react-redux";

import ContactForm from './components/ContactForm';
// import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import * as phonebookOperations from './redux/phonebooks/phonebooks-operations';
import * as phonebookSelectors from './redux/phonebooks/phonebooks-selectors';

class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    // filter: '',
  }

  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        {this.props.isloadingContacts && <h1>loading...</h1>}
        <ContactList />

      </div>
    )
  }

}

const mapStateToProps = state => ({
  isloadingContacts: phonebookSelectors.getIsloadingContacts(state),
})

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(phonebookOperations.fetchContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);