const Todolist = () => {
  return (
    <div className= "grid grid-cols-3 gap-4 w-5/6">
      <div className= "flex bg-cyan-200 mt-4 rounded-md justify-between">
        <div className= "my-6 pl-8 font-opensans font-bold text-xl">
          To Do
        </div>
        <div className= "my-6 pr-8 font-opensans font-bold text-xl">
          3
        </div>
      </div>
      <div className= "flex bg-cyan-200 mt-4 rounded-md justify-between">
        <div className= "my-6 pl-8 font-opensans font-bold text-xl">
          Doing
        </div>
        <div className= "my-6 pr-8 font-opensans font-bold text-xl">
          3
        </div>
      </div>
      <div className= "flex bg-cyan-200 mt-4 rounded-md justify-between">
        <div className= "my-6 pl-8 font-opensans font-bold text-xl">
          Done
        </div>
        <div className= "my-6 pr-8 font-opensans font-bold text-xl">
          3
        </div>
      </div>
    </div>
  )
}

export default Todolist