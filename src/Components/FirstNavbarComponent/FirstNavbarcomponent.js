import React, { useEffect, useState } from 'react';
import './FirstNavbarcomponentstyle.scss';
import data from "./../../Assets/jsonFile/data.json";
import UseMapingdatafromJson from './../../Hooks/CustomHookmapingData';
import AutoWashComp from '../AutoWashComponent/AutoWashComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

export default function FirstNavBar() {

    //let Fnavdata = data[0].FNavbardata;
    //const { dataFromJson } = UseMapingdatafromJson(Fnavdata);
    const data =useSelector((state)=>state.datareducer.data.FNavbardata)
    const [ FavNavData , SetFnavdata] = useState(null)
  useEffect(()=>{
      SetFnavdata(
       
        data?.map((result) => {
            const { id  , mainclassname , imagesrc , headercontent , spancontent} = result ; 
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
  } , [data])


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