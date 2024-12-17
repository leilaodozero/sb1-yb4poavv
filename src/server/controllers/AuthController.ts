import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { loginSchema, registerSchema } from '../schemas/auth.schema';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async register(req: Request, res: Response) {
    const data = registerSchema.parse(req.body);
    const result = await this.authService.register(data);
    return res.status(201).json(result);
  }

  async login(req: Request, res: Response) {
    const { email, password } = loginSchema.parse(req.body);
    const result = await this.authService.login(email, password);
    return res.json(result);
  }
}