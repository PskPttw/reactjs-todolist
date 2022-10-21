import { AiFillDelete } from "react-icons/ai";
import { BiCalendarEvent, BiTime } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { level1, level2, level3 } from "../images";

const Task = ({ title, dueDateTime, status, priority }) => {
  // const d = new Date(2022, 11, 17, 15, 24, 0);
  const dateFromJSON = new Date(dueDateTime);
  const dueTime = dateFromJSON.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: false });
  const dueDate = dateFromJSON.toLocaleDateString("en-GB", { day: "numeric", month: "short", "year": "2-digit" })

  const prioritySelector = (priority) => {
    switch(priority) {
      case 1:
        return level1;
      case 2:
        return level2;
      case 3:
        return level3;
      default:
        return level1;
    }
  }

  return (
    <div className= "px-8">
      <div className= "bg-[#E0D7F0] flex w-full shadow-md px-2 py-2 rounded-md mb-4 justify-between">
        <div className= "flex flex-row">
          <img src= { prioritySelector(priority) } className= "pr-2 mt-1 w-10 object-contain"/>
          <div className= "flex flex-col">
            <h1 className= "text-black text-sm font-semibold font-opensans mb-3 truncate">{ title }</h1>
            <div className= "flex flex-row justify-start items-center">
              <BiCalendarEvent size= { 20 } className= "mr-1"/>
              <h1 className= "text-black text-xs font-opensans mr-1">{ dueDate } </h1>
              <BiTime size= { 20 } className= "mr-1"/>
              <h1 className= "text-black text-xs font-opensans"> { dueTime }</h1>
            </div>
          </div>
        </div>
        <div className= "right-0 flex flex-col">
          <div className= "flex flex-row mb-3 justify-between">
            <FiEdit className= "text-black text-sm font-semibold font-opensans cursor-pointer" size= "18px"/>
            <AiFillDelete className= "text-black text-sm font-semibold font-opensans cursor-pointer" size= "18px"/>
          </div>
          <button className= "text-black text-sm font-opensans">Change</button>
        </div>
      </div>
    </div>
  );
}

export default Task