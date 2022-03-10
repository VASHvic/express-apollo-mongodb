const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./typeDefs');
const {resolvers} = require('./resolvers');
const {connectDB} = require('./db');

const app = express();
connectDB();

app.get('/', (req, res) => {
  res.send('welcome to home');
});

module.exports = app;

async function start() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({app});

  app.use('*', (req, res) => {
    res.status(404).send('not found');
  });

  app.listen(3000, () => console.log('server on port 3000'));
}
start();
