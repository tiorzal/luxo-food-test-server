const { gql } = require('apollo-server')

module.exports = gql`
  input InputUser {
    email: String
    password: String
    firstname: String
    lastname: String
  }

  type User {
    id: ID
    email: String
    password: String
    firstname: String
    lastname: String
    data: String
  }

  type Token {
    token: String
  }

  type DataUser {
    data: String
  }
`