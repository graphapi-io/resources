import https from "https";
import { Handler } from "aws-lambda";

interface ITrackedType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const invokeLambdaAsync = async (obj: ITrackedType) =>
  new Promise<void>((resolve, reject) => {
    const apiUrl = `<your-url>`;
    const data = JSON.stringify(obj);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        /* https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-integration-async.html
        For performance reason we're not waiting for the request to finish, 
        instead we're returning the created TrackedType to the user as soon as possible
        */
        "X-Amz-Invocation-Type": "Event",
        // Remove if not necessary
        "x-api-key": "<your-api-key>",
      },
    };

    const request = https.request(apiUrl, requestOptions);

    request.on("error", (error) => {
      reject(error);
    });

    request.write(data);
    request.end(resolve);
  });

export const handler: Handler = async (event): Promise<ITrackedType> => {
  const trackedType: ITrackedType = event.prevResult;

  try {
    await invokeLambdaAsync(trackedType);
  } catch (error) {
  } finally {
    return event.prevResult;
  }
};
