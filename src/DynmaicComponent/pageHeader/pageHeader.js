import React  from "react";
import { useLocation } from "react-router-dom";
import './PageHeader.scss'
export default function PagerHeader(props){
    const location= useLocation();
    const PathName =location.pathname.slice(1) 
    //console.log(location)

    //console.log(typeof(location.pathname))
    return(
        <div className="HeaderContainer"> 
        <p>
            {PathName} 
        </p>
        <p> 
            AutoWash / { PathName}
        </p>
        </div>
    )

}