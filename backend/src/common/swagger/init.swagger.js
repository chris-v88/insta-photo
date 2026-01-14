import { authSwagger } from './auth.swagger';
import { postSwagger } from './post.swagger';
import { userSwagger } from './user.swagger';

export const swaggerDocument = {
  openapi: '3.1.1',
  info: {
    title: 'Insta Photo API',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3069/api',
      description: 'Server BE Local',
    },
    {
      url: 'http://domain.com/api',
      description: 'Server BE Online',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          email: { type: 'string' },
          fullName: { type: 'string' },
        },
      },
      Post: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          content: { type: 'string' },
          imageUrl: { type: 'string' },
        },
      },
    },
  },
  security: [{ BearerAuth: [] }],
  paths: {
    ...authSwagger,
    ...postSwagger,
    ...userSwagger,
  },
};