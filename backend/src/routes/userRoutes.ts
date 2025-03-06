import { Router } from "express";
import { User } from "../entities/User";
import { dataSource } from "../connection";
import { UserRole, UserType } from "../types";

// Create the router instance
const router = Router();

router.get("/users", async (req, res) => {
  try {
    const userRepository = dataSource.getRepository(User);
    const users = await userRepository.find({
      where: { role: UserRole.CLIENT },
      relations: ["tikMetupal"],
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
});

router.get("/users/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error });
  }
});

router.post("/users", async (req, res) => {
  const user = req.body as UserType;
  if (!user) {
    return res.status(400).json({ error: "user wasn't provided" });
  }

  const userRepository = dataSource.getRepository(User);
  const newUser = userRepository.create(user);
  await userRepository.save(newUser);

  res.status(201).json(newUser);
});

export default router;
