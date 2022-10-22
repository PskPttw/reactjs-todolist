import { useContext } from "react";
import { IoMdClose } from "react-icons/io"

import { FormContext } from "../context/formContext";

import styles from "../style";

const Form = () => {
  const formInput = `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`
  const label = "block uppercase tracking-wide text-[#E488A1] text-lg font-montserrat font-semibold mb-2 mr-3"

  const { formToggle, setFormToggle } = useContext(FormContext);
  return (
    <div className= "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
      <div className= "relative w-auto my-6 mx-auto max-w-xs shadow-lg">
        {/* <div className= "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#b8c0ff] outline-none focus:outline-none"> */}
        <div className= "flex justify-between border-solid bg-[#B8C0FF] rounded-t">
          <h3 className= "text-xl font-montserrat font-semibold items-center rounded-t py-3 pl-3">
            Add Task
          </h3>
          <button className= "ml-auto bg-transparent border-0 text-[#E488A1] float-right text-3xl leading-none font-semibold outline-none focus:outline-none py-3 pr-3">
              <IoMdClose className= "fill-[#FF577F] cursor-pointer" onClick= { () => setFormToggle(false) }/>
          </button>
        </div>
        <div className= "relative p-6 flex-auto bg-[#C8B0FF] rounded-b">
          <label>Name</label>
          <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD] font-opensans"/>
          <label>Date</label>
          <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD] font-opensans" type= "date"/>
          <label>Time</label>
          <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD] font-opensans" type= "time"/>
          <label>Priority</label>
          <select className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#00FBDD]">
            <option value= "1">Level 1</option>
            <option value= "2">Level 2</option>
            <option value= "3">Level 3</option>
          </select>
          <button className= "justify-center items-center w-full bg-[#B8FFF7] py-2 rounded font-opensans">Submit</button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Form