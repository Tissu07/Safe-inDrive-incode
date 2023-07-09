import React, { useState, useContext } from 'react'
import SetupContext from '../Context/SetupContext';
import { useNavigate } from 'react-router-dom'

import home from '../assets/home2.png'

function Destination() {
  const navigate = useNavigate()
  const context = useContext(SetupContext)
  const { destination, setDestination } = context



  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(destination);
    if (destination.length > 5) {
      navigate('/rideAvailable')
    }
    else {
      setDestination('')
      alert("invalid input")
    }


  };
  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <div className='flex flex-col w-40 bg-yellow-300 m-auto rounded-xl my-40'>
    //       <label className='text-center ' htmlFor="">Destination</label>
    //       <input className='mx-4 my-4' type="text" value={destination} onChange={handleChange} />
    //       <button type='submit' className='p-1 bg-red-400 rounded-lg m-3'>Drop point</button>
    //     </div>
    //   </form>


    // </div>

    <div className='bg-yellow-400 py-28'>
      


      <div className='bg-yellow-100 w-2/3   m-auto p-4 my-10 drop-shadow-lg'>
        <p className='text-center text-2xl md:text-5xl py-5 font-semibold'>SET DESTINATION</p>
        <div className='flex flex-col md:flex-row m-2'>
          <div className='md:w-1/2'>
            <img className='object-scale-down ' src={home} alt="" />
          </div>

        
            <form className='flex flex-col mx-2 md:w-1/2 md:ml-5 my-4' onSubmit={handleSubmit}>
              <label htmlFor="">Destination</label>
              <input className=' h-8 md:mr-20 my-2' type="text" value={destination} onChange={handleChange} />
              <button type='submit' className=' bg-red-600 h-8  md:mr-20 my-10 text-lg text-white'>Set</button>
              <p className='pr-10'>.'. Enter the phone number to whom you can trust.</p>
            </form>

          
        </div>
      </div>
    </div>
  )
}

export default Destination
