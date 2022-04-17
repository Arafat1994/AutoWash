import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MenuNavbarcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownComponent from '../dropDownmenuComponent/Dropdowncomponent';
import Getwidth from '../../Hooks/GetwidthHook';
import MainButtonComponent from './../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent';
import data from "./../../Assets/jsonFile/data.json";
import UseMapingdatafromJson from './../../Hooks/CustomHookmapingData';
import UseGetUserTokenHook from '../../Hooks/UseGetUserToken';
import DropdownMenuForUser from '../DropdownMenuForUser/DropdownMenuForUser';


export default function MenuNavbarcomponent(props) {

    const { Width, AvailHeight } = Getwidth();
    const navigate = useNavigate();
    const [styleOfMainNavBar, setStyleMainNavBar] = useState({ border: "1px solid green" })
    const { viewMenu } = props;

    let Mainnavdata = data[0].MainNavbardata;
    const { dataFromJson } = UseMapingdatafromJson(Mainnavdata);

    //const data = useSelector((state) => state.datareducer.data.MainNavbardata);
    const [MainNavbar, SetMainNavbar] = useState(null);
    const { UserName } = UseGetUserTokenHook();


    function showmenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const menuid = event.target.id;
        console.log(menuid);
        var element = document.getElementsByClassName("dropdowncomponentcontainer");
        if (element[menuid]?.style.display === "none") {
            for (let i = 0; i < element.length; i++) {
                element[i].style.display = "none";
            }
            element[menuid].style.display = "block";
        }
        else {
            element[menuid].style.display = "none";
        }
    }

    useEffect(() => {
        dataFromJson ?
            SetMainNavbar(
                dataFromJson.map((result) => {
                    const { id, to, content, linkclass, iconView, DropdownmenuElement } = result;
                    return (
                        <div id={id} key={id} className="menuelement" style={{ position: 'relative' }}    >
                            <Link id={id} to={{ pathname: to }} state={content} className={linkclass} > {content} </Link>

                             <i className={iconView?"fa fa-chevron-down dropdownbutton":"fa dropdownbutton"}  id={id} onMouseDown={showmenu}  /> 
                        
                            <DropDownComponent id={id} dropdownele={DropdownmenuElement} />
                        </div>
                    )
                })
            )
            : SetMainNavbar(<div> no data to show  </div>)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useLayoutEffect(() => {
        setStyleMainNavBar({ height: Width > 820 ? '80px' : AvailHeight + 'px', display: (viewMenu || Width > 820) ? 'grid' : 'none' })
    }, [AvailHeight, viewMenu, Width])

    const NavigateFun = () => {
        navigate("/CarWashReq");
    }


    return (

        <div className='MainNavcomponent' style={styleOfMainNavBar}   >

            <nav className='menunavbar'>
                {MainNavbar}
            </nav>

            <DropdownMenuForUser UserName={UserName} />


            <div className='takeappointment '>
                <MainButtonComponent onclick={NavigateFun} child="Get Appointment" font='#202C45' back='White' hoverfont='white' hoverback='#E81C2E'>
                </MainButtonComponent>
            </div>



        </div>


    )
}


/*
const gethoveredfunction = (event) => {
        if (!view) { console.log("hovered") ; viewfunction(); sethoveredele(event.target.id)  ; console.log(event.target.id) ; console.log(view)  }
        else { viewfunction(); sethoveredele(0); console.log(view) }
    }
    
    
    */