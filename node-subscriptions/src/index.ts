require("dotenv").config();
import gql from "graphql-tag";
import WebSocket from "ws";
import fetch, { Request, Response, Headers } from "node-fetch";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client/core";

(global as any).fetch = fetch;
(global as any).Request = Request;
(global as any).Response = Response;
(global as any).Headers = Headers;
(global as any).WebSocket = WebSocket;

const subscribeCreateQuery = gql`
  subscription NEW_TEST {
    onCreateTest {
      id
      createdAt
    }
  }
`;

const subscribeDeleteQuery = gql`
  subscription UPDATE_TEST($id: ID!) {
    onDeleteTest(id: $id) {
      id
    }
  }
`;

const subscribeUpdateQuery = gql`
  subscription DELETE_TEST($id: ID!) {
    onUpdateTest(id: $id) {
      id
      createdAt
    }
  }
`;

// Url like: https://xxx.appsync-api.region.amazonaws.com/graphql
const url = process.env.API_URL as string;
// Api Key like: ab-ccccccccccccccccccccccccccc
const apiKey = process.env.API_KEY as string;

const region = "eu-central-1";

const auth = {
  type: "API_KEY" as "API_KEY",
  apiKey: apiKey,
};

const httpLink = new HttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

client.subscribe({ query: subscribeCreateQuery }).subscribe({
  next: (data) => console.log("created", data),
  error: (error) => console.log("error", error),
});

client
  .subscribe({ query: subscribeUpdateQuery, variables: { id: "123" } })
  .subscribe({
    next: (data) => console.log("updated", data),
    error: (error) => console.log("error", error),
  });

client
  .subscribe({
    query: subscribeDeleteQuery,
    variables: { id: "123" },
  })
  .subscribe({
    next: (data) => console.log("deleted", data),
    error: (error) => console.log("error", error),
  });
