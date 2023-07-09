import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import SetupContext from '../Context/SetupContext';
import profile from '../assets/profile.jpg'

function RideAvailable() {
    const navigate = useNavigate()
    const context = useContext(SetupContext)
  const { destination, setMove} = context

    const start = () => {
        navigate('/onway')
        setMove(true)
    }

    return (
        <div className='bg-yellow-400 py-3'>
            <div className='flex flex-col w-1/3 bg-gray-100 m-auto  my-40 px-4 py-2 '>
                <div className='m-3'>
                    <img className='rounded-full object-scale-down w-36 m-auto border-2 border-black' src={profile} alt="" />
                    <p className='text-center text-xl my-3'>Hi, i'm Abhishek!</p>

                </div>
                <hr />
                <div className='m-2'>
                 
                    <p>Vehicle no: DL 10A 2587</p>
                    <p>Time take to reach: 2min</p>
                    <p>Price: 500/-</p>
                    <p>Destination: {destination}</p>
                </div>


                <button onClick={start} className='p-1 bg-black font-bold text-xl  m-3 text-white my-5 h-12'>Accept Drive</button>
            </div>


        </div>
    )
}

export default RideAvailable
