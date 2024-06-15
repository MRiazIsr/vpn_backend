import type { 
  Request, 
  Response 
} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { IUser } from '../Interfaces/IUser';

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const db = req.app.locals.db;

  try {
    const userExists = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: IUser = { username, password: hashedPassword };
    db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run(newUser.username, newUser.password);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const db = req.app.locals.db;

  try {
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
