import { IoMdClose } from "react-icons/io"

import styles from "../style";

const Form = () => {
  const formInput = `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-gray-500`
  const label = "block uppercase tracking-wide text-[#E488A1] text-lg font-montserrat font-semibold mb-2 mr-3"

  return (
    <div className= "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm">
      <div className= "relative w-auto my-6 mx-auto max-w-xs">
        <div className= "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#FFF9B0] outline-none focus:outline-none">
          <div className= "flex justify-between border-solid bg-[#FFF9B0] rounded-t">
            <h3 className= "text-xl font-montserrat font-semibold bg-[#FFF9B0] items-center rounded-t py-3 pl-3">
              Add Task
            </h3>
            <button className= "ml-auto bg-transparent border-0 text-[#E488A1] float-right text-3xl leading-none font-semibold outline-none focus:outline-none py-3 pr-3">
                <IoMdClose className= "fill-[#FF577F]"/>
            </button>
          </div>
          <div className= "relative p-6 flex-auto bg-[#FFD384] rounded-b">
            <label>Name</label>
            <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#FF884B] font-opensans"/>
            <label>Date</label>
            <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#FF884B] font-opensans" type= "date"/>
            <label>Time</label>
            <input className= "appearance-none border-2 border-gray-200 rounded w-full mb-4 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#FF884B] font-opensans" type= "time"/>
            <label>Priority</label>
            <select className= "appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-[#FF884B]">
              <option value= "1">Level 1</option>
              <option value= "2">Level 2</option>
              <option value= "3">Level 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form