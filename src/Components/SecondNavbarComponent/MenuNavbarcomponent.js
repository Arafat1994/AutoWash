import React  from 'react';
import { Link } from 'react-router-dom';
import './MenuNavbarcomponent.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
//import DropDownComponent from '../dropDownmenuComponent/Dropdowncomponent';
import Getwidth from '../../Hooks/GetwidthHook';
//import UseViewFunctionHook from '../../Hooks/ViewHook';
import MainButtonComponent from '../AppointmentButtonComponent/MainButtonComponent';

import data from './../../Assets/jsonFile/data.json'
import UseMapingdatafromJson from '../../Hooks/CustomHookmapingData';



export default function MenuNavbarcomponent(props) {

    //const { view, viewfunction } = UseViewFunctionHook();

    const { Width, AvailHeight } = Getwidth();

    const MainNavcomponentCondition = { height: Width > 820 ? '80px' : AvailHeight + 'px', display: (props.viewMenu || Width > 820) ? 'grid' : 'none' };

    let Mainnavdata = data[0].MainNavbardata;
    const { dataFromJson } = UseMapingdatafromJson(Mainnavdata);

    /*
    console.log(dataFromJson[0].DropdownView);

    const [active, setActive] = useState();

    function gettingid(event) {
        event.stopPropagation();
        let id = event.target.id;
    }
     
    */
    const returneddiv = dataFromJson.map((result) => {
        return (
            <div key={result.id} >
                <Link to={result.to} className={result.linkclass}  > {result.content}
                    <FontAwesomeIcon icon={faChevronDown} className="icon" style={{ display: result.iconView ? "inline-block" : "none" }} />
                    <div id={result.id} style={{ display: "none" }}  >
                        {
                            // <DropDownComponent view={view} dropdownele={result.DropdownmenuElement} />
                        }
                    </div>

                </Link>
            </div>
        )
    });



    return (

        <div className='MainNavcomponent ' style={MainNavcomponentCondition}  >

            <nav className='menunavbar  '>
                {
                    returneddiv
                }



            </nav>
            <div className='takeappointment '>
                <MainButtonComponent child='Get Appointment' >   </MainButtonComponent>
            </div>

        </div>
    )
}
