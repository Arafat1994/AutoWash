import React, { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import BarComponent from '../Components/BarsComponent/BarComponent';
import FirstNavBar from '../Components/FirstNavbarComponent/FirstNavbarcomponent';
import { GetData } from '../Redux/Actions/Actions';

export default function Layout()
{
    const dispatch = useDispatch()
    
    //to gat all the main data 
    useLayoutEffect(()=>{
        dispatch(GetData("AllData"))
    },[dispatch])


    return(
        <>
        <div  className='Navbars' style={{position:'fixed', top:0 , zIndex:'20' , width:'100%'}}> 
            <FirstNavBar />
            <BarComponent />    
        </div>
        </>
    )
}