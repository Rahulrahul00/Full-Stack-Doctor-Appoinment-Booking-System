import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800 '>
        <h1 className='text-3xl font-medium' >Find By Speciality</h1>
        <p className='sm:w-1/3 text-center text-xs'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        <div className='flex gap-4 justify-center pt-5 w-full overflow-scroll'>
            {specialityData.map((item,index)=>(
              <Link key={index} to={`/doctors/${item.speciality}`} className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'>
                <img className='w-16 sm:24 mb-2' src={item.image} alt="" />
                <p>{item.speciality}</p>

              </Link>
            ))}
        </div>
      
    </div>
  )
}

export default SpecialityMenu
