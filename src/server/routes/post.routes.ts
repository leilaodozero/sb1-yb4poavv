import { Router } from 'express';
import { PostController } from '../controllers/PostController';
import { auth } from '../middlewares/auth';

export const postRoutes = Router();
const controller = new PostController();

postRoutes.get('/', controller.list);
postRoutes.get('/:id', controller.show);
postRoutes.post('/', auth, controller.create);
postRoutes.put('/:id', auth, controller.update);
postRoutes.delete('/:id', auth, controller.delete);