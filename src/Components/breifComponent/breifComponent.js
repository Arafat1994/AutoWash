import React, { useState } from 'react';
import './breifComponent.scss'
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect } from 'react';
import MainButtonComponent from './../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';
import { useSelector } from 'react-redux';
import { getMainDataSelectr } from '../../Selectors/MainSelector';



export default function BreifComponent(props) {

    const{AboutBreifComponent}=useSelector(getMainDataSelectr) ; 
   
    const [divAbout, SetdivAbout] = useState();
    useLayoutEffect(() => {

        SetdivAbout(
            AboutBreifComponent?.map((res) => {

                const { id, imageSrc, title, header, details } = res;
                return (
                    <div className="BreifComponent" key={id}>
                        <div className='Beifimage'>
                            <img src={require('./../../Assets/images' + imageSrc).default} alt="beifimage" />
                        </div>
                        <div className='breiftext'>
                            <TitleOfComponent title={title} header={header} dirction="left" margintop="0px" />
                            <div className='Details'> <p>{details}</p> </div>
                            <div className='AboutService'>
                                {
                                    (res.Aboutservice).map((res) => {
                                        const { id, servicename } = res;
                                        return (<div key={id} className='Aboutserviceelement'> <FontAwesomeIcon icon='check-circle' className="icon" /> <p> {servicename} </p></div>
                                        )
                                    })
                                }
                            </div>
                            <MainButtonComponent child={res.buttonchild} font='#202C45' back='#E81C2E' hoverback='#202C45' hoverfont='white' />
                        </div>
                    </div>
                )
            })
        )
    }, [AboutBreifComponent])


    return (
        <>
            {
                divAbout
            }
        </>


    )
}