//env set up for jwt secret
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { ApolloServer } = require("apollo-server");

//import typedef & resolver
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

//new server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    return { req }
  }
})

//server start
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
