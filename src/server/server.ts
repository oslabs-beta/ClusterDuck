//------------------TYPESCRIPT IMPORTS------------------//
import express, { Request, Response, NextFunction } from 'express';
import { ServerError } from '../../types';
import apiRouter from '../server/routers/apiRouter';

//------------------REQUIRES------------------//
// require path
const path = require('path');

//------------------SET UP EXPRESS APP------------------//
// declare port
const PORT = 9000;

// declare app with express invocation
const app = express();

// parse requests & serve static files
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client')));

//------------------ROUTE HANDLING------------------//
// set up api router
app.use('/api', apiRouter);

//------------------REACT ROUTER------------------//
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

//------------------ERROR HANDLERS------------------//
// Global catch-all
app.use((err: ServerError, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Error caught in global handler',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});

//------------------SERVER LISTENER------------------//
// declare port & listen
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

//------------------APP EXPORT------------------//
// export app
module.exports = app;
