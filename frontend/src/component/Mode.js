import React, { useState, useRef, useContext } from 'react';
import logo1 from '../assets/back2.jpg';
import logo2 from '../assets/back2.jpg';

import SetupContext from '../Context/SetupContext';
import { useNavigate } from 'react-router-dom'

function Mode() {

    const radioRef = useRef(null);

    const context = useContext(SetupContext)
    const { mode, setMode } = context
    const navigate = useNavigate()

    const handleDivClick = () => {
        if (radioRef.current) {
            radioRef.current.click();
            setMode(radioRef.current.value);
        }
    };

    const handleRadioChange = (event) => {
        setMode(event.target.value);
        console.log(mode);
    };

    const handleStart = () => {
        if (mode === 'personal') {
          navigate('/number');
        } else if (mode === 'safe') {
          navigate('/inDrive');
        }
      };

    

    return (
        <div className=' bg-yellow-400 py-40'  >
            <div className='my-5 text-xl  md:mx-32'>
                <p className='font-bold text-black text-center md:text-3xl py-2'>Mode of ride</p>
               
            </div>
            <div className='shadow-lg flex flex-col justify-center md:mx-32'>
                <div className='md:my-5'>
                    <p className='text-center my-2 text-base font-bold'>
                        Select <span className='text-white'>Normal</span> or{' '}
                        <span className='text-white'>Safe</span>
                    </p>
                    <p className='text-center my-2 text-sm'>
                       Choose your mode?
                    </p>
                </div>
                <div className='flex justify-center mx-5 flex-col md:flex-row md:my-10'>
                    <div className='border-2 mx-2 px-2 bg-[#F7FAFC] rounded-lg my-2 ' onClick={handleDivClick}>
                        <div className='flex justify-between' >
                            <div className='my-2'>
                                <img className='object-scale-down w-16 md:w-24' alt='' />
                            </div>
                            <div>
                                <input
                                    ref={radioRef}
                                    className='my-4'
                                    type='radio'
                                    value='safe'
                                    checked={mode === 'safe'}
                                    onChange={handleRadioChange}
                                />
                            </div>
                        </div>
                        <div className='my-3'>
                            <p>Normal</p>
                            <p className='my-2 text-sm pr-3'>
                               No feature. Same as normal Hailing Service have.
                            </p>
                        </div>
                    </div>
                    <div className='border-2 mx-2 px-2 bg-[#F7FAFC] rounded-lg my-2'>
                        <div className='flex justify-between' onClick={handleDivClick}>
                            <div className='my-2'>
                                <img className='object-scale-down w-14 md:w-20' alt='' />
                            </div>
                            <div>
                                <input
                                    ref={radioRef}
                                    className='my-4'
                                    type='radio'
                                    value='personal'
                                    checked={mode === 'personal'}
                                    onChange={handleRadioChange}
                                />
                            </div>
                        </div>
                        <div className='my-3'>
                            <p>Safe</p>
                            <p className='my-2 text-sm pr-3'>
                                Secure your drive by enabling safty feature.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center text-center md:my-6'>
                    <button className='bg-black  w-28 rounded-lg m-auto text-white md:w-40 md:h-14 text-lg font-bold ' onClick={handleStart}>
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Mode;
