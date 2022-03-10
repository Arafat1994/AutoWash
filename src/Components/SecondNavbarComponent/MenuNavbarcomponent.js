import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MenuNavbarcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownComponent from '../dropDownmenuComponent/Dropdowncomponent';
import Getwidth from '../../Hooks/GetwidthHook';
import MainButtonComponent from './../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';
import UseViewFunctionHook from '../../Hooks/ViewHook';
import data from "./../../Assets/jsonFile/data.json";
import UseMapingdatafromJson from './../../Hooks/CustomHookmapingData';
import UseGetUserTokenHook from '../../Hooks/UseGetUserToken';
import DropdownMenuForUser from '../DropdownMenuForUser/DropdownMenuForUser';


export default function MenuNavbarcomponent(props) {

    const [hoverelmet, sethoveredele] = useState(0);
    const { view, viewfunction } = UseViewFunctionHook()
    const { Width, AvailHeight } = Getwidth();
    const navigate = useNavigate();
    const [styleOfMainNavBar, setStyleMainNavBar] = useState({})
    const { viewMenu } = props;

    let Mainnavdata = data[0].MainNavbardata;
    const { dataFromJson } = UseMapingdatafromJson(Mainnavdata);

    //const data = useSelector((state) => state.datareducer.data.MainNavbardata);
    const [MainNavbar, SetMainNavbar] = useState(null);

    const { UserName } = UseGetUserTokenHook();


    useEffect(() => {
        SetMainNavbar(
            dataFromJson?.map((result) => {
                const { id, to, content, linkclass, iconView, DropdownmenuElement } = result;
                return (
                    <div key={id}  >
                        <Link id={id} to={{ pathname: to }} state={content} className={linkclass} onMouseEnter={gethoveredfunction} onMouseLeave={gethoveredfunction}    > {content}
                            <FontAwesomeIcon icon="chevron-down" className="icon" style={{ display: iconView ? "inline-block" : "none" }} />
                            <DropDownComponent dropdownele={id === Number(hoverelmet) ? DropdownmenuElement : null} />
                        </Link>
                    </div>
                )
            })
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [])

    useLayoutEffect(() => {
        setStyleMainNavBar({ height: Width > 820 ? '80px' : AvailHeight + 'px', display: (viewMenu || Width > 820) ? 'grid' : 'none' })
    }, [AvailHeight, viewMenu, Width])

    const NavigateFun = () => {
        navigate("/CarWashReq");
    }

    const gethoveredfunction = (event) => {
        if (!view) { console.log("hovered") ; viewfunction(); sethoveredele(event.target.id)     }
        else { viewfunction(); sethoveredele(0); }
    }


    return (

        <div className='MainNavcomponent ' style={styleOfMainNavBar}  >

            <nav className='menunavbar '>
                {MainNavbar}
            </nav>
            
            <DropdownMenuForUser UserName={UserName}  />  
            
           
            <div className='takeappointment '>
                <MainButtonComponent onclick={NavigateFun} child="Get Appointment" font='#202C45' back='White' hoverfont='white' hoverback='#E81C2E'>
                </MainButtonComponent>
            </div>



        </div>


    )
}