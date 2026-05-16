import { NextFunction, Request, Response } from "express";
import { AnyObjectSchema, ValidationError } from "yup";
import { errorResponse } from "../http/responses";
import { HttpStatusCode } from "../http/HttpStatusCode";

export const validateSchema =
  (schema: AnyObjectSchema) =>
  async (
    request: Request,
    _response: Response,
    next: NextFunction,
  ) => {
    try {
      const validatedBody = await schema.validate(request.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      request.body = validatedBody;
      return next();
    } catch (error) {
      const errorValidation = error as ValidationError;
      
      return errorResponse({
        message: "Erro na validação",
        statusCode: HttpStatusCode.BAD_REQUEST,
        errors: errorValidation.errors,
        response: _response,
      });
    }
  };
