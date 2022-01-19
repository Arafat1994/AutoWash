import React from 'react';
import BarComponent from '../Components/BarsComponent/BarComponent';
import FirstNavBar from '../Components/FirstNavbarComponent/FirstNavbarcomponent';

export default function Layout()
{
    return(
        <>
        <div className='Navbars' style={{position:'fixed', top:0 , zIndex:'20' , width:'100%'}}> 
            <FirstNavBar />
            <BarComponent />    
        </div>
        </>
    )
}