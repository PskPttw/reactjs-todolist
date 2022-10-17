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
  const newTask = new Task(task);

  try {
    newTask.save();
    res.status(201).json(newTask);
  }
  catch(error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateTask = async(req, res) => {
  const { id } = req.params;
  const task = req.body;
  
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No task with that id.");
  }

  const updatedTask = await Task.findByIdAndUpdate(id, { ...task, id }, { new: true });

  res.json(updatedTask);
}

export const deleteTask = async(req, res) => {
  try {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send("No task with that id.");
    }
    
    await Task.findByIdAndDelete(id);

    res.json({ message: "Delete task successfully." });
  }
  catch(error) {
    res.status(400).json({ message: error.message });
  }
}

export default router;