import express from 'express';
import { RegisterRoutes } from '../build/routes';

const app = express();
const port = 3000;

app.use(express.json());
RegisterRoutes(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
