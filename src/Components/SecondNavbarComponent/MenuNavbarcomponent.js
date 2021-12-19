import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MenuNavbarcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import DropDownComponent from '../dropDownmenuComponent/Dropdowncomponent';
//import  {} from './../dropDownmenuComponent/Dropdowncomponent' ;

export default function MenuNavbarcomponent(props) {

    var [view, setview] = useState(false);

    function viewfunction() {!view ? setview(true) : setview(false) ; }
    return (

        <div className='MainNavcomponent'>
            <nav className='menunavbar '>

                <div><NavLink to='/' className='menunavbarlink activelink'> Home  </NavLink></div>
                <div> <Link to='/About' className='menunavbarlink'> About </Link> </div>
                <div> <Link to='/Service' className='menunavbarlink'> Service  </Link> </div>
                <div> <Link to='/Price' className='menunavbarlink'> Price  </Link> </div>
                <div> <Link to='/WashingPoints' className='menunavbarlink' > Washing Point  </Link></div>
                <div  >
                    <Link to='/Pages' className='menunavbarlink ' onMouseOver={viewfunction} onMouseOut={viewfunction} > Pages <FontAwesomeIcon icon={faChevronDown} className='icon'  /> </Link>
                     <div onMouseOver={viewfunction} onMouseOut={viewfunction}>
                        <DropDownComponent view={view}   />
                    </div>  

                </div>



                <div> <Link to='/Contact' className='menunavbarlink'> Contact  </Link> </div>
            </nav>
            <div className='takeappointment'>
                <p> left bar   </p>
            </div>

        </div>
    )
}
