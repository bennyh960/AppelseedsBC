import express from 'express';
import { userRouter } from './routes/user.routes.js';
// import { accountRouter } from './routes/account.routes.js';
// import { indexRoute } from './routes/index.routes.js';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
// app.use('/api', indexRoute);

export { app };
