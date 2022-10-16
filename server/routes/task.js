import express from "express";

import { getTasks, addTask, updatetask, deleteTask } from "../controller/task.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", addTask);
router.patch("/:id", updatetask);
router.delete("/:id", deleteTask);

export default router