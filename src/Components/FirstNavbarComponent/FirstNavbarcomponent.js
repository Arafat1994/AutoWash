import React, { useEffect, useState } from 'react';
import './FirstNavbarcomponentstyle.scss';
import data from "./../../Assets/jsonFile/data.json";
import UseMapingdatafromJson from './../../Hooks/CustomHookmapingData';
import AutoWashComp from '../AutoWashComponent/AutoWashComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import image from './../../Assets/images/mail.png' ; 

export default function FirstNavBar() {
    

    let Fnavdata = data[0].FNavbardata;
    const { dataFromJson } = UseMapingdatafromJson(Fnavdata);
    const [ FavNavData , SetFnavdata] = useState(null)
  useEffect(()=>{
      SetFnavdata(
       
        dataFromJson?.map((result) => {
            const { id  , mainclassname , imagesrc , altimage , headercontent , spancontent} = result ; 
            return (
                <div key={id} className={mainclassname} >
                    <div className='imagepart'>
                        <FontAwesomeIcon className='icon' icon={imagesrc}  />
                    </div>
                    <div className='textpart'>
                        <p>   {headercontent}  </p>
                        <span>{spancontent} </span>
                    </div>
                </div >
            )
        })

      )
  } , [])


    return (

        <div className='FNavcomponent '>
            <nav className='firstnavcontainer'>
                <AutoWashComp/>
                    {
                        FavNavData
                    }
            </nav>
        </div>
    )
}