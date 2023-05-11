# GraphQL Server

While GraphQL APIs are easier to integrate for application developers, they can be challenging for the teams tasked with creating them. Initially, developers must decide whether to build a server from scratch or use one of the existing GraphQL services.

One of the quickest way to run a GraphQL server locally is using the yoga packge. Foremost, make sure that you have a recent Node version installed on your machine. The easiest way to install Node.js and manage different versions is by using the Node version manager.

With the graphql-yoga library, you can mount a GraphQL API server to the **/graphql** endpoint.

## Running the Express GraphQL server

If Node.js is set up, run the following commands in your terminal:

```bash
$ npm install
$ node server.js
```

When the server is running successfully, open [http://localhost:4000/graphql](http://localhost:4000/graphql) in a browser. This will open the GraphiQL interface where you can run the `{ hello }` query.

### Learn more about GraphQL

- [What is GraphQL](https://graphapi.com/learn/graphql)
- [GraphQL vs REST](https://graphapi.com/learn/graphql/vs-rest)
- [GraphQL Query](https://graphapi.com/learn/graphql/query)
