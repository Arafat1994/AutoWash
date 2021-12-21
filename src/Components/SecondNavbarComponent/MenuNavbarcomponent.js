import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MenuNavbarcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DropDownComponent from '../dropDownmenuComponent/Dropdowncomponent';
import Getwidth from '../../Hooks/GetwidthHook';
import ViewFunctionHook from '../../Hooks/ViewHook';
//import  {} from './../dropDownmenuComponent/Dropdowncomponent' ;

export default function MenuNavbarcomponent(props) {

    //var [view, setview] = useState(false);
    const {view , viewfunction} = ViewFunctionHook() ;
    const { Width, AvailHeight } = Getwidth();

    //function viewfunction() { !view ? setview(true) : setview(false); }
    const MainNavcomponentCondition ={ height: Width > 820 ? '80px' : AvailHeight + 'px', display: (props.viewMenu || Width > 820) ? 'grid' : 'none'}  ; 
    
    //console.log(Width, AvailHeight);


    return (

        <div className='MainNavcomponent' style={MainNavcomponentCondition} >

            <nav className='menunavbar '>

                <div><NavLink to='/AutoWash' className='menunavbarlink activelink'> Home  </NavLink></div>
                <div> <Link to='/About' className='menunavbarlink'> About </Link> </div>
                <div> <Link to='/Service' className='menunavbarlink'> Service  </Link> </div>
                <div> <Link to='/Price' className='menunavbarlink'> Price  </Link> </div>
                <div> <Link to='/WashingPoints' className='menunavbarlink' > Washing Point  </Link></div>
                <div >
                    <Link to='/Pages' className='menunavbarlink ' onMouseOver={viewfunction} onMouseOut={viewfunction} > Pages <FontAwesomeIcon icon={faChevronDown} className='icon' /> </Link>
                    <div onMouseOver={viewfunction} onMouseOut={viewfunction}><DropDownComponent view={view} />   </div>
                </div>
                <div> <Link to='/Contact' className='menunavbarlink'> Contact  </Link> </div>
            </nav>
            <div className='takeappointment'>
                <p> left bar   </p>
            </div>

        </div>
    )
}
