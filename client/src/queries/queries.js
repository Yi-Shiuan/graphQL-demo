import { gql } from 'apollo-boost';

const GET_AUTHORS_QUERY = gql`
  {
    authors {
      name
      id
    }
  }
`;

const GET_BOOKS_QUERY = gql`
  {
    books {
      name
      id
    }
  }
`;

const ADD_BOOK_MUTATION = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      id
      author {
        name
      }
    }
  }
`;

const GET_BOOK_QUERY = gql`
  query($id: ID!) {
    book(id: $id) {
      name
      genre
      id
      author {
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

export { GET_AUTHORS_QUERY, GET_BOOKS_QUERY, ADD_BOOK_MUTATION, GET_BOOK_QUERY };
