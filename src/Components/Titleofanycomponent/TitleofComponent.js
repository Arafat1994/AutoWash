import React from "react";
import './TitleofComponent.scss'

export default function TitleOfComponent(props){

    const {dirction , margintop , title , header } = props ; 

    //document.documentElement.style.setProperty("--textalignele" , props.dirction) ; 
    //console.log(props.dirction)
    return(
        <div className="componenttitle" style={{textAlign:dirction , marginTop:margintop}}>
            <div className="title">
               {title}
            </div>  
            <div className="titleHeader">
                {header}
            </div>
        </div>
    )
}