const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    register(data: InputUser): User
    login(email: String password: String): Token
    saveData(data: String): DataUser

    create(data: InputSheet): Sheet
    update(data: String id: ID): Sheet
    delete(id: ID): Message
  }
`