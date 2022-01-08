import express from 'express';
import './routes/index';
import routes from './routes';
const app = express();
const port = 3000;


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use(routes)