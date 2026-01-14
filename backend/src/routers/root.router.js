import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../common/swagger/init.swagger';

import authRouter from './auth.router';
import postRouter from './post.router';
import userRouter from './user.router';

const rootRouter = express.Router();

rootRouter.use('/docs', swaggerUi.serve);
rootRouter.get('/docs', swaggerUi.setup(swaggerDocument));

rootRouter.use('/auth', authRouter);
rootRouter.use('/posts', postRouter);
rootRouter.use('/user', userRouter);

export default rootRouter;