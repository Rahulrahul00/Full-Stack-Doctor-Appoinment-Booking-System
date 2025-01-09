import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppoinment from './pages/MyAppoinment'
import MyProfile from './pages/MyProfile'
import Appoinments from './pages/Appoinments'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route patth='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appoinments' element={<MyAppoinment/>} />
        <Route path='/appoinments/:docId' element={<Appoinments/>} />

        
       

      </Routes>
      
    </div>
  )
}

export default App
