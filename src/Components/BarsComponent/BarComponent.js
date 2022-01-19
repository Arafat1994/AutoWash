import React from 'react';
import './BarComponent.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuNavbarcomponent from '../SecondNavbarComponent/MenuNavbarcomponent';
import UseViewFunctionHook from "./../../Hooks/ViewHook"
export default function BarComponent(props) {

    const { view: viewMenu, viewfunction: ViewMenufunction } = UseViewFunctionHook();
    //console.log(' ele ' + viewMenu);

    return (
        <React.Fragment>
            <div className='BarComponent'>
                <div className='MenuSide  '>
                    <p className=''> Menu </p>
                </div>
                <div className='BarSide ' onClick={ViewMenufunction} >
                    <FontAwesomeIcon icon="bars" className='icon' />
                </div>
            </div>

            <MenuNavbarcomponent viewMenu={viewMenu} />
        </React.Fragment>
    )
}