import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Contacts from './Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    this.setState({ name: '' });
  };

  deleteContact = contactIdToDel => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactIdToDel
      ),
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="part-container">
          <h1 className="phonebook-title">Phonebook</h1>
          <form className="phonebook-form" onSubmit={this.submitHandler}>
            <label htmlFor="id-9">Name</label>
            <input
              type="text"
              name="name"
              id="id-9"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className="phonebook-input"
            />

            <button type="submit" className="phonebook-add">
              Add contact
            </button>
          </form>
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
