import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Spinnerloading.scss' ;
import AutoWashComp from "../AutoWashComponent/AutoWashComp";

const Spinnerloadingcomponent = () => {
    const height =window.innerHeight; 
    return (
        <div className="fa-3x Spinner" style={{height:height}}>
            <AutoWashComp />
            <FontAwesomeIcon icon="spinner" className="icon fa-spin" />
        </div>
    )
}
export default Spinnerloadingcomponent; 