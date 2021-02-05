module.exports = {
  Query: {
    loadData: require('./loadData')
  },
  Mutation: {
    register: require('./register'),
    login: require('./login'),
    saveData: require('./saveData')
  }
}