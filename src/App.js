import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then( users => this.setState({ contacts: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
