const { gql } = require('apollo-server')

//input type and type for user
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
    Sheets: [Sheet]
  }

  type Token {
    token: String
  }

  type DataUser {
    data: String
  }
`