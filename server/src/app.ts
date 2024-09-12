import express from 'express';
import cors from 'cors';
import authRouter from './route/auth.route';

const app = express()

app.use(express.json())
app.use(cors())

// routes
app.use('/api/auth', authRouter)

export default app