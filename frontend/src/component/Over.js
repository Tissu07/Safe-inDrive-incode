import React from 'react'
import { useNavigate } from 'react-router-dom'

function Over() {

  const navigate = useNavigate();

  const home = () => {
    navigate('/')
  }

  return (
    <div>
      <div className='py-60 bg-yellow-400'>
        <p className='text-center text-7xl font-bold text-black'>THANKYOU</p>
        <p className='text-center text-xl py-2 text-black'>"Stay safe, Stay healthy"</p>
        <div className='w-40 mt-20 m-auto h-20 p-6 bg-black rounded-xl cursor-pointer' onClick={home}>
          <p className='text-center text-xl font-bold text-white'>Home</p>
        </div>
      </div>



    </div>
  )
}

export default Over
