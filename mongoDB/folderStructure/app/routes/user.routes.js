import { Router } from 'express';
import { createUser } from '../controllers/user.controllers.js';
import { authUser } from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.post('/create', authUser, createUser);
// userRouter.post(
//   '/update',
//   (req, res, next) => {
//     // manipulate the req
//     // next()
//   },
//   (req, res) => {
//     // send...
//   }
// );

export { userRouter };
