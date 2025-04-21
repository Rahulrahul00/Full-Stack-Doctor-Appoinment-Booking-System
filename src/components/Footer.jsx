import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* ............Left Section............... */}
                <div>
                    {/* <img className='mb-5 w-[70px] ' src={assets.chats_icon} alt="" /> */}
                    <h1  onClick={()=>navigate('/')} className="text-3xl font-bold  text-primary cursor-pointer "><span className='text-4xl' >D</span>oc<span className='text-4xl '>T</span>ym</h1>
                    <p className='w-full md:w-2/3 my-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>

                {/* ............Centre Section............... */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy&Policy</li>
                    </ul>

                </div>


                {/* ............Right Section............... */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-grey-600'>
                        <li>+91 9746560034</li>
                        <li>doctym@gmail.com</li>
                    </ul>

                </div>

            </div>

            {/* Copy Rights */}


            <div>
                <hr />
                <p className=' py-5 text-sm text-center'>Copyright 2024 @ DocTym - All Right Reserved.</p>
            </div>
        </div>







    )
}

export default Footer
