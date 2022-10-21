import { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import { logo } from "../images"

import styles from "../style";

const Navbar = () => {
  return (
    <div className= "bg-[#8FD5A6] w-full overflow-hidden">
      <div className= {`${ styles.paddingX } ${ styles.flexCenter }`}>
        <div className= "xl:max-w-[1280px] w-full">
          <nav className= "w-full flex py-2 justify-between items-center navbar">
            <img src= { logo } className= "w-[128px] cursor-pointer"/>
            <ul className= "list-none sm:flex hidden justify-end items-center flex-1">
              <li key= "addTask">
                <button className= "font-montserrat font-semibold cursor-pointer text-[16px] mr-10 text-white bg-black p-3 rounded-lg transition ease-in-out delay-100 duration-200 hover:bg-[#48CAE4] hover:text-black">
                  New Task
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>      
    </div>
  )
}

export default Navbar