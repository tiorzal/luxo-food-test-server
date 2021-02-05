const { gql } = require('apollo-server')

module.exports = gql`
  type User {
    id: ID
    email: String
    password: String
    firstname: String
    lastname: String
  }

  input InputUser {
    email: String
    password: String
    firstname: String
    lastname: String
  }

  type Token {
    token: String
  }

  type DataUser {
    data: String
  }
`