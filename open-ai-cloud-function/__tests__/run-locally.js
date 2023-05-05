const { handler } = require("../build/prompt-handler");

const runTest = async () => {
  console.time("test");
  const result = await handler(
    {
      arguments: {
        input: {
          prompt:
            "I really love your app. The UI is great and it's super easy to use. I would love to see more features like this in the future.",
        },
      },
    },
    null,
    null
  );
  console.timeEnd("test");
  console.log(result);
};

runTest();
