require('dotenv').config()
import express from 'express'
import { ApolloServer } from "apollo-server-express";

import getConfig from './getConfig.js'
import useRoutes from './useRoutes.js';

async function start() {
  const config = await getConfig()

  const app = express()
  if (config.use) {
    for (const middleware of config.express.use) {
      app.use(middleware)
    }
  }

  useRoutes(app, config.express.routes)

  const apollo = new ApolloServer(config.apollo)

  await apollo.start()

  apollo.applyMiddleware({ app })

  app.listen(config.express.port, config.express.ip, () => {
    console.log(`Server ready at http://${config.express.ip}:${config.express.port}`)
  })
} 

start()