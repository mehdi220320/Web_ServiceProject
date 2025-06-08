const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    resolvers,
    introspection: true,
    playground: true
});

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});