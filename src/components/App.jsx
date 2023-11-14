import { Component } from 'react';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(5),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactIdToDel => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactIdToDel
      ),
    }));
  };

  // formSubmitHandler = (name, number) => {
  //   console.log(name, number);
  // };

  render() {
    return (
      <div className="container">
        <div className="part-container">
          <h1 className="phonebook-title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>

        <div className="part-container">
          <h2 className="phonebook-subtitle">Contacts</h2>
          <Contacts
            contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
