import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuNavbarcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DropDownComponent from '../dropDownmenuComponent/Dropdowncomponent';
import Getwidth from '../../Hooks/GetwidthHook';
import MainButtonComponent from '../AppointmentButtonComponent/MainButtonComponent';

import data from './../../Assets/jsonFile/data.json'
import UseMapingdatafromJson from '../../Hooks/CustomHookmapingData';
import UseViewFunctionHook from '../../Hooks/ViewHook';



export default function MenuNavbarcomponent(props) {

    const [hoverelmet, sethoveredele] = useState(0);
    const {view , viewfunction } =UseViewFunctionHook()
    const { Width, AvailHeight } = Getwidth();

    const MainNavcomponentCondition = { height: Width > 820 ? '80px' : AvailHeight + 'px', display: (props.viewMenu || Width > 820) ? 'grid' : 'none' };

    let Mainnavdata = data[0].MainNavbardata;
    const { dataFromJson } = UseMapingdatafromJson(Mainnavdata);


   
    const gethoveredfunction = (event) => {
        if(!view) { viewfunction() ; sethoveredele(event.target.id)}
        else{ viewfunction()} 
    }

   

    const returneddiv = dataFromJson.map((result) => {
        return (
            <div key={result.id}  >
                <Link id={result.id} to={result.to} className={result.linkclass} onMouseEnter={ gethoveredfunction} onMouseLeave={gethoveredfunction}  > {result.content}
                    <FontAwesomeIcon icon={faChevronDown} className="icon" style={{ display: result.iconView ? "inline-block" : "none" }} />
                    <div style={{display:view ? 'block' : 'none' }}>
                        <DropDownComponent  dropdownele={result.id === Number(hoverelmet) ? result.DropdownmenuElement : null} />
                    </div>
                    

                </Link>
            </div>
        )
    });



    return (

        <div className='MainNavcomponent ' style={MainNavcomponentCondition}  >

            <nav className='menunavbar  '>
                {
                    returneddiv
                }



            </nav>
            <div className='takeappointment '>
                <MainButtonComponent child='Get Appointment' >   </MainButtonComponent>
            </div>

        </div>
    )
}
