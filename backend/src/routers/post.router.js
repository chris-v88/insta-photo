import express from 'express';
import { postController } from '../controllers/post.controller';

const postRouter = express.Router();

// Tạo route CRUD
postRouter.post('/', postController.create);
postRouter.get('/', postController.findAll);

postRouter.get('/:id', postController.findOne);
postRouter.patch('/:id', postController.update);
postRouter.delete('/:id', postController.remove);

export default postRouter;