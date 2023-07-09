import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SetupContext from '../Context/SetupContext';
import CountdownTimer from './Clock';

import home from '../assets/reached1.png'

function Final() {


    const [otp, setOTP] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate()
    const context = useContext(SetupContext)
    const { number } = context




    useEffect(() => {
        let timeout;

        if (!otp) {
            timeout = setTimeout(() => {
                setShowAlert(true);
            }, 120000);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [otp]);

    const handleOTPChange = (event) => {
        setOTP(event.target.value);
        setShowAlert(false);
    };

    const handleConfirmClick = () => {
        fetch('http://localhost:3000/verify-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    console.log('OTP verified successfully');
                    navigate('/over')
                    setShowAlert(false);
                    setOTP('');
                    clearTimeout();
                    const timeout = setTimeout(() => {
                        alert('Everything fine');
                    }, 120000);
                    return () => {
                        clearTimeout(timeout);
                    };

                } else {
                    console.log('OTP verification failed');
                    setOTP('');
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 120000);
                    alert('Not approved');
                }
            })
            .catch((error) => {
                console.error('Error verifying OTP', error);
            });



        // if (otp === '1234') { 
        //     navigate('/over')
        //     setShowAlert(false);
        //     setOTP('');
        //     clearTimeout();
        //     const timeout = setTimeout(() => {
        //         alert('Everything fine');
        //     }, 120000);
        //     return () => {
        //         clearTimeout(timeout);
        //     };

        // } else {
        //     setOTP('');
        //     setShowAlert(true);
        //     setTimeout(() => {
        //         setShowAlert(false);
        //     }, 120000);
        //     alert('Not approved');
        // }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/caution');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({ recipient: '+91' + number }));
            alert('Everything fine');
        }, 60000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);



    return (
        // <div>
        //     <p>Destination Reach</p>
        //     <form onSubmit={handleSubmit}>
        //         <div className='flex flex-col w-40 bg-yellow-300 m-auto rounded-xl my-40'>
        //             <label className='text-center ' htmlFor="">OTP</label>
        //             <input className='mx-4 my-4' type="number" value={otp} onChange={handleChange} />
        //             <button type='submit' className='p-1 bg-red-400 rounded-lg m-3'>Confirm</button>
        //         </div>
        //     </form>
        // </div>




        // <div>
        //     <input type="text" value={otp} onChange={handleOTPChange} />
        //     {showAlert && <div>{otp === '1234' ? 'Not approved' : 'OTP confirmation time exceeded. Please try again.'}</div>}
        //     <button onClick={handleConfirmClick}>Confirm</button>
        // </div>


        <div className='bg-yellow-400 py-28'>

            <p className='text-3xl text-center'>Journey end !</p>

            <div className='bg-yellow-100 w-2/3   m-auto p-4 my-10 drop-shadow-lg'>
                <p className='text-center text-2xl md:text-5xl py-5 font-semibold'>Confirm, you Reached?</p>
                <div className='flex flex-col md:flex-row m-2'>
                    <div className='md:w-1/2'>
                        <img className='object-scale-down ' src={home} alt="" />
                    </div>
                    <div className='flex flex-col mx-2 md:w-1/2 md:ml-5 my-4'>
                            <label>OTP</label>
                            <input className=' h-8 md:mr-20 my-1 ' type="text" value={otp} onChange={handleOTPChange} /> <br />
                            <CountdownTimer/>
                            {/* {showAlert && <div>{otp === '1234' ? 'Not approved' : 'OTP confirmation time exceeded. Please try again.'}</div>} */}
                            <button className='bg-red-600 h-8 w-1/3 md:mr-20 my-5 text-lg text-white' onClick={handleConfirmClick}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Final
