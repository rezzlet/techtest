import { Router, Response, Request } from 'express';
import { teamList } from '../data/teams';

const listRouter: Router = Router();

listRouter.get('/teams', (request: Request, response: Response) => {
  response.json( teamList );
});

export { listRouter }
