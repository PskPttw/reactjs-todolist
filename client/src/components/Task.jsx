import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { level1, level2, level3 } from "../images"

const Task = ({ title, dueDateTime, status, priority }) => {
  // const d = new Date(2022, 11, 17, 15, 24, 0);
  const dateFromJSON = new Date(dueDateTime);
  const dueTime = dateFromJSON.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: false });
  const dueDate = dateFromJSON.toLocaleDateString("en-GB", { day: "numeric", month: "short", "year": "2-digit" })

  return (
    <div className= "px-8">
      <div className= "bg-[#FFD384] flex w-full shadow-md px-2 py-2 rounded-md mb-4 justify-between">
        <div className= "flex flex-row">
          <img src= { level1 } className= "pr-2 mt-1 object-contain"/>
          <div className= "flex flex-col">
            <h1 className= "text-black text-sm font-semibold font-opensans mb-3 truncate">{ title }</h1>
            <div className= "flex flex-row">
              <h1 className= "text-black text-sm font-opensans">{ dueDate }</h1>
              <h1 className= "text-black text-sm font-opensans">{ dueTime }</h1>
            </div>
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
    </div>
  )
}

export default Task