import express from 'express';
import './routes/index';
import routes from './routes';
import * as database from './database';
import colors from 'colors';

const app = express();
const port = 3000;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
app.use(routes)

database
  .connectToMongo()
  .then(() => console.info(colors.green('Up and Running!')))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
