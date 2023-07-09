import React, { useState, useEffect, useContext } from 'react';
import SetupContext from '../Context/SetupContext';
import { useNavigate } from 'react-router-dom'

import LoadingBar from './LoadingBar';


import house from '../assets/house.png'
import placeholder from '../assets/placeholder.png'

function Onway() {
    const [showButton, setShowButton] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [message, setMessage] = useState(0)

    const navigate = useNavigate()
    const context = useContext(SetupContext)
    const { number, move, setMove } = context

    useEffect(() => {
        const buttonTimer = setTimeout(() => {
            setShowButton(true);
            setCountdown(15000); // Set countdown to 3 minutes (180,000 milliseconds)
        }, 15000); // Show button after 1 minute (60,000 milliseconds)

        return () => {
            clearTimeout(buttonTimer);
        };
    }, []);

    useEffect(() => {
        let countdownTimer;


        if (showButton && countdown > 0) {
            countdownTimer = setTimeout(() => {
                setMessage(message + 1)
                console.log(message)
                if (message === 2) {
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://localhost:3000/schedule-message');
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({ recipient: '+91' + number }));
                }
                if (message === 3) {
                    setMove(false)
                    alert("Everything Right")
                }

                setShowButton(false);
                setCountdown(0);

            }, 15000); // Show alert after 3 minutes (180,000 milliseconds) of inactivity
        }

        return () => {
            clearTimeout(countdownTimer);
        };
    }, [showButton, countdown]);

    const handleButtonClick = () => {
        setShowButton(false);
        setCountdown(0);
        console.log('click')
    };

    useEffect(() => {
        if (countdown === 0) {
            const buttonTimer = setTimeout(() => {
                setShowButton(true);
                setCountdown(15000); // Set countdown to 3 minutes (180,000 milliseconds)
            }, 15000); // Show button after 1 minute (60,000 milliseconds)

            return () => {
                clearTimeout(buttonTimer);
            };
        }
    }, [countdown]);



    useEffect(() => {
        const delay = 120000;

        const timer = setTimeout(() => {
            const phoneNumber = "%2B91" + number;

            fetch(`http://localhost:3000/generate-otp?phoneNumber=${phoneNumber}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        console.log('OTP generated and sent successfully');
                    } else {
                        console.log('Error generating OTP');
                    }
                })
                .catch((error) => {
                    console.error('Error generating OTP', error);
                });
            navigate('/final')

            console.log('Delayed code executed');
        }, delay);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);


  


    return (
        <div>


            <p className='text-center text-3xl font-semibold py-5'>Ride Start</p>
            <div className='flex justify-between my-40 mx-2'>
                <img className='object-scale-down w-20 float-left' src={placeholder} alt="" />
                <LoadingBar />
                <img className='object-scale-down w-20 float-right' src={house} alt="" />
            </div>

            {showButton && (

                <div className='flex justify-center'>
                    <button className='w-1/3 h-20 p-2 bg bg-yellow-300 text-xl items-center' onClick={handleButtonClick}>
                        {countdown === 0 ? '' : 'Confirm '} <br />
                        <div className='text-sm' >{countdown === 0 ? '' : 'Are you in right path?'}</div>
                    </button>
                    
                </div>
            )}


        </div>
    )
}

export default Onway
