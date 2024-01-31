```sh
{
  $jsonSchema: {
    bsonType: 'object',
    title: 'User object validation',
    required: [
      '_id',
      'name',
      'email',
      'date_of_birth',
      'password',
      'created_at',
      'updated_at',
      'email_verify_token',
      'forgot_password_token',
      'verify',
      'bio',
      'location',
      'website',
      'username',
      'avatar',
      'cover_photo'
    ],
    properties: {
      _id: {
        bsonType: 'objectId',
        description: '\'_id\' must be a objectId and is required'
      },
      name: {
        bsonType: 'string',
        description: '\'name\' must be a string and is required'
      },
      email: {
        bsonType: 'string',
        description: '\'email\' must be a string and is required'
      },
      date_of_birth: {
        bsonType: 'date',
        description: '\'date_of_birth\' must be a string and is required'
      },
      password: {
        bsonType: 'string',
        description: '\'password\' must be a string and is required'
      },
      created_at: {
        bsonType: 'date',
        description: '\'created_at\' must be a string and is required'
      },
      updated_at: {
        bsonType: 'date',
        description: '\'updated_at\' must be a string and is required'
      },
      email_verify_token: {
        bsonType: 'string',
        description: '\'email_verify_token\' must be a string and is required'
      },
      forgot_password_token: {
        bsonType: 'string',
        description: '\'forgot_password_token\' must be a string and is required'
      },
      verify: {
        bsonType: 'int',
        'enum': [
          0,
          1,
          2
        ]
      },
      bio: {
        bsonType: 'string',
        description: '\'bio\' must be a string and is required'
      },
      location: {
        bsonType: 'string',
        description: '\'location\' must be a string and is required'
      },
      website: {
        bsonType: 'string',
        description: '\'website\' must be a string and is required'
      },
      username: {
        bsonType: 'string',
        description: '\'username\' must be a string and is required'
      },
      avatar: {
        bsonType: 'string',
        description: '\'avatar\' must be a string and is required'
      },
      cover_photo: {
        bsonType: 'string',
        description: '\'cover_photo\' must be a string and is required'
      }
    },
    additionalProperties: false
  }
}
```
