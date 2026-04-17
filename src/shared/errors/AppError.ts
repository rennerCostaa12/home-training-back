import { HttpStatusCode } from '../http/HttpStatusCode';

export class AppError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode = HttpStatusCode.BAD_REQUEST) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
  }
}
