import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "http";

// Run server with graphiql enabled
const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => "world",
      },
    },
  }),
});

const server = createServer(yoga);
server.listen(4000);

console.log("Running a GraphQL API server at http://localhost:4000/graphql");
