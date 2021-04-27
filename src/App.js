import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: 'Name One',
          id: 'id1'
        },
        {
          name: 'Name Two',
          id: 'id2'
        },
        {
          name: 'Name Three',
          id: 'id3'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.contacts.map(contact => <h1 key={contact.id}> { contact.name } </h1>)
        }
      </div>
    );
  }
}

export default App;
