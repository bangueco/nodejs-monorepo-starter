import express from 'express';
import cors from 'cors';
import authRouter from './route/auth.route';
import cookieParser from 'cookie-parser';

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

// routes
app.use('/api/auth', authRouter)

export default app