import { Router } from "express";
import * as controller from "../controllers/taskcontroller";

const router= Router();

router.get("/", controller.getTasks);
router.post("/", controller.createTask);
router.put("/:id", controller.updateTask);
router.delete("/", controller.deleteTask);

export default router;