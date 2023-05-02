# Creating a cloud function that calls a third party lambda after object creation

## Why?

Let's say we would like to integrate some third party analytics tool, and trigger an event whenever some object is created.
For that we can use the "After Create" trigger to call the analytics endpoint whenever some object is created.

## How to use

1. Run `npm i`
2. Replace the `<your-url>` and `<your-api-key>` in the after-handler.ts file.
3. Replace the `ITrackedType` interface with the type of the model that you want to track.
4. Call `npm run build`.
5. Upload the `after-handler.js` file to your APIs cloud functions.
6. Use the new cloud function as "after create" trigger for the model you want to track.
7. Deploy your API.

## Open Source at GraphApi.io

Read our Code of Conduct at [https://graphapi-io.github.io/](https://graphapi-io.github.io/)

## Links

- graph**api**® [Terms of Service](https://graphapi.com/terms)
- graph**api**® [Privacy Policy](https://graphapi.com/privacy)
- graph**api**® [Data Processing Agreement](https://graphapi.com/dpa)
