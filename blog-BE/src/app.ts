import express from 'express';
import './routes/index';
import routes from './routes';
import * as database from './database';
import colors from 'colors';

const app = express();
const port = 3000;



database
  .connectToMongo()
  .then()
  .catch((err) => {
    process.exit(1);
  });
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
  app.use(routes)