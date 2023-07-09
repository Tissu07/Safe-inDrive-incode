import React, { useState } from 'react'
import back from '../assets/back3.png'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigate = useNavigate()

  const containerStyle = {
    position: 'relative',
    height: '700px',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // background: 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3))',
   
    

  };
  const glassyDivStyle = {
    position: 'relative',
    width: '60%',

    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    margin: "auto"


  };



  return (
    <div>


      <nav className='flex justify-between bg-yellow-400 py-5 drop-shadow-lg'>
        <div className='mx-3'>
          <p>Safe inDrive</p>
        </div>
        <div >
          <ul className='flex'>
            <li className='mx-5 cursor-pointer'>Home</li>
            <li className='mx-5 cursor-pointer'>About Us</li>
            <li className='mx-5 cursor-pointer'>Contact Us</li>
          </ul>
        </div>
       
      </nav>
      <div style={containerStyle}>
        <div style={overlayStyle}>

          <div className='flex flex-col text-center py-52 text-black'  >
            {/* <div className='py-3 m-auto border-2 border-white px-8 shadow-2xl' > */}
            <div className='py-3  ' style={glassyDivStyle} >
              <p className='text-sm mb-2 mt-5'>Arrive in style, with our reliable hailing service at your fingertips. </p>
              <p className='text-5xl my-4'>Ride in Confidence</p>
              <div className='my-12 border-2 w-32 h-16 m-auto rounded-2xl bg-white cursor-pointer' onClick={() => navigate('/mode')}>
                <p className='text-xl p-4 font-semibold '>Start</p>

              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home
