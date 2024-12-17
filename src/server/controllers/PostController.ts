import { Request, Response } from 'express';
import { PostService } from '../services/PostService';
import { createPostSchema } from '../schemas/post.schema';

export class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  async list(req: Request, res: Response) {
    const posts = await this.postService.findAll();
    return res.json(posts);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;
    const post = await this.postService.findById(id);
    return res.json(post);
  }

  async create(req: Request, res: Response) {
    const { userId } = req;
    const data = createPostSchema.parse(req.body);
    const post = await this.postService.create(data, userId);
    return res.status(201).json(post);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } = req;
    const data = createPostSchema.parse(req.body);
    const post = await this.postService.update(id, data, userId);
    return res.json(post);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } = req;
    await this.postService.delete(id, userId);
    return res.status(204).send();
  }
}