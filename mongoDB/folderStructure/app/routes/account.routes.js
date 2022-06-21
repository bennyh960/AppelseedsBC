import { Router } from 'express';

const accountRouter = Router();

accountRouter.get('/', (req, res) => {
  console.log('some');
});

export { accountRouter };
