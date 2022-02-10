import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuNavbarcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownComponent from '../dropDownmenuComponent/Dropdowncomponent';
import Getwidth from '../../Hooks/GetwidthHook';
import MainButtonComponent from './../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';

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
        else{ viewfunction()  ; sethoveredele(0) ;} 
    }

    const returneddiv = dataFromJson.map((result) => {
        const { id , to ,  content , linkclass , iconView ,DropdownmenuElement  } = result ; 
        return (
            <div key={id}  >
                <Link id={id} to={{pathname:to}}  state={content} className={linkclass} onMouseEnter={ gethoveredfunction} onMouseLeave={gethoveredfunction}    > {content}
                    <FontAwesomeIcon icon="chevron-down" className="icon" style={{ display: iconView ? "inline-block" : "none" }} />
                        <DropDownComponent  dropdownele={id === Number(hoverelmet) ? DropdownmenuElement : null} />
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
                <MainButtonComponent to="/CarWashReq" child="Get Appointment" font='#202C45' back='White' hoverfont='white' hoverback='#E81C2E'  >   </MainButtonComponent>
            </div>

        </div>
    )
}