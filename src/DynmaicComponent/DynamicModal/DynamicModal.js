import React, { useEffect } from 'react'
import MainButtonComponent from '../AppointmentButtonComponent/MainButtonComponent';
import './DynamicModal.scss'

export default function DynamicModal({ header, message , closeModalFun }) {

    useEffect(() => {
        document.body.style.overflowY = "hidden"
    }, [])

    

    return (
        <div className='modalContainer' >
            <div className='modalMessage'>
                <div className='modalElement'>

                    <p className='header'>
                        {header}
                    </p>
                    <p className='message'>
                        {message}
                    </p>

                    <div className='buttons'>
                        <MainButtonComponent onclick={closeModalFun} child="Okay" font="white" width="100px" back="#E81C2E" hoverfont="#E81C2E" hoverback="white" />   
                    </div>
                </div>
            </div>
        </div>
    )
}
