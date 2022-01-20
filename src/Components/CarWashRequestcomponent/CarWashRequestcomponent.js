import React from "react";
import MainButtonComponent from "../AppointmentButtonComponent/MainButtonComponent";
import './CarWashRequestcomponent.scss' ; 

export default function CarWashRequestcomponent(){
    return(
        <div className="carWashRequest"> 
             <input type="text" placeholder="Enter your name"   className="inputfield" />
             <input type='text' placeholder="Enter your email"  className="inputfield" />
             <input type='text' placeholder="Description" className="inputfield" style={{height:"150px"}}/>
             <MainButtonComponent  child=' Send Request ' font="#E81C2E" back="white" hoverfont="white" hoverback="#202C45" /> 
             
        </div>
    )
}
/*
$mainredcolor : #E81C2E ; 
$mainblackcolor : #202C45 ; 
$WhiteColor : White ;
*/