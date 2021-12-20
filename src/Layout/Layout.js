import React from 'react';
import BarComponent from '../Components/BarsComponent/BarComponent';
import FirstNavBar from '../Components/FirstNavbarComponent/FirstNavbarcomponent';

export default function Layout()
{
    return(
        <React.Fragment> 
            <FirstNavBar />
            <BarComponent />
            
        
            
        </React.Fragment>
    )
}