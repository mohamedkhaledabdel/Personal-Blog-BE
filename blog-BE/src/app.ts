import express from 'express';
import './routes/index';
import routes from './routes';
import * as database from './database';
import colors from 'colors';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 8000;



database
  .connectToMongo()
  .then()
  .catch((err) => {
    process.exit(1);
  });
  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
  app.use(cors()); /* NEW */
  app.use(bodyParser.json())
  app.use(routes)
  