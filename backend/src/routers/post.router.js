import express from 'express';

import { postController } from '../controllers/post.controller';
import { protect } from '../common/middlewares/protect.middleware';
import { uploadCloud } from '../common/multer/cloud.multer';

const postRouter = express.Router();

postRouter.get('/', postController.findAll);

postRouter.post('/', protect, uploadCloud.single('image'), postController.create);

postRouter.post('/:id/like', protect, postController.toggleLike);

// postRouter.get('/:id', postController.findOne);
// postRouter.patch('/:id', postController.update);
// postRouter.delete('/:id', postController.remove);

export default postRouter;