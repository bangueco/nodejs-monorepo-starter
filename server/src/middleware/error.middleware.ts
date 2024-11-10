import { NextFunction, Request, Response } from "express";
import { ApiError, ValidationError } from "../utils/error";

export default async function errorHandler (error: unknown, _request: Request, response: Response, next: NextFunction) {

  if (error instanceof ApiError) {
    return response.status(error.status).json({
      error: {
        status: error.status,
        name: error.name,
        message: error.message
      }
    })
  } else if (error instanceof ValidationError) {
    return response.status(error.status).json({
      error: {
        status: error.status,
        name: error.name,
        field: error.field,
        message: error.message
      }
    })
  }

  next(error)

}