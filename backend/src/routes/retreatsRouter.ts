import { Router } from "express";
import { User } from "../entities/User";
import { dataSource } from "../connection";
import { UserRole, UserType } from "../types";
import { Retreat } from "../entities/Retreat";

// Create the router instance
const router = Router();

router.get("/retreats", async (req, res) => {
  try {
    const retreatsRepository = dataSource.getRepository(Retreat);
    const retreats = await retreatsRepository.find();
    res.json(retreats);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch retreats", error });
  }
});

export default router;
