module.exports = {
  Query: {
    findbyid: require('./findById')
  },
  Mutation: {
    create: require('./create'),
    update: require('./update'),
    delete: require('./delete')  
  }
}