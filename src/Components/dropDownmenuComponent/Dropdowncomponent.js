
import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './DropDownComponent.scss'

export default function DropDownComponent(props) {

    const navigate = useNavigate(); 
    const [elemet, setelement] = useState(null);

    useLayoutEffect(()=>{
        if (props.dropdownele) {
            setelement((props.dropdownele).map((result) => {
                return (<div key={result.id} onClick={()=>navigate(result.path)} to={result.path} className={result.class} > {result.content}  </div>)
            }
            ))
        }
        else {
            setelement(null)
        }
    
    } ,[props.dropdownele , navigate])

    
    return (

        <div className="dropdowncomponentcontainer"   >
            {
                elemet
            }

        </div>



    )
}

