import React from 'react';
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
import './PlansComponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainButtonComponent from '../AppointmentButtonComponent/MainButtonComponent';
import data from './../../Assets/jsonFile/data.json'

export default function PlansComponent() {


    const returneddata = data[0].PlansData;
    const returneddiv = returneddata.map((res) => {
        return (
            <div className='plansdiv' key={res.id}>
                <div className='titlePrice'>
                    <p className='title'> {res.title}  </p>
                    <p className='price'> {res.price} $  </p>
                </div>
                <div className='planservice' >
                    {res.service.map((res) => {
                        return (
                            <p key={res.id}>
                                <FontAwesomeIcon className='icon' icon={res.availability ? "check-circle" : "times-circle"} style={{ color: !res.availability ? "gray" : "#E81C2E" }} />
                                <span> {res.servicename} </span>
                            </p>
                        )
                    })}
                </div>
                <MainButtonComponent child='Book Now' font='#202C45' back='#E81C2E' hoverback='#202C45' hoverfont='white' />
            </div>
        )

    })



    return (
        <div className='PlanComponent'>
            <TitleOfComponent dirction="center" title="Washing Plans ?" header="Choose your Plan" />
            <div className='PlansContainer'>
                {returneddiv}
            </div>

        </div>
    )
}