import 'dotenv/config';

import cors from 'cors';
import express from 'express';

import { appError } from './src/common/app-error/app-error.error';
import { responseError } from './src/common/helpers/response.helpers';
import rootRouter from './src/routers/root.router';

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:3000'],
  }),
);

app.use('/api', rootRouter);
app.use(appError);

app.use((err, req, res, next) => {
  console.error('Error in middleware:', err);
  const resData = responseError(err, err?.message, err?.code, err?.stack);
  res.status(resData.statusCode).json(resData);
});

const port = 3069;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
