import { Router } from 'express';
import { User } from '../entities/User';
import { dataSource } from '../connection';

// Create the router instance
const router = Router();

// Get all users
router.get('/users', async (req, res) => {
    try {
        const userRepository = dataSource.getRepository(User);
        const users = await userRepository.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});

export default router;
