require("dotenv").config();
import gql from "graphql-tag";
import { v4 as uuid4 } from "uuid";
import WebSocket from "ws";

const subscribeCreateQuery = `
  subscription NEW_TEST {
    onCreateTest {
      id
      createdAt
    }
  }
`;

export interface ISubscriptionHandlerProps {
  readonly host: string;

  readonly realtimeEndpoint: string;

  readonly apiKey: string;

  readonly query: string;

  readonly onMessageHandler?: (data: { [key: string]: string }) => void;

  readonly onErrorHandler?: (error: Error) => void;
}

export class SubscriptionHandler {
  private readonly props: ISubscriptionHandlerProps;

  private header: string;

  private payload: string = "{}";

  private subscriptionId: string = "";

  private subscription: string = "";

  public readonly connection: WebSocket;

  constructor(props: ISubscriptionHandlerProps) {
    this.props = props;
    this.header = btoa(JSON.stringify(this.getAuthorizationHeader()));
    this.prepareSubscription();
    this.connection = new WebSocket(
      `${this.props.realtimeEndpoint}?header=${this.header}&payload=${btoa(
        this.payload
      )}`,
      "graphql-ws"
    );
    this.connection.onopen = () => {
      this.connection.send(JSON.stringify({ type: "connection_init" }));
    };

    this.connection.onerror = (event) => {
      console.log(`WebSocket error: ${event}`);
    };

    this.connection.onmessage = (event) => {
      const data = JSON.parse(event.data as string);
      if (data.type === "connection_ack") {
        this.connection.send(this.subscription);
      } else if (data.type === "data" && this.props.onMessageHandler) {
        this.props.onMessageHandler(data.payload);
      } else if (data.type === "complete") {
        this.connection.close();
      } else if (data.type === "error") {
        console.log("error", data.payload);
      }
    };
  }

  private getAuthorizationHeader() {
    return {
      "x-api-key": this.props.apiKey,
      host: this.props.host,
    };
  }

  private prepareSubscription() {
    this.subscriptionId = uuid4();
    this.subscription = JSON.stringify({
      id: this.subscriptionId,
      payload: {
        data: this.props.query,
        extensions: {
          authorization: this.getAuthorizationHeader(),
        },
      },
      type: "start",
    });
  }

  public stopListening() {
    this.connection.send(
      JSON.stringify({ type: "stop", id: this.subscriptionId })
    );
  }
}

const subscriptionHandler = new SubscriptionHandler({
  host: process.env.WSS_HOST as string,
  apiKey: process.env.API_KEY as string,
  query: JSON.stringify({
    query: subscribeCreateQuery,
  }),
  realtimeEndpoint: process.env.WSS_URL as string,
  onMessageHandler: (data) => {
    console.log("update", data);
  },
});
