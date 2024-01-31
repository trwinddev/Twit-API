```sh
{
  $jsonSchema: {
    bsonType: 'object',
    title: 'Refresh Token object validation',
    required: [
      '_id',
      'user_id',
      'token',
      'created_at'
    ],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: '\'_id\' must be a objectId and is required'
      },
      token: {
        bsonType: 'string',
        description: '\'token\' must be a string and is required'
      },
      user_id: {
        bsonType: 'objectId',
        description: '\'_id\' must be a objectId and is required'
      },
      created_at: {
        bsonType: 'date',
        description: '\'_id\' must be a date and is required'
      }
    },
    additionalProperties: false
  }
}
```
