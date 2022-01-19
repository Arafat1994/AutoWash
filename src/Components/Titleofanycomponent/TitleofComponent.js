import React from "react";
import './TitleofComponent.scss'

export default function TitleOfComponent(props){


    //document.documentElement.style.setProperty("--textalignele" , props.dirction) ; 
    //console.log(props.dirction)
    return(
        <div className="componenttitle" style={{textAlign:props.dirction}}>
            <div className="title">
               {props.title}
            </div>  
            <div className="titleHeader">
                {props.header}
            </div>
                
            
            
        </div>
    )
}