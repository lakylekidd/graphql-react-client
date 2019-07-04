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

// 
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };