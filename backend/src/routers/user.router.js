import express from 'express';

import { protect } from '../common/middlewares/protect.middleware';
import { uploadCloud } from '../common/multer/cloud.multer';
import { userController } from '../controllers/user.controller';

const userRouter = express.Router();

// Profile routes
userRouter.get('/profile', protect, userController.getProfile);
userRouter.patch('/profile', protect, userController.updateProfile);

// Avatar upload route
userRouter.post('/avatar', protect, uploadCloud.single('avatar'), userController.uploadAvatar);

// Public route for getting user profile by username
userRouter.get('/:username', userController.getProfileByUsername);

// userRouter.post('/', userController.create);
// userRouter.get('/', userController.findAll);
// userRouter.get('/:id', userController.findOne);
// userRouter.patch('/:id', userController.update);
// userRouter.delete('/:id', userController.remove);

export default userRouter;