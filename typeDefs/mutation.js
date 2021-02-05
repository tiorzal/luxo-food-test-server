const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    register(data: InputUser): User
    login(email: String password: String): Token
    saveData(data: String): DataUser
  }
`