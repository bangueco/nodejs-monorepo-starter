import jwt from 'jsonwebtoken';
import config from '../config';

const generateAccessToken = (id: number, username: string) => {
  return jwt.sign({id, username}, config.JWT_ACCESS_TOKEN_KEY, {expiresIn: '10m'})
}

const generateRefreshToken = (id: number, username: string) => {
  return jwt.sign({id, username}, config.JWT_REFRESH_TOKEN_KEY, {expiresIn: '30d'})
}

const verifyAccessToken = (token: string) => {
  return jwt.verify(token, config.JWT_ACCESS_TOKEN_KEY)
}

const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, config.JWT_REFRESH_TOKEN_KEY)
}

export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
}