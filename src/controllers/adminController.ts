import type { 
    Request, 
    Response 
} from 'express';
import type { IUser } from '../Interfaces/IUser';

export const lockUser = async (req: Request, res: Response) => {
    const { userId } = req.body;
    const db = req.app.locals.db;

    try {
        db.prepare('UPDATE users SET locked = 1 WHERE id = ?').run(userId);
        res.status(200).json({ message: 'User locked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const addTraffic = async (req: Request, res: Response) => {
    const { userId, amount } = req.body;
    const db = req.app.locals.db;

    try {
        db.prepare('UPDATE users SET traffic = traffic + ? WHERE id = ?').run(amount, userId);
        res.status(200).json({ message: 'Traffic added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getUserTraffic = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const db = req.app.locals.db;

    try {
        const traffic = db.prepare('SELECT traffic FROM users WHERE id = ?').get(userId);
        res.json(traffic);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    const db = req.app.locals.db;

    try {
        const users = db.prepare('SELECT * FROM users').all();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
