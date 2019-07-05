import React, { Component } from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

// Import components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// Retrieve endpoint
const endpoint = process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql';

// Setup Apollon Client and use he end
const client = new ApolloClient({
  uri: endpoint
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