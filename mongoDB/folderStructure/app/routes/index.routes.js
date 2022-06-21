import { Router } from 'express';
import { userRouter } from './user.routes.js';
import { accountRouter } from './account.routes.js';

const indexRoute = Router();

indexRoute.use('/users', userRouter);
indexRoute.use('/account', accountRouter);

export { indexRoute };
