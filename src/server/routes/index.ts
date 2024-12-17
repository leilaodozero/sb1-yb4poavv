import { Router } from 'express';
import { authRoutes } from './auth.routes';
import { postRoutes } from './post.routes';
import { userRoutes } from './user.routes';

export const router = Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);