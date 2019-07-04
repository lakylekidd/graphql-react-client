import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation } from './../queries/queries';
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
            }
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
            <form id="add-book" onSubmit={this.submitForm}>
                <div className="field">
                    <label>Book name:</label>
                    <input onChange={this.onChange} name="name" type="text" />
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input onChange={this.onChange} name="genre" type="text" />
                </div>
                <div className="field">
                    <label>Author name:</label>
                    <select onChange={this.onChange} name="authorId">
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
