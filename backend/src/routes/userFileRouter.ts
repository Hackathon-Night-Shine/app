import { Router } from "express";
import { dataSource } from "../connection";
import { UserUserFile } from "../entities/UserUserFile";

const router = Router();

router.get("/userFiles/:userId", async (req, res) => {
  const userId = parseInt(req.params.userId);

  try {
    const userRepository = dataSource.getRepository(UserUserFile);
    const userFile = await userRepository.findOne({
      where: { userId },
      relations: ["user_file"],
      select: ["user_file"],
    });

    if (!userFile) {
      res.status(404).json({
        message: `User with id ${userId} doesn't have user file data`,
      });
      return;
    }
    res.json(userFile);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user file by id", error });
  }
});

export default router;
