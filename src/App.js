import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then( users => this.setState({ contacts: users }));
  }

  render() {
    const { contacts, searchField } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox
          placeholder="Search..."
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList contacts={filteredContacts} />
      </div>
    );
  };
}

export default App;
