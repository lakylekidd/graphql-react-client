import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

// Create the get books query
const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

class BookList extends Component {

    // Render each book individually
    renderBook = (books) => {
        return books.map(book => {
            return (
                <li key={book.id}>{book.name}</li>
            )
        })
    }

    render() {
        // Retrieve the books
        const data = this.props.data;
        return (
            <div>
                {data.loading && "Loading books..."}
                {
                    !data.loading &&
                    <ul id="book-list">
                        {
                            this.renderBook(data.books)
                        }
                    </ul>
                }
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);