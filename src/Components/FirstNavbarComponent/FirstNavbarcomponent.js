import React, { useEffect, useState } from 'react';
import './FirstNavbarcomponentstyle.scss';
import AutoWashComp from '../AutoWashComponent/AutoWashComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getMainDataSelectr } from '../../Selectors/MainSelector';

export default function FirstNavBar() {

    //let Fnavdata = data[0].FNavbardata;
    //const { dataFromJson } = UseMapingdatafromJson(Fnavdata);
    const {FNavbardata} = useSelector(getMainDataSelectr) ; 
    const [ FavNavData , SetFnavdata] = useState(null)
  useEffect(()=>{
      SetFnavdata(
       
        FNavbardata?.map((result) => {
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
  } , [FNavbardata])


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