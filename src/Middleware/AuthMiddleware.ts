import type { 
    Request,
    Response, 
    NextFunction 
} from 'express';
import jwt from 'jsonwebtoken';
import {
    type IJwtPayload,
} from '../Interfaces/IMiddleware';


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as IJwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export default authMiddleware;