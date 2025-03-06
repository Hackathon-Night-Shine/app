import { Router } from "express";
import { dataSource } from "../connection";
import { Request } from "../entities/Request";

const router = Router();

router.get("/request", async (req, res) => {
  try {
    const requestRepository = dataSource.getRepository(Request);
    const requests = await requestRepository.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch requests", error });
  }
});

router.get("/request/featchAllByRetreatId/:retreatId", async (req, res) => {
  const retreatId = parseInt(req.params.retreatId);

  try {
    const requestRepository = dataSource.getRepository(Request);
    const requests = await requestRepository.find({ where: { retreat: {id:retreatId} }, relations: ['client']});
    
    if (!requests) {
      res.status(404).json({ message: `Requests not found for ${retreatId}` });
      return;
    }
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: `Failed to fetch requests for ${retreatId}`, error });
  }
});

router.get("/request/featchAllByUserId/:userId", async (req, res) => {
    const userId = parseInt(req.params.userId);
  
    try {
      const requestRepository = dataSource.getRepository(Request);
      const requests = await requestRepository.find({ where: { client: {id:userId} }, relations: ['retreat']});
      
      if (!requests) {
        res.status(404).json({ message: `Requests not found for ${userId}` });
        return;
      }
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: `Failed to fetch requests for ${userId}`, error });
    }
  });

export default router;
