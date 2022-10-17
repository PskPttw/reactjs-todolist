import express from "express";

import { getTasks, addTask, updateTask, deleteTask } from "../controller/task.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", addTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;