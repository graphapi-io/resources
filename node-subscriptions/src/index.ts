import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  gql,
} from "@apollo/client/core";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import fetch from "node-fetch";
import WebSocket from "ws";

require("dotenv").config();

const subscribeCreateQuery = gql`
  subscription NEW_TEST {
    onCreateTest {
      id
      createdAt
    }
  }
`;

const subscribeUpdateQuery = gql`
  subscription UPDATE_TEST($id: ID!) {
    onUpdateTest(id: $id) {
      id
      createdAt
    }
  }
`;

const subscribeDeleteQuery = gql`
  subscription DELETE_TEST($id: ID!) {
    onDeleteTest(id: $id) {
      id
      createdAt
    }
  }
`;

const httpLink = new HttpLink({
  uri: process.env.API_URL,
  fetch: fetch,
});

const prepareSubscriptionHeader = () => {
  const header = {
    "x-api-key": process.env.API_KEY,
    host: process.env.WSS_HOST,
  };

  return btoa(JSON.stringify(header));
};

const wsClient = new SubscriptionClient(
  `${
    process.env.API_SOCKET_URL
  }?header=${prepareSubscriptionHeader()}&payload={}`,
  {
    reconnect: true,
  },
  WebSocket,
  "graphql-ws"
);

wsClient.onError((error) => {
  console.error("error", error);
});

const wsLink = new WebSocketLink(wsClient);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

try {
  client
    .subscribe({
      query: subscribeCreateQuery,
      fetchPolicy: "no-cache",
      // variables: {
      //   id: "2NPhrkdgajqlb7rR9HstvSeJEHk",
      // },
    })
    .subscribe({
      next: (data) => console.log("data", data),
      error: (error) => console.error("error", error),
      complete: () => console.log("complete"),
    });
} catch (error) {
  console.error("error", error);
}
