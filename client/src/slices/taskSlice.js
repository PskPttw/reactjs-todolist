import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = { loading: false, tasks: [], error: "" };

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  return api.fetchTasks().then(res => res.data);
});

export const addTask = createAsyncThunk("task/addTask", async (task) => {
  const { data } = await api.createTask(task);
  return data;
});

export const updateTask = createAsyncThunk("task/updateTask", async (task) => {
  const { data } = await api.updateTask(task.id, { title: task.title, dueDateTime: task.dueDateTime, priority: task.priority, status: task.status });
  return data;
});

export const deleteTask = createAsyncThunk("task/deleteTask", async (id) => {
  const { data } = await api.deleteTask(id);
  return data;
});

const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: (builder) => {
    //Fetch Tasks
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //Add Tasks
    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = [...state.tasks, action.payload];
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //Update Task
    builder.addCase(updateTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = [...state.tasks, state.tasks.map((task) => task._id === action.payload._id ? action.payload : task)];
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    //Delete Task
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = [...state.tasks, state.tasks.filter((task) => task._id !== action.payload)];
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export default taskSlice.reducer;