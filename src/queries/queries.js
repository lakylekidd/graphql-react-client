import { gql } from 'apollo-boost';

// Create the get books query
const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

// Create the get books query
const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

// Adds a new book
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

// Gets a book by id
const getBookQuery = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export { getAuthorsQuery, getBookQuery,
getBooksQuery, addBookMutation };