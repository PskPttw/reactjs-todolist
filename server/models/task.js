import mongoose from "mongoose";

const taskSchema = mongoose.Schema ({
  title: String,
  dueDateTime: Date,
  priority: String,
  status: String
})

export default mongoose.model("Task", taskSchema)