import React from 'react'
import { useNavigate } from 'react-router-dom'



function InDrive() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='py-60 bg-yellow-400'>
                <p className='text-center text-7xl font-bold text-black'>You already have this feature</p>
                <p className='text-center text-xl py-3 text-black'>"You should choose safe mode"</p>
                <div className='w-40 mt-20 m-auto h-20 p-6 bg-black rounded-xl cursor-pointer' onClick={()=>{navigate('/mode')}}>
                    <p className='text-center text-xl font-bold text-white'>Mode</p>
                </div>
            </div>
        </div>
    )
}

export default InDrive
