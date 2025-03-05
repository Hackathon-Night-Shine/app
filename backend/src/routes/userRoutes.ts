import { Router } from "express";
import { User, UserRole } from "../entities/User";
import { dataSource } from "../connection";

// Create the router instance
const router = Router();

// Get all users
router.get("/users", async (req, res) => {
  try {
    const userRepository = dataSource.getRepository(User);
    //Todo: add join to table tik metupal
    const users = await userRepository.find({
      where: { role: UserRole.ADMIN },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
});

router.get("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id } });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error });
  }
});

export default router;
