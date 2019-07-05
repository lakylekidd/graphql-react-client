import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from './../queries/queries';
import "./BookDetails.css";

class BookDetails extends Component {

    renderOtherBooks = (other) => {
        return other.map(item => {
            return (
                <li key={item.id}>{item.name}</li>
            )
        })
    }

    displayBookDetails = (book) => {
        return (
            <div className="book-details">
                <h2>{book.name}</h2>
                <p><i>genre:</i>"{book.genre}"</p>
                {
                    book.author && <p><i>author:</i>"{book.author.name}"</p>
                }
                <p>All books by this author:</p>
                <ul className="other-books">
                    {
                        book.author.books &&
                        this.renderOtherBooks(book.author.books)
                    }
                </ul>
            </div>
        )
    }

    render() {
        // Check if book exists
        const { book } = this.props.data;
        if (book) {
            return this.displayBookDetails(book);
        }
        // Begin rendering
        return (
            <div className="book-details">
                No books selected
            </div>
        )
    }
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);
