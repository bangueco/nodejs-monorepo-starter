import express from 'express';
import cors from 'cors';
import authRouter from './route/auth.route';
import cookieParser from 'cookie-parser';
import errorHandler from './middleware/error.middleware';
import unknownEndPoint from './middleware/endpoint.middleware';
import healthRouter from './route/health.route';

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

// routes
app.use('/api/auth', authRouter)
app.use('/', healthRouter)

// middlewares
app.use(unknownEndPoint)
app.use(errorHandler)

export default app