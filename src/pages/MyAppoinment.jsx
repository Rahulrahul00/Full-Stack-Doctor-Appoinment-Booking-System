import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const MyAppoinment = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])

  const navigate = useNavigate()

  const getMyAppointments = async () => {

    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
      // console.log(data)
      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments)

      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  // Cancel appointment

  const cancelAppointment = async (appointmentId) => {



    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getMyAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }

      //  console.log(appointmentId)

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }



  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id:order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response)

        try {
          const {data} = await axios.post(backendUrl + '/api/user/verifyRazorpay', response, {headers:{token}})
          if(data.success){
            getMyAppointments()
            navigate('/my-appoinments')
          }
          
        }catch(error){
          toast.error(error.message)
        }
      }
    }
   
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  //Razorpay payment
  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, {headers:{token} })

      if (data.success) {
        initPay(data.order)
        //console.log(data.order)

      }

    } catch (error) {
      console.log(error)

    }



  }



  useEffect(() => {
    if (token) {
      getMyAppointments()
    }

  }, [token])


  return (
    <div>
      <p className='pb-3 mt-12 font-medium  text-zinc-700 border-b'>My appointments</p>
      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>address:</p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs'>{item.docData.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'> Date & Time:</span> {item.slotDate}</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              {!item.cancelled && item.payment && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50 hover:bg-green-500 hover:text-white transition-all duration-300'>Paid</button>}
              {!item.cancelled && !item.payment && <button  onClick={() => appointmentRazorpay(item._id)} className='text-sm text-green-600  text-center sm:min-w-48 border py-2 rounded hover:bg-green-600 hover:text-white transition-all duration-300'>Pay Online</button>}
              {!item.cancelled && <button onClick={() => cancelAppointment(item._id)} className='text-sm text-red-500 text-center sm:min-w-48 border py-2 rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appoinment</button>}
              {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-600 text-red-700 hover:bg-red-500 hover:text-white transition-all duration-300 '>Appointment cancelled</button>}
            </div>

          </div>

        ))}
      </div>

    </div>
  )
}

export default MyAppoinment
