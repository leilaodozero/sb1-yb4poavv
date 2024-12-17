import { prisma } from '../lib/prisma';
import { CreatePostInput } from '../schemas/post.schema';
import { AppError } from '../errors/AppError';

export class PostService {
  async findAll() {
    return prisma.post.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
      orderBy: {
        publishedAt: 'desc',
      },
    });
  }

  async findById(id: string) {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    return post;
  }

  async create(data: CreatePostInput, authorId: string) {
    return prisma.post.create({
      data: {
        ...data,
        authorId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });
  }

  async update(id: string, data: CreatePostInput, userId: string) {
    const post = await this.findById(id);

    if (post.authorId !== userId) {
      throw new AppError('Not authorized', 403);
    }

    return prisma.post.update({
      where: { id },
      data,
      include: {
        author: {
          select: {
            id: true,
            name: true,
            avatarUrl: true,
          },
        },
      },
    });
  }

  async delete(id: string, userId: string) {
    const post = await this.findById(id);

    if (post.authorId !== userId) {
      throw new AppError('Not authorized', 403);
    }

    await prisma.post.delete({ where: { id } });
  }
}