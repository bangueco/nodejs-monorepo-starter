import express from 'express';
import cors from 'cors';
import authRouter from './route/auth.route';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/error.middleware';
import unknownEndPoint from './middleware/endpoint.middleware';

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

// routes
app.use('/api/auth', authRouter)

// middlewares
app.use(unknownEndPoint)
app.use(errorHandler)

export default app