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

const url = process.env.API_URL as string;
const region = "eu-central-1";

const auth = {
  type: "API_KEY" as "API_KEY",
  apiKey: process.env.API_KEY as string,
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
  next: (data) => console.log("data", data),
  error: (error) => console.log("error", error),
});
