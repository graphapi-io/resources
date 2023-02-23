import gql from "nanographql";

export interface GraphApiClientOptions {
  graphApiEndpoint: string;
  graphApiKey?: string;
}

export class GraphApiClient {
  private options: GraphApiClientOptions;

  constructor(options: GraphApiClientOptions) {
    this.options = options;
  }

  public query(query: string, variables?: Record<string, unknown>) {
    return this.request(gql(query)(variables));
  }

  private async request(query: string) {
    try {
      const response = await fetch(this.options.graphApiEndpoint, {
        body: query,
        method: "POST",
        headers: {
          ...(this.options.graphApiKey
            ? { "x-api-key": this.options.graphApiKey }
            : undefined),
        },
      });
      if (!response.ok) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
