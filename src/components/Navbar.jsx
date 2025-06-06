import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();

  const {token, setToken, userData} = useContext(AppContext) //Authencation

  const [showMenu, setShowMenu] = useState(false)
  // const [token, setToken] = useState(true)

  const logOut = () => {
    setToken(false)
    toast.success('Log out successful!')
    localStorage.removeItem('token')
  }



  return (
    <div className='flex items-center justify-between border-b  border-b-gray-300 text-sm  py-4 mb-5'>

      <h1  onClick={()=>navigate('/')} className="text-3xl font-bold  text-primary cursor-pointer "><span className='text-4xl' >D</span>oc<span className='text-4xl '>T</span>ym</h1>
      <div>
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
      </div>
      {/* User Profile section */}
      <div className='flex items-center gap-4'>
        {
          token && userData
            ? <div className=' mr-10 flex items-center group relative cursor-pointer'>
              <img className='w-8 rounded-full ' src={userData.image} alt="" />
              <img className='w-2.5 mx-2' src={assets.dropdown_icon} alt="" />
              <div className=' absolute top-0  right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                {/* profile Dropdowns */}
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4' >
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer' >My Profile</p>
                  <p onClick={() => navigate('/my-appoinments')} className='hover:text-black cursor-pointer' >My Appointments</p>
                  <p onClick={logOut}  className='hover:text-black cursor-pointer' >Logoout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className=' bg-primary rounded-full text-white px-8 py-2 font-light hidden md:block'>Create account</button>
        }
        
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* -------------Mobile Menu-------------- */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden   bg-white transition-all `}>
          <div className='flex items-center justify-between px-5 py-6'>
          <h1  onClick={()=>navigate('/')} className="text-3xl font-bold  text-primary cursor-pointer "><span className='text-4xl' >D</span>oc<span className='text-4xl '>T</span>ym</h1>

            <img className='w-7' onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
            <NavLink className='px-4 py-2 rounded inline-block ' onClick={()=>showMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink className='px-4 py-2 rounded inline-block ' onClick={()=>showMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>Doctors</p></NavLink>
            <NavLink className='px-4 py-2 rounded inline-block ' onClick={()=>showMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink className='px-4 py-2 rounded inline-block ' onClick={()=>showMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
          </ul>


        </div>


      </div>
    </div>
  )
}

export default Navbar
