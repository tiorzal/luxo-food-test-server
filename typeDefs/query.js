const { gql } = require('apollo-server');

//list of query for this server
module.exports = gql`
  type Query {
    loadData: User

    findbyid(id: ID): Sheet
  }
`;
