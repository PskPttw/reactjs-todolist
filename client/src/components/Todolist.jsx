import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import Task from "./Task";
import { fetchTasks } from "../slices/taskSlice";

const Todolist = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.task.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [tasks.length]);

  return (
    <div className= "grid grid-cols-3 gap-4 w-5/6">
      <div className= "w-full bg-[#FFF9B0] mt-4 rounded-md">
        <div className= "flex justify-between">
          <div className= "my-6 pl-8 font-opensans font-bold text-xl">
            To Do
          </div>
          <div className= "my-6 pr-8 font-opensans font-bold text-xl">
            3
          </div>
        </div>
        { tasks.map((task, i) => (
          <Task 
            key= { i }
            title= { task.title }
            dueDateTime= { task.dueDateTime }
            status= { task.status }
            priority= { task.priority }
          />
        )) }
        {/* <Task 
          title= { tasks }
        /> */}
        {/* Start */}
        {/* <div className= "px-8">
          <div className= "bg-[#FFD384] flex w-full shadow-md px-2 py-2 rounded-md mb-4 justify-between">
            <div className= "flex flex-row">
              <img src= { level1 } className= "pr-2 mt-1 object-contain"/>
              <div className= "flex flex-col">
                <h1 className= "text-black text-sm font-semibold font-opensans mb-3 truncate">Play The Witcher 3</h1>
                <h1 className= "text-black text-sm font-opensans">03 Nov 2022</h1>
              </div>
            </div>
            <div className= "right-0 flex flex-col">
              <div className= "flex flex-row mb-3 justify-between">
                <FiEdit className= "text-black text-sm font-semibold font-opensans" size= "18px"/>
                <AiFillDelete className= "text-black text-sm font-semibold font-opensans" size= "18px"/>
              </div>
              <button className= "text-black text-sm font-opensans">Change</button>
            </div>
          </div>
        </div> */}
        {/* End */}
        {/* <div className= "px-8">
          <div className= "bg-[#FFD384] flex w-full shadow-md px-2 py-2 rounded-md mb-4">
            <img src= { level1 } className= "pr-2"/>
            <h1 className= "text-black">List</h1>
          </div>
        </div>
        <div className= "px-8">
          <div className= "bg-[#FFD384] flex w-full shadow-md px-2 py-2 rounded-md mb-4">
            <img src= { level1 } className= "pr-2"/>
            <h1 className= "text-black">List</h1>
          </div>
        </div> */}
      </div>
      <div className= "flex bg-[#FFF9B0] mt-4 rounded-md justify-between">
        <div className= "my-6 pl-8 font-opensans font-bold text-xl">
          Doing
        </div>
        <div className= "my-6 pr-8 font-opensans font-bold text-xl">
          3
        </div>
      </div>
      <div className= "flex bg-[#FFF9B0] mt-4 rounded-md justify-between">
        <div className= "my-6 pl-8 font-opensans font-bold text-xl">
          Done
        </div>
        <div className= "my-6 pr-8 font-opensans font-bold text-xl">
          3
        </div>
      </div>
    </div>
  );
}

export default Todolist