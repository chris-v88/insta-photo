export const userSwagger = {
  '/user/profile': {
    get: {
      tags: ['User'],
      summary: 'Get user profile',
      description: 'Retrieve the current user\'s profile.',
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: 'User profile',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        401: { description: 'Unauthorized' },
      },
    },
    patch: {
      tags: ['User'],
      summary: 'Update user profile',
      description: 'Update the current user\'s profile information.',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                fullName: { type: 'string' },
                bio: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Profile updated successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        401: { description: 'Unauthorized' },
      },
    },
  },
  '/user/avatar': {
    post: {
      tags: ['User'],
      summary: 'Upload user avatar',
      description: 'Upload a new avatar for the current user.',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                avatar: { type: 'string', format: 'binary' },
              },
            },
          },
        },
      },
      responses: {
        200: { description: 'Avatar uploaded successfully' },
        401: { description: 'Unauthorized' },
      },
    },
  },
  '/user/{username}': {
    get: {
      tags: ['User'],
      summary: 'Get user profile by username',
      description: 'Retrieve a user\'s profile by their username.',
      parameters: [
        {
          name: 'username',
          in: 'path',
          required: true,
          schema: { type: 'string' },
        },
      ],
      responses: {
        200: {
          description: 'User profile',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        404: { description: 'User not found' },
      },
    },
  },
};