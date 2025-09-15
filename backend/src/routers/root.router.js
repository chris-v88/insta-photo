import express from 'express';

import authRouter from './auth.router';
import postRouter from './post.router';

const rootRouter = express.Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/posts', postRouter);

export default rootRouter;