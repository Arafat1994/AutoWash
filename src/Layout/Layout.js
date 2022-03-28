import React from 'react';

//import { useDispatch, useSelector } from 'react-redux';
import BarComponent from '../Components/BarsComponent/BarComponent';
import FirstNavBar from '../Components/FirstNavbarComponent/FirstNavbarcomponent';
import UseGetDataUserInLayoutHook from '../Hooks/GetDataInLayout';
//import { GetData, GetFetchedUser, GetUser } from '../Redux/Actions/Actions';

export default function Layout()
{

    UseGetDataUserInLayoutHook(); 

    return(
        <>
        <div  className='Navbars' style={{position:'fixed', top:0 , zIndex:'20' , width:'100%'}}> 
            <FirstNavBar />
            <BarComponent />    
        </div>
        </>
    )
}