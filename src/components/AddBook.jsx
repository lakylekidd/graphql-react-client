import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from './../queries/queries';
import "./AddBook.css";

class AddBook extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        const result = this.props.addBook({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            // This will refetch all queries stated bellow
            refetchQueries: [{ query: getBooksQuery }]
        }).then(x => {
            this.setState({
                name: '',
                genre: '',
                authorId: ''
            });
        });
    }

    displayAuthors = () => {
        // Get the authors
        const data = this.props.authors;
        if (data.loading) {
            return <option>Loading authors...</option>
        } else if (data.authors) {
            return data.authors.map(author => {
                return (
                    <option value={author.id} key={author.id}>{author.name}</option>
                )
            })
        }
    };

    render() {
        // Render form
        return (
            <form className="add-book" onSubmit={this.submitForm}>
                <div className="field">
                    <label>Book name:</label>
                    <input onChange={this.onChange} value={this.state.name} name="name" type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input onChange={this.onChange} value={this.state.genre} name="genre" type="text" />
                </div>
                <div className="field">
                    <label>Author name:</label>
                    <select onChange={this.onChange} value={this.state.authorId} name="authorId">
                        <option value="">--select author--</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>
            </form>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "authors" }),
    graphql(addBookMutation, { name: "addBook" })
)(AddBook);
