import React, { Component } from "react";

import ContactForm from './components/ContactForm';
// import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter';
import ContactList from './components/ContactList';


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

  // componentDidMount() {
  //   // console.log('пришел ДИДМАУНТ');
  //   const contacts = localStorage.getItem('myLocalStorageContacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts })
  //   }
  //   console.log(parsedContacts);
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('myLocalStorageContacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  // changeFilter = e => this.setState({ filter: e.currentTarget.value });

  // getVisibleContacts = () => {
  //   const normalizedFilter = this.state.filter.toLowerCase();
  //   return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // addContact = (name, number) => {
  //   const idContact = uuidv4();
  //   const nameFromInput = { name: name, number: number, id: idContact };
  //   const findContact = this.state.contacts.find(contact => contact.name === name && contact.number === number);


  //   if (findContact) {
  //     alert(`${name} is already in contacts!`);
  //     return;
  //   }

  //   this.setState(prevState => ({
  //     contacts: [nameFromInput, ...prevState.contacts],
  //   }));
  // };

  // deleteContact = (idFromContact) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact =>
  //       contact.id !== idFromContact),
  //   }))
  // }

  render() {
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    )
  }

}

export default App;

{/* <ContactForm addContact={this.addContact} /> */ }
{/* <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} /> */ }
{/* <Filter value={this.state.filter} оnChange={this.changeFilter} /> */ }