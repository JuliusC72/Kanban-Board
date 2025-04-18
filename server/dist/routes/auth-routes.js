import { Router } from 'express';
const login = async (userInfo) => {
    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
        return data;
    }
    catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
export { login };
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
