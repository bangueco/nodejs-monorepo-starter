import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "../utils/http";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function unknownEndPoint(_request: Request, response: Response, _next: NextFunction) {
  return response.status(HttpStatusCode.NOT_FOUND).json({error: "Unknown endpoint"})
}