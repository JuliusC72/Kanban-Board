import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find the user
        const user = await User.findOne({ where: { username } });
        if (!user) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
        // Create and sign JWT token
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY || '', { expiresIn: '1h' });
        res.json({ token });
        return;
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
        return;
    }
};
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
