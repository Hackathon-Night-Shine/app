import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.get("/users", userController.all.bind(userController));
router.get("/users/:id", userController.one.bind(userController));
router.post("/users", userController.create.bind(userController));
router.put("/users/:id", userController.update.bind(userController));
router.delete("/users/:id", userController.remove.bind(userController));

export default router; 