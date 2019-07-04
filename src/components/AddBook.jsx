import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import "./AddBook.css";

// Create the get books query
const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

class AddBook extends Component {

    displayAuthors = () => {
        // Get the authors
        const data = this.props.data;
        if (data.loading) {
            return <option>Loading authors...</option>
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    };

    render() {


        // Render form
        return (
            <form id="add-book">
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" />
                </div>
                <div className="field">
                    <label>Author name:</label>
                    <select>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        )
    }
}

export default graphql(getAuthorsQuery)(AddBook);
