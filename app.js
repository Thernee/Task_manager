import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import routes from './routes/tasks-route.js';

const app = express();

// Middleware setup
app.use(express.json());

//mount routes
app.use('/api/v1', routes);

app.get('/', (req, res) => {
  return res.status(200).send('Welcome to The TaskManager App.');
});

try {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });
} catch (err) {
  console.log('Error Encountered =>', err);
}