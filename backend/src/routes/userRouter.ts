import { Router } from 'express';
import { dataSource } from '../connection';
import { User } from '../entities/User';
import { UserRole, UserType } from '../types';

// Create the router instance
const router = Router();

router.get('/users', async (req, res) => {
    const email = req.query.email;

    if (!email) return res.status(400).json({ message: 'Email not found' });

    try {
        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { email: email.toString() } });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user', error });
    }
});

router.get('/users', async (req, res) => {
    try {
        const userRepository = dataSource.getRepository(User);
        const users = await userRepository.find({
            where: { role: UserRole.CLIENT },
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});

router.get('/users', async (req, res) => {
    try {
        const userRepository = dataSource.getRepository(User);
        const users = await userRepository.find({
            where: { role: UserRole.CLIENT },
            relations: ['tikMetupal'],
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});
router.get('/all-users', async (req, res) => {
    try {
        const userRepository = dataSource.getRepository(User);
        //Todo: add join to table tik metupal

        const users = await userRepository.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});

router.get('/users/byEmail/:email', async (req, res) => {
    const email = req.params.email;

    if (!email) return res.status(400).json({ message: 'Email not found' });

    try {
        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { email: email.toString() } });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user', error });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const userRepository = dataSource.getRepository(User);
        //Todo: add join to table tik metupal

        const users = await userRepository.find({
            where: { role: UserRole.ADMIN },
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error });
    }
});

router.get('/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id } });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user', error });
    }
});

router.get('/users/byId/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);

    try {
        const userRepository = dataSource.getRepository(User);
        const user = await userRepository.findOne({ where: { id: userId } });

        if (!user) {
            res.status(404).json({ message: `User with id ${userId} not found` });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user by id', error });
    }
});

router.post('/users', async (req, res) => {
    const user = req.body as UserType;

    const formattedUser = {
        ...user,
        birthDate: new Date(user.birthDate),
    };

    const userRepository = dataSource.getRepository(User);
    const requestedUser = await userRepository.findOne({ where: { email: user.email } });

    if (!!requestedUser) return res.status(400).json({ message: 'Email already in use' });

    const newUser = userRepository.create(formattedUser);
    await userRepository.save(newUser);

    res.status(201).json(newUser);
});

export default router;
