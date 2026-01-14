export const authSwagger = {
  '/auth/register': {
    post: {
      tags: ['Auth'],
      summary: 'Register a new user',
      description: 'Creates a new user account with email, password, and full name.',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email', 'password', 'fullName'],
              properties: {
                email: { type: 'string', format: 'email' },
                password: { type: 'string', minLength: 6 },
                fullName: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'User registered successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  email: { type: 'string' },
                  fullName: { type: 'string' },
                },
              },
            },
          },
        },
        400: { description: 'User already exists or invalid input' },
      },
    },
  },
  '/auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login',
      description: 'Authenticate user and return JWT tokens.',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['email', 'password'],
              properties: {
                email: { type: 'string', format: 'email' },
                password: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Login successful',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  accessToken: { type: 'string' },
                  refreshToken: { type: 'string' },
                },
              },
            },
          },
        },
        401: { description: 'Invalid credentials' },
      },
    },
  },
  '/auth/logout': {
    post: {
      tags: ['Auth'],
      summary: 'Logout',
      description: 'Logout the current user.',
      security: [{ BearerAuth: [] }],
      responses: {
        200: { description: 'Logout successful' },
        401: { description: 'Unauthorized' },
      },
    },
  },
  '/auth/check': {
    get: {
      tags: ['Auth'],
      summary: 'Check authentication',
      description: 'Check if the user is authenticated.',
      security: [{ BearerAuth: [] }],
      responses: {
        200: {
          description: 'User is authenticated',
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
};