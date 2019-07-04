import React from 'react';
import './App.css';

// Import components
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>Billy's Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
