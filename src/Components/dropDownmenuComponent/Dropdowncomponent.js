
import React from "react";
import { Link } from "react-router-dom";
import './DropDownComponent.scss'

export default function DropDownComponent(props)

{
  
    console.log(props.view)
   

    return( 
        
        <div className="dropdowncomponentcontainer"  style={{display : props.view ? 'block' : 'none'}} > 
            <Link to='/BlogGrid'  className="DropDownlink" > Blog Grid  </Link>
            <Link to='/DetailPage' className="DropDownlink"> Detail Page  </Link>
            <Link to='/TeamMember' className="DropDownlink"> Team Member  </Link>
            <Link to='/SchduleBooking' className="DropDownlink"> Schdule Booking </Link>
        </div>
    )
}

