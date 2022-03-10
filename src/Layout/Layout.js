import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import BarComponent from '../Components/BarsComponent/BarComponent';
import FirstNavBar from '../Components/FirstNavbarComponent/FirstNavbarcomponent';
import UseGetDataUserInLayoutHook from '../Hooks/GetDataInLayout';
//import { GetData, GetFetchedUser, GetUser } from '../Redux/Actions/Actions';

export default function Layout()
{



    UseGetDataUserInLayoutHook(); 

    
    /*useLayoutEffect(()=>{
        dispatch(GetData("AllData"));
        dispatch(GetUser()) ; 
    },[dispatch])
    

    //const Users =useSelector((state)=>state.fetchusersreducer.users) ;
    //const UserToken = JSON.parse( localStorage.getItem("UserToken")) ; 

    console.log(Users)
    console.log(UserToken) 
    console.log(loggedUser)
    
    /*const loggedUser =Users.filter((user)=>{
        return user.userToken === UserToken ; 
    }) ; */


    /*if(loggedUser && UserToken){
        dispatch(GetFetchedUser(loggedUser))
    } else
    {
        console.log("no Logged ueser here ")
    }*/

    //to gat all the main data 
    //to get all user have inside the system 
  


    return(
        <>
        <div  className='Navbars' style={{position:'fixed', top:0 , zIndex:'20' , width:'100%'}}> 
            <FirstNavBar />
            <BarComponent />    
        </div>
        </>
    )
}