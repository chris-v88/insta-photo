import express from 'express';
import { authController } from '../controllers/auth.controller';

const authRouter = express.Router();

// Create CRUD routes
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.post('/logout', authController.logout);
authRouter.get('/check', authController.authCheck);

authRouter.delete('/:id', authController.remove);

export default authRouter;