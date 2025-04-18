import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Unauthorized: No token provided' });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || '');
        req.user = { username: decoded.username };
        next();
    }
    catch (error) {
        res.status(403).json({ message: 'Forbidden: Invalid token' });
        return;
    }
};
