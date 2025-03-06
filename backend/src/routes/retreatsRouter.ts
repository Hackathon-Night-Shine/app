import { Router } from "express";
import { User } from "../entities/User";
import { dataSource } from "../connection";
import { RetreatType } from "../types";
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

router.post("/retreats", async (req, res) => {
  const retreat = req.body as RetreatType;
  if (!retreat) {
    return res.status(400).json({ error: "retreat wasn't provided" });
  }

  const retreatRepository = dataSource.getRepository(Retreat);
  const newRetreat = retreatRepository.create(retreat);
  await retreatRepository.save(newRetreat);

  res.status(201).json(newRetreat);
});

router.delete("/retreats/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    return res.status(400).json({ error: "retreat id wasn't provided" });
  }

  const retreatRepository = dataSource.getRepository(Retreat);
  const isRetreatDeleted = await retreatRepository.delete(id);

  if (!isRetreatDeleted) {
    res.status(404).json(`failed to delete retreat ${id}`);
  } else {
    res.json(`retreat ${id} was deleted successfully`);
  }
});

router.put("/retreats/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const retreat = req.body as RetreatType;
  if (!retreat) {
    return res.status(400).json({ error: "retreat wasn't provided" });
  }
  const retreatRepository = dataSource.getRepository(Retreat);
  const isRetreatupdated = await retreatRepository.update(id, retreat);
  if (!isRetreatupdated) {
    res.status(404).json(`failed to update retreat ${id}`);
  } else {
    res.json(`retreat ${id} was updated successfully`);
  }
});

export default router;
