import React, { useLayoutEffect, useState } from 'react';
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
import './PlansComponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButtonComponent from './../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';
import { useSelector } from 'react-redux';
import { getMainDataSelectr } from '../../Selectors/MainSelector';

export default function PlansComponent() {


    //const returneddata = data[0].PlansData;
    const {PlansData}=useSelector(getMainDataSelectr)
    const [PlansDataDiv , SetPlansData] = useState(null) ; 

    useLayoutEffect(()=>{
        SetPlansData(
            PlansData?.map((res) => {
                const { id , title , price }= res; 
                return (
                    <div className='plansdiv' key={id}>
                        <div className='titlePrice'>
                            <p className='title'> {title}  </p>
                            <p className='price'> {price} $  </p>
                        </div>
                        <div className='planservice' >
                            {res.service.map((res) => {
                                const {id, availability , servicename } = res ; 
                                return (
                                    <p key={id}>
                                        <FontAwesomeIcon className='icon' icon={availability ? "check-circle" : "times-circle"} style={{ color: !availability ? "gray" : "#E81C2E" }} />
                                        <span> {servicename} </span>
                                    </p>
                                )
                            })}
                        </div>
                        <MainButtonComponent child='Book Now' font='#202C45' back='#E81C2E' hoverback='#202C45' hoverfont='white' />
                    </div>
                )
            })
        )
    },[PlansData])
    



    return (
        <div className='PlanComponent'>
            <TitleOfComponent dirction="center" title="Washing Plans ?" header="Choose your Plan" />
            <div className='PlansContainer'>
                {PlansDataDiv}
            </div>

        </div>
    )
}