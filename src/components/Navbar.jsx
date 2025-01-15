import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between border-b  border-b-gray-300 text-sm  py-4 mb-5'>
      {/* <img onClick={()=>navigate('/')} className='w-[150px] cursor-pointer ' src={assets.logo} alt="" /> */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="contact">
          <li className='py-1'>Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

      </ul>
      {/* User Profile section */}
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className=' mr-10 flex items-center group relative cursor-pointer'>
              <img className='w-8 rounded-full ' src={assets.profile_pic} alt="" />
              <img className='w-2.5 mx-2' src={assets.dropdown_icon} alt="" />
              <div className=' absolute top-0  right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                {/* profile Dropdowns */}
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4' >
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer' >My Profile</p>
                  <p onClick={() => navigate('/my-appoinments')} className='hover:text-black cursor-pointer' >My Appointments</p>
                  <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer' >Logoout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className=' bg-primary rounded-full text-white px-8 py-2 font-light hidden md:block'>Create account</button>
        }

      </div>
    </div>
  )
}

export default Navbar
