const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    loadData: User

    findbyid(id: ID): Sheet
  }
`;
