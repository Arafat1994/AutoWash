import React from 'react';
import FirstNavBar from '../Components/FirstNavbarComponent/FirstNavbarcomponent';
import MenuNavbarcomponent from '../Components/SecondNavbarComponent/MenuNavbarcomponent';
export default function Layout()
{
    return(
        <React.Fragment> 
            <FirstNavBar />
            <MenuNavbarcomponent /> 
        </React.Fragment>
    )
}