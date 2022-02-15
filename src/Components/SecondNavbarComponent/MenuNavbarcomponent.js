import React, { useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const { view, viewfunction } = UseViewFunctionHook()
    const { Width, AvailHeight } = Getwidth();
    const navigate = useNavigate();
    const [styleOfMainNavBar, setStyleMainNavBar] = useState({})
    const {viewMenu}=props;
    useLayoutEffect(() => {
        setStyleMainNavBar({ height: Width > 820 ? '80px' : AvailHeight + 'px', display: (viewMenu || Width > 820) ? 'grid' : 'none' })
    }, [AvailHeight, viewMenu, Width])


    let Mainnavdata = data[0].MainNavbardata;
    const { dataFromJson } = UseMapingdatafromJson(Mainnavdata);

    const gethoveredfunction = (event) => {
        if (!view) { viewfunction(); sethoveredele(event.target.id) }
        else { viewfunction(); sethoveredele(0); }
    }

    const returneddiv = dataFromJson.map((result) => {
        const { id, to, content, linkclass, iconView, DropdownmenuElement } = result;
        return (
            <div key={id}  >
                <Link id={id} to={{ pathname: to }} state={content} className={linkclass} onMouseEnter={gethoveredfunction} onMouseLeave={gethoveredfunction}    > {content}
                    <FontAwesomeIcon icon="chevron-down" className="icon" style={{ display: iconView ? "inline-block" : "none" }} />
                    <DropDownComponent dropdownele={id === Number(hoverelmet) ? DropdownmenuElement : null} />
                </Link>
            </div>
        )
    });

    const NavigateFun = () => {
        navigate("/CarWashReq");
    }

    return (

        <div className='MainNavcomponent ' style={styleOfMainNavBar}  >

            <nav className='menunavbar '>
                {returneddiv}
            </nav>

            
            
            <div className='LoginReg'>
                <Link to="/loginReg"> Login/Register </Link>
            </div> 

            <div className='takeappointment '>

                <MainButtonComponent onclick={NavigateFun} child="Get Appointment" font='#202C45' back='White' hoverfont='white' hoverback='#E81C2E'>
                </MainButtonComponent>
                
            </div>



        </div>


    )
}