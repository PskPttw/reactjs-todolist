import mongoose from "mongoose";
import express from "express";

import Task from "../models/task.js";

const router = express.Router()

export const getTasks = async(req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  }
  catch(error) {
    res.status(404).json({ message: error.message });
  }
}

export const addTask = async(req, res) => {
  const task = req.body;
  const newTask = new Task(task)
}

export default router;