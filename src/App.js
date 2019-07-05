import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

// Import components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Setup Apollon Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <AddBook />
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;