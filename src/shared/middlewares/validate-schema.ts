import { NextFunction, Request, Response } from 'express';
import { AnyObjectSchema } from 'yup';

export const validateSchema =
  (schema: AnyObjectSchema) =>
  async (request: Request, _response: Response, next: NextFunction): Promise<void> => {
    const validatedBody = await schema.validate(request.body, {
      abortEarly: false,
      stripUnknown: true
    });

    request.body = validatedBody;
    next();
  };
