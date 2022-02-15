import React from 'react';
import './BarComponent.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuNavbarcomponent from '../SecondNavbarComponent/MenuNavbarcomponent';
import UseViewFunctionHook from "./../../Hooks/ViewHook";
import Getwidth from '../../Hooks/GetwidthHook';

export default function BarComponent(props) {

    const { view: viewMenu, viewfunction: ViewMenufunction } = UseViewFunctionHook();
    const { Width } = Getwidth();
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

            {
                viewMenu && Width < 820 ?
                    <button className='close' onClick={ViewMenufunction} > <FontAwesomeIcon icon={{ prefix: "fab", iconName: "xing" }} className='icon' /> </button> :
                    <></>
            }


        </React.Fragment>
    )
}