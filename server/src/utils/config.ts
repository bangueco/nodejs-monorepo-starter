import dotenv from 'dotenv'

dotenv.config()

const config = {
  SERVER_ENVIRONMENT: process.env.NODE_ENV ,
  SERVER_PORT: process.env.SERVER_PORT || 3000,
  JWT_ACCESS_TOKEN_KEY: process.env.JWT_ACCESS_TOKEN_KEY || "",
  JWT_REFRESH_TOKEN_KEY: process.env.JWT_REFRESH_TOKEN_KEY || ""
}

export default config