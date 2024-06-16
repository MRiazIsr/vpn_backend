import express from 'express';
import authRoutes from './src/Routes/auth';
import vpnRoutes from './src/Routes/vpn';
import UserRoutes from './src/Routes/User';
import { openDb } from './src/db/init_db';
import type { User } from './src/Interfaces/IMiddleware';

declare global {
  namespace Express {
      interface Request {
          user: User;
      }
  }
}


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

openDb().then((db) => {
  app.locals.db = db;
  app.use('/api/auth', authRoutes);
  app.use('/api/vpn', vpnRoutes);
  app.use('/api/user', UserRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to open database:', err);
});