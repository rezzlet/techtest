import * as express from 'express';

import * as path from 'path';
import * as compression from 'compression';

import { json, urlencoded } from 'body-parser';

import { listRouter } from './routes/list';
import { detailRouter } from './routes/detail';

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(compression());

// api routes
app.use('/api/list', listRouter);
app.use('/api/detail', detailRouter);

app.use( (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }
