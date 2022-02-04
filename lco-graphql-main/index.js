
//var express = require('express')
import express from "express"
import resolvers from "./resolvers"
import schema from "./schema"
import { graphqlHTTP } from "express-graphql"

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Up and running with GraphQL')
})
const root =resolvers;
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue : root,
  graphiql: true
}))
app.listen(8082, ()=>console.log("Running at 8082"))