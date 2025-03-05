import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export class UserController {
    private userRepository = AppDataSource.getRepository(User);

    async all(req: Request, res: Response) {
        try {
            const users = await this.userRepository.find();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async one(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await this.userRepository.findOne({ where: { id } });
            
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { firstName, lastName, email } = req.body;
            const user = this.userRepository.create({ firstName, lastName, email });
            await this.userRepository.save(user);
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await this.userRepository.findOne({ where: { id } });
            
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            
            this.userRepository.merge(user, req.body);
            const results = await this.userRepository.save(user);
            return res.json(results);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await this.userRepository.findOne({ where: { id } });
            
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            
            await this.userRepository.remove(user);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
} 