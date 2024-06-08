import { 
    type Request,
    type Response, 
    type NextFunction 
} from 'express';

const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

export default adminMiddleware;
