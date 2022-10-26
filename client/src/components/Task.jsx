import { useContext } from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BiCalendarEvent, BiTime } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";

import { FormContext } from "../context/formContext";
import { TaskContext } from "../context/taskContext";
import { deleteTask, updateTask } from "../slices/taskSlice";
import Form from "./Form";
import { level1, level2, level3 } from "../images";

const Task = ({ title, dueDateTime, status, priority, id }) => {
  const dateFromJSON = new Date(dueDateTime);
  const dueTime = dateFromJSON.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: false });
  const dueDate = dateFromJSON.toLocaleDateString("en-GB", { day: "numeric", month: "short", "year": "2-digit" });

  const dispatch = useDispatch();
  const { formToggle, setFormToggle } = useContext(FormContext);
  const { setCurrentId } = useContext(TaskContext);
  
  const prioritySelector = (priority) => {
    switch(priority) {
      case "1":
        return level1;
      case "2":
        return level2;
      case "3":
        return level3;
      default:
        return level1;
    }
  }

  const setIdToEdit = (e, id) => {
    e.stopPropagation();
    setFormToggle(true);
    setCurrentId(id);
  }

  const updateStatus = (e, id) => {
    e.stopPropagation();
    let preSendData = { id, title, dueDateTime, priority, status: e.target.value }
    dispatch(updateTask(preSendData));
  }

  const removeTask = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTask(id));
  }

  return (
    <div className= "px-8">
      <div className= "bg-[#FFFFFF] flex w-full shadow-md px-2 py-2 rounded-md mb-4 justify-between">
        <div className= "flex flex-row">
          <img src= { prioritySelector(priority) } className= "pr-2 mt-1 w-10 object-contain"/>
          <div className= "flex flex-col">
            <h1 className= "text-black text-sm font-semibold font-opensans mb-3 truncate">{ title }</h1>
            <div className= "flex flex-row justify-start items-center mt-1">
              <BiCalendarEvent size= { 20 } className= "mr-1"/>
              <h1 className= "text-black text-xs font-opensans mr-1">{ dueDate } </h1>
              <BiTime size= { 20 } className= "mr-1"/>
              <h1 className= "text-black text-xs font-opensans"> { dueTime }</h1>
            </div>
          </div>
        </div>
        <div className= "right-0 flex flex-col">
          <div className= "flex flex-row mb-3 justify-between">
            <FiEdit className= "text-black text-sm font-semibold font-opensans cursor-pointer" size= "18px" onClick= { e => setIdToEdit(e, id) }/>
            <AiFillDelete className= "text-black text-sm font-semibold font-opensans cursor-pointer" size= "18px" onClick= { e => removeTask(e, id) }/>
          </div>
          {/* <button className= "text-black text-sm font-opensans">Change</button> */}
          <select className= "appearance-none border-2 border-gray-200 rounded w-full p-1 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD] items-center justify-center" id= "priority" value= { status } onChange= { e => updateStatus(e, id) }>
            <option value= "To do">To do</option>
            <option value= "Doing">Doing</option>
            <option value= "Done">Done</option>
          </select>
        </div>
      </div>
      { formToggle && <Form /> }    
    </div>
  );
}

export default Task