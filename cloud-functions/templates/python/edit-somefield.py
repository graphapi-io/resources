def handler(event, context):
  input = event.get('arguments').get('input')
  someField = input.get('someField')
  if not someField:
    return {}

  newValue = '{} has been edited!'.format(someField)
  return {
    'someField' : newValue
  }