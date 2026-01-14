export const postSwagger = {
  '/posts': {
    get: {
      tags: ['Posts'],
      summary: 'Get all posts',
      description: 'Retrieve a list of all posts.',
      responses: {
        200: {
          description: 'List of posts',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/Post',
                },
              },
            },
          },
        },
      },
    },
    post: {
      tags: ['Posts'],
      summary: 'Create a new post',
      description: 'Create a new post with image upload.',
      security: [{ BearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',
              properties: {
                content: { type: 'string' },
                image: { type: 'string', format: 'binary' },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Post created successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Post',
              },
            },
          },
        },
        401: { description: 'Unauthorized' },
      },
    },
  },
  '/posts/{id}': {
    get: {
      tags: ['Posts'],
      summary: 'Get a post by ID',
      description: 'Retrieve a single post by its ID.',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        200: {
          description: 'Post details',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Post',
              },
            },
          },
        },
        404: { description: 'Post not found' },
      },
    },
  },
  '/posts/{id}/like': {
    post: {
      tags: ['Posts'],
      summary: 'Toggle like on a post',
      description: 'Like or unlike a post.',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      responses: {
        200: { description: 'Like toggled successfully' },
        401: { description: 'Unauthorized' },
        404: { description: 'Post not found' },
      },
    },
  },
  '/posts/{id}/comments': {
    post: {
      tags: ['Posts'],
      summary: 'Add a comment to a post',
      description: 'Add a comment to a specific post.',
      security: [{ BearerAuth: [] }],
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          schema: { type: 'integer' },
        },
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['content'],
              properties: {
                content: { type: 'string' },
              },
            },
          },
        },
      },
      responses: {
        201: { description: 'Comment added successfully' },
        401: { description: 'Unauthorized' },
        404: { description: 'Post not found' },
      },
    },
  },
};