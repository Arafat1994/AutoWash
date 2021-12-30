
import React from "react";
import { Link } from "react-router-dom";
import './DropDownComponent.scss'

export default function DropDownComponent(props) {


    console.log(props.view)
    console.log(props.dropdownele);

    const ReturnedDropdownMenu = (props.dropdownele).map((result) => {
        return (<Link  key={result.id} to={result.path} className={result.class} > {result.content}  </Link>)
    }
    );


    return (

        <div className="dropdowncomponentcontainer"  >
            {
                ReturnedDropdownMenu
            }
           
        </div>



    )
}

