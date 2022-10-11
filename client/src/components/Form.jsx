import styles from "../style";

const Form = () => {
  const formInput = `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
  const label = "block uppercase tracking-wide text-[#E488A1] text-lg font-montserrat font-semibold mb-2 mr-3"

  return (
    <>
        {/* <form className= "">
          <div className= "md:flex md:items-center">
            <div className= "">
              <label className= "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor= "task">Task</label>
            </div>
            <div>
              <input className= "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
            </div>
          </div>
        </form> */}
        <form className= "w-full max-w-sm">
          <div className= "flex items-center border-b border-[#E488A1] py-2">
            <input className= "appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" id= "taskName" type= "text" placeholder= "Do the laundry"/>
            <button className= "flex-shrink-0 bg-[#E488A1] hover:bg-teal-700 border-[#E488A1] hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
              Add Task
            </button>
            <button class="flex-shrink-0 border-transparent border-4 text-[#E488A1] hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              Clear
            </button>
          </div>
        </form>
    </>
  );
}

export default Form