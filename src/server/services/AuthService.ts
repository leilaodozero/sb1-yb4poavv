import { prisma } from '../lib/prisma';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from '../errors/AppError';
import { CreateUserInput } from '../schemas/user.schema';

export class AuthService {
  async register(data: CreateUserInput) {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new AppError('Email already in use');
    }

    const hashedPassword = await hash(data.password, 8);

    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    const token = this.generateToken(user.id);

    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Invalid credentials', 401);
    }

    const token = this.generateToken(user.id);

    return { user, token };
  }

  private generateToken(userId: string) {
    return sign({}, process.env.JWT_SECRET as string, {
      subject: userId,
      expiresIn: '1d',
    });
  }
}