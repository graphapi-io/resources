def handler(event:, context:)
  input = event["arguments"]["input"]
  someField = input["someField"]
  return {} if !someField

  newValue = someField + ' has been edited!'
  { someField: newValue }
end
