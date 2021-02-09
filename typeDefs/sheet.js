const { gql } = require('apollo-server')

//input type and type for Sheet
module.exports = gql`
  type Sheet {
    id: ID
    title: String
    data: String
    UserId: ID
  }

  input InputSheet {
    title: String
    data: String
  }

  type Message {
    msg: String
  }
`