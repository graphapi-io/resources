exports.handler = async function (event, context) {
  const input = event.arguments.input;
  if (!input.someField) {
    return {};
  }

  return {
    someField: `${input.someField} has been edited`,
  };
};
