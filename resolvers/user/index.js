module.exports = {
  Query: {

  },
  Mutation: {
    register: require('./register'),
    login: require('./login'),
    saveData: require('./saveData')
  }
}