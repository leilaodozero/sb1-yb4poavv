import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

export const authRoutes = Router();
const controller = new AuthController();

authRoutes.post('/register', controller.register.bind(controller));
authRoutes.post('/login', controller.login.bind(controller));