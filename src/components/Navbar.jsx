import React from 'react'
import { IoIosFitness } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (


    <div className='w-full h-auto px-2  flex sm:w-[100%]  sm:justify-around   lg:w-[60%] lg:h-auto md:flex-row lg:justify-center lg:items-center lg:pt-10'> 

      <div className='w-[30%] sm:w-[20%]   lg:w-[40%] lg:h-auto lg:pl-40 text-red-600'> 
        <IoIosFitness className='text-4xl  md:text-6xl ' />
      </div>

      <div className='w-[70%] flex text-sm justify-between sm:justify-around  sm:w-[60%] sm:justify-around lg:w-[60%] h-auto lg:text-lg  lg:justify-around items-center font-semibold text-black'>
        
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-red-500" : ""
        }>
          Home
        </NavLink>

       <HashLink smooth to="/#exercises-section" className="text-black font-semibold">
        Exercises
      </HashLink>

        <NavLink to="/BmiCalculator" className={({isActive})=>
        isActive ? "text-red-500" : ""
        }>BMI</NavLink>

        <NavLink to="/Motivation" className={({isActive})=>
        isActive ? "text-red-500" : ""
        }>Motivation</NavLink>

      </div>
    </div>
  )
}

export default Navbar;
