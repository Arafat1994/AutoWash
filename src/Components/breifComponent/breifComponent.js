import React, { useState } from 'react';
import './breifComponent.scss'
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import data from './../../Assets/jsonFile/data.json';
import { useLayoutEffect } from 'react';
import MainButtonComponent from '../AppointmentButtonComponent/MainButtonComponent';


export default function BreifComponent(props) {

    const [divAbout, SetdivAbout] = useState();

    const dataFromJson = data[0].AboutBreifComponent;
    useLayoutEffect(() => {
        const div = dataFromJson.map((res) => {
            return (
                <div className="BreifComponent" key={res.id}>
                    <div className='Beifimage'>
                        <img src={res.imageSrc} alt="beifimage" />
                    </div>
                    <div className='breiftext'>
                        <TitleOfComponent title={res.title} header={res.header} dirction="left" />
                        <div className='Details'> <p>{res.details}</p> </div>
                        <div className='AboutService'>
                            {
                                (res.Aboutservice).map((res) => {
                                    return (
                                        <div key={res.id} className='Aboutserviceelement'> <FontAwesomeIcon icon='check-circle' className="icon" /> <p> {res.servicename} </p></div>
                                    )
                                })
                            }

                        </div>
                        <div>
                            <MainButtonComponent child={res.buttonchild} font='#202C45' back='#E81C2E' hoverback='#202C45' hoverfont='white' />
                        </div>
                    </div>
                </div>
            )
        })
        SetdivAbout(div);

    }, [dataFromJson])


    return (
        <>
            {
                divAbout
            }
        </>


    )
}