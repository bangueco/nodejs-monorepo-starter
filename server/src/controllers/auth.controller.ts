import userService from "../service/user.service";
import { ApiError, ValidationError } from "../utils/error";
import { HttpStatusCode } from "../utils/http";
import hashing from "../utils/lib/hashing";
import { generateAccessToken } from "../utils/lib/token";
import { NextFunction, Request, Response } from "express";

async function login (request: Request, response: Response, next: NextFunction) {

  const {username, password} = request.body as {username: string, password: string};

  if (!username || !password) {
    return response.status(HttpStatusCode.BAD_REQUEST).json({message: "Some fields are required."});
  }

  try {
    const isUserExist = await userService.findByUsername(username);
    
    if (!isUserExist) throw new ApiError(HttpStatusCode.UNAUTHORIZED, 'User does not exist!')

    const isCorrectPassword = await hashing.validatePassword(password, isUserExist.password);

    if (!isCorrectPassword) throw new ApiError(HttpStatusCode.BAD_REQUEST, "Wrong password!")

    const accessToken = generateAccessToken(isUserExist.id, isUserExist.username);
    // const refreshToken = generateRefreshToken(isUserExist.id, isUserExist.username);

    return response.status(HttpStatusCode.OK).json({
      id: isUserExist.id,
      username: isUserExist.username,
      accessToken
    })
  } catch (error) {
    return next(error)
  }
  
}

async function register (request: Request, response: Response, next: NextFunction) {
  const {username, email, password} = request.body as {username: string, email: string, password: string}

  if (!username || !email || !password) return response.status(HttpStatusCode.BAD_REQUEST).json({message: "Some fields are required!"})

  try {
    const isUserExist = await userService.findByUsername(username)
    const isEmailExist = await userService.findByEmail(email)

    if (isUserExist?.username) throw new ValidationError(HttpStatusCode.BAD_REQUEST, 'username', 'Username is already taken!');
    if (isEmailExist?.email) throw new ValidationError(HttpStatusCode.BAD_REQUEST, 'email', 'Email is already taken!');

    const hashedPassword = await hashing.hashPassword(password)

    const createUser = await userService.createUser(username, email, hashedPassword)

    return response.status(HttpStatusCode.OK).json(createUser)

  } catch (error) {
    return next(error)
  }
}

export default {
  login,
  register
}