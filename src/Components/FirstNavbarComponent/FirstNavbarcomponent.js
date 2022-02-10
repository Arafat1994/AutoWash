import React from 'react';
import './FirstNavbarcomponentstyle.scss';
import data from './../../Assets/jsonFile/data.json';
import UseMapingdatafromJson from './../../Hooks/CustomHookmapingData';
import AutoWashComp from '../AutoWashComponent/AutoWashComp';
//import image from './../../Assets/images/mail.png' ; 

export default function FirstNavBar() {

    let Fnavdata = data[0].FNavbardata;
    const { dataFromJson } = UseMapingdatafromJson(Fnavdata);

    const returneddiv = dataFromJson.map((result) => {
        const { id  , mainclassname , imagesrc , altimage , headercontent , spancontent} = result ; 
        return (
            <div key={id} className={mainclassname} >
                <div className='imagepart'>
                    <img src={imagesrc} alt={altimage} />
                </div>
                <div className='textpart'>
                    <p>   {headercontent}  </p>
                    <span>{spancontent} </span>
                </div>
            </div >
        )
    })

    return (

        <div className='FNavcomponent '>
            <nav className='firstnavcontainer'>
                <AutoWashComp/>
                    {
                        returneddiv
                    }
            </nav>
        </div>
    )
}