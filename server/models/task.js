import mongoose from "mongoose";

const taskSchema = mongoose.Schema ({
  title: String,
  dueDateTime: Date,
  priority: String,
  status: String
})

const Task = mongoose.model("Task", taskSchema);

export default Task;