import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from './../queries/queries';
import "./BookList.css";

// Import components
import BookDetails from './BookDetails';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    selectBook = (id) => {
        this.setState({
            selected: id
        })
    }

    // Render each book individually
    renderBook = (books) => {
        return books.map(book => {
            return (
                <li onClick={() => this.selectBook(book.id)} key={book.id}>{book.name}</li>
            )
        })
    }

    render() {
        // Retrieve the books
        const data = this.props.data;
        return (
            <div className="books-list">
                <div>
                    <h2>Billy's Reading List</h2>
                    {data.loading && "Loading books..."}
                    {
                        data.books &&
                        <ul className="books">
                            {
                                this.renderBook(data.books)
                            }
                        </ul>
                    }
                </div>
                <BookDetails bookId={this.state.selected} />
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);