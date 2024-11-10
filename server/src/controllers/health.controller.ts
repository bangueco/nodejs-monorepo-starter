import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "../utils/http";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function check(_request: Request, response: Response, _next: NextFunction) {
  return response.status(HttpStatusCode.OK).json({message: "OK!"})
}

export default {
  check
}