import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            description
            authors
            image
            link
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: bookInput) {
      saveBook(input: $input) {
      _id
      username
      email
      saveBooks {
        bookId
        authors
        description
        image
        title
        link
       }
     }
   }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookid: String!) {
    removeBook(bookId: $bookid) {
      _id
      username
      friendCount
      friends {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
        }
      }
    }
`;