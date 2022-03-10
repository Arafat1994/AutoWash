import {  useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux"




export default function UseGetUserTokenHook (){

    const [UserName ,  SetUserName] = useState() ; 
    const TokenId = JSON.parse(localStorage.getItem("UserToken"));
    const UserInfo = useSelector((state)=>state.fetchusersreducer.user);
    useLayoutEffect(()=>{
        if(UserInfo.length >0 )
        {
            SetUserName( UserInfo[0].data.RegFName )
        }
    } , [UserInfo])
   

    

    return {TokenId , UserInfo , UserName }
}