import { Router, Response, Request } from 'express';
import { Driver } from '../shared/driver';

const detailRouter: Router = Router();

detailRouter.get('/drivers/:id', (request: Request, response: Response) => {

  let id: string = request.params.id;
  response.json({});

});

export { detailRouter }
