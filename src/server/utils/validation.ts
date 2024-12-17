import { ZodError } from 'zod';

export function formatZodError(error: ZodError) {
  return error.errors.map((err) => ({
    field: err.path.join('.'),
    message: err.message,
  }));
}

export function sanitizeUser(user: any) {
  const { password, ...sanitizedUser } = user;
  return sanitizedUser;
}