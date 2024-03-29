import { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";

import { FormContext } from "../context/formContext";
import { TaskContext } from "../context/taskContext";
import { addTask, deleteTask, updateTask } from "../slices/taskSlice";
import styles from "../style";

const Form = () => {
  const formInput = `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`
  const label = "block uppercase tracking-wide text-[#E488A1] text-lg font-montserrat font-semibold mb-2 mr-3"
  const initialState = { title: "", dueDate: "", dueTime: "", priority: "1", status: "To do" }

  const dispatch = useDispatch();
  const { setFormToggle } = useContext(FormContext);
  const { currentId, setCurrentId } = useContext(TaskContext);
  const [taskData, setTaskData] = useState(initialState); 
  const task = useSelector((state) => (currentId ? state.task.tasks.find((task) => task._id === currentId) : null));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //  Add additional timezone GMT +07:00
    let preSendData = { id: currentId, title: taskData.title, dueDateTime: new Date(taskData.dueDate.concat("T", taskData.dueTime).concat(":00.000+07:00")).toISOString(), priority: taskData.priority, status: taskData.status }
    
    if(currentId === 0) {
      dispatch(addTask(preSendData));
    } else {
      dispatch(updateTask(preSendData));
    }
  }

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.id]: e.target.value });
  }

  useEffect(() => {
    if(task) { 
      const dateFromJSON = new Date(task.dueDateTime);
      const year = dateFromJSON.getFullYear();
      const month = (dateFromJSON.getMonth() + 1).toString().padStart(2, "0");
      const date = dateFromJSON.getDate().toString().padStart(2, "0");

      const dueDate = year + "-" + month + "-" + date;      
      const dueTime = dateFromJSON.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: false });
      setTaskData({ title: task.title, dueDate, dueTime, priority: task.priority, status: task.status });
    }
  }, [task]);
  

  return (
    <div className= "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
      <div className= "relative w-auto my-6 mx-auto max-w-xs shadow-lg">
        <div className= "flex justify-between border-solid bg-[#B8C0FF] rounded-t">
          <h3 className= "text-xl font-montserrat font-semibold items-center rounded-t py-3 pl-3">
            Add Task
          </h3>
          <button className= "ml-auto bg-transparent border-0 text-[#E488A1] float-right text-3xl leading-none font-semibold outline-none focus:outline-none py-3 pr-3">
              <IoMdClose className= "fill-[#FF577F] cursor-pointer" onClick= { () => setFormToggle(false) }/>
          </button>
        </div>
        <form className= "relative p-6 flex-auto bg-[#C8B0FF] rounded-b" onSubmit= { handleSubmit }>
          <label className= "font-opensans font-semibold" htmlFor= "title">Name</label>
          <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD] font-opensans" type= "text" id= "title" value= { taskData.title } onChange= { e => handleChange(e) }/>
          <label className= "font-opensans font-semibold" htmlFor= "dueDate">Date</label>
          <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD] font-opensans" type= "date" id= "dueDate" value= { taskData.dueDate } onChange= { e => handleChange(e) }/>
          <label className= "font-opensans font-semibold" htmlFor= "dueTime">Time</label>
          <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD] font-opensans" type= "time" id= "dueTime" value= { taskData.dueTime } onChange= { e => handleChange(e) }/>
          <label className= "font-opensans font-semibold" htmlFor= "priority">Priority</label>
          <select className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD]" id= "priority" value= { taskData.priority } onChange= { e => handleChange(e) }>
            <option value= "1">Level 1</option>
            <option value= "2">Level 2</option>
            <option value= "3">Level 3</option>
          </select>
          <button className= "justify-center items-center w-full bg-[#B8FFF7] py-2 rounded font-opensans font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form