import React, { useState } from 'react';
import './BarComponent.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuNavbarcomponent from '../SecondNavbarComponent/MenuNavbarcomponent';
export default function BarComponent(props) {

    const [viewMenu, setviewMenu] = useState(false);

    function ViewMenufunction() {
        (!viewMenu) ? setviewMenu(true) : setviewMenu(false)
    }


    console.log(' ele ' +  viewMenu ) ; 
return (
    <React.Fragment>
        <div className='BarComponent'>
            <div className='MenuSide'>
                <p> Menu </p>
            </div>
            <div className='BarSide' onClick={ViewMenufunction} >
                <FontAwesomeIcon icon={faBars} className='icon' />
            </div>
        </div>

        <MenuNavbarcomponent viewMenu={viewMenu}  />
    </React.Fragment>
)
    }