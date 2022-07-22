# plisplas

Light framework to build a DDD service in a plisplas

## Prof of concept - Work in progress

**NOT USE IT YET**

## Introduction.

It is a pain to have to set everything up and to maintain huge files that look like monoliths, where you need to import resolvers, controllers, etc.

It would be nice to have a bit of convention over configuration, to drop your controllers and resolvers files with obvios names in obvios directories, and to have a build tool taking care of the rest.

This is what plisplas is about.

## domains

This is the directory plisplas will look for REST endpoints, and graphql schemas, types, fields, queries and mutations.

It is expected that you organize your domains in `domains/` subdirectories.

## configuration

A plisplas service can be configured with a `plisplas.config.js` file.at the root of the project.

This file is transpiled by tsc, so any syntax it supports can be used.

It can default-export a configuration object, or a function that accepts the default configuration object and returns the desired configuration object, or a its promise.

In the case of exporting an object, it will be merged with the default configuration object.

### default configuration

```js
export default {
  express: {
    ip: '0.0.0.0',
    port: 5000,
    use: [
      express.json(),
    ],
    routes // array with the parsed routes,
  },
  apollo: {
    csrfPrevention: true,
    resolvers // object with the parsed resolvers,
    typeDefs // string with the parsed typeDefs,
    plugins: [
      process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  }
}
```

## REST endpoints

Any file that matches `/(get|post|put|patch|all).m?[tj]s$/i` will be handling a REST endpoint.

### Path-to-route rules:
#### Basic routing:
The route of the endpoint will be determined by the file path from `/domains/`.

*the file `/domains/foo/bar/baz.get.js` will be handling the `GET` requests to the route `/foo/bar/baz`*

#### index fils
The filename of the index files will not be considered for the route.

*the file `/domains/foo/bar/index.get.js` will be handling the `GET` requests to the route `/foo/bar`*

#### Root:
if the path includes `_root_` this will be the root route of the domain.

*the file `/domains/foo/_root_/bar/baz.post.js` will be handling the `POST` requests to the route `/bar/baz`*

#### Route params:

if any path segment is surounded by brackets, it will be a named route param.

*the file `/domains/foo/[bar]/baz.PUT.ts` will be handling the `PUT` requests to the express route `/foo/bar/baz`*

#### All methods:

The pre-suffix `.all.` indicated that the file will be handling all methods.

*the file `/domains/foo/bar/baz.all.mjs` will be handling all the methods requested to the  route `/foo/bar/baz`*


### express configuration

you can add more items to `config.express.use` array, or override the default ones, to modify the middlewares, that are added to the express app before the routes.

you can change the port, ip

You can add more items to `config.express.routes` array, or override the default ones, to modify the routes.

## graphql

The files matching `/(query|mutation|type|field)\.m?[tj]s$/i` will be handled as resolvers.
The files matching `/\graphql` will be handled as schema definition.

### path to resolver rules:

There is no specific rules for the `.graphql` files.

Those files are just appended togheter in a single `schema.graphql` file.

#### Query, Mutation and Type naming.

The name of the type, query or mutation, will be determined by the filename, unless the filename is an index, in which case the name will be the directory name.

#### field naming

The name of the field will be determined by the filename, and the name of the type it belongs to will be determined by the directory name.

If the fields file is and index file, the name of the field will be `index`.

#### configuration

`configuration.apollo` will be pased as the parameter to the ApolloServer constructor, so you can do whatever you want.

## typescript

If you don't provide a tsconfig.json file, plisplas will create one for you.

## Usage

### Build it
```
npm run build
```

It will build a human readable version at `.plisplas` and a transpiled version at `.dist` directory.

### Run it
```
npm run start
```

Will run it.

## Next steps

The current structure is meant for pokering around, and trying things.

The next step is to build a package that can be installed and used like this:

```sh
npm create plisplas some-name

cd some-name
npm install
npm run dev # watching and restarting the server
npm run lint # linting the code
npm test
npm run build
npm start
```
