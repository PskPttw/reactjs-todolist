import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import Task from "./Task";
import { fetchTasks } from "../slices/taskSlice";

const Todolist = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.task.tasks);

  const todoTasks = tasks.filter((task) => task.status === "To do");
  const doingTasks = tasks.filter((task) => task.status === "Doing");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [tasks.length]);

  return (
    <div className= "flex flex-col md:grid md:grid-cols-3 gap-4 w-5/6">
      <div className= "w-full bg-[#B8C0FF] mt-4 rounded-md">
        <div className= "flex justify-between">
          <div className= "my-6 pl-8 font-opensans font-bold text-xl">
            To Do
          </div>
          <div className= "my-6 pr-8 font-opensans font-bold text-xl">
            { todoTasks.length }
          </div>
        </div>
        { todoTasks.map((task, i) => (
          <Task 
            key= { i }
            title= { task.title }
            dueDateTime= { task.dueDateTime }
            status= { task.status }
            priority= { task.priority }
            id= { task._id }
          />
        )) }
      </div>
      <div className= "w-full bg-[#C8B6FF] mt-4 rounded-md">
        <div className= "flex justify-between">
          <div className= "my-6 pl-8 font-opensans font-bold text-xl">
            Doing
          </div>
          <div className= "my-6 pr-8 font-opensans font-bold text-xl">
            { doingTasks.length }
          </div>
        </div>
        { doingTasks.map((task, i) => (
          <Task 
            key= { i }
            title= { task.title }
            dueDateTime= { task.dueDateTime }
            status= { task.status }
            priority= { task.priority }
            id= { task._id }
          />
        )) }
      </div>
      <div className= "w-full bg-[#B8C0FF] mt-4 rounded-md">
        <div className= "flex justify-between">
          <div className= "my-6 pl-8 font-opensans font-bold text-xl">
            Done
          </div>
          <div className= "my-6 pr-8 font-opensans font-bold text-xl">
            { doneTasks.length }
          </div>
        </div>
        { doneTasks.map((task, i) => (
          <Task 
            key= { i }
            title= { task.title }
            dueDateTime= { task.dueDateTime }
            status= { task.status }
            priority= { task.priority }
            id= { task._id }
          />
        )) }
      </div>
    </div>
  );
}

export default Todolist