import React, { useEffect, useState } from 'react';
import './FirstNavbarcomponentstyle.scss';
import AutoWashComp from '../AutoWashComponent/AutoWashComp';
import { useSelector } from 'react-redux';
//import image from './../../Assets/images/mail.png' ; 

export default function FirstNavBar() {

    //let Fnavdata = data[0].FNavbardata;
    //const { dataFromJson } = UseMapingdatafromJson(Fnavdata);
    const data = useSelector((state) => state.datareducer.data.FNavbardata);
    const [FNavBar, setFNavbar] = useState(null)
    

    useEffect(() => {
        //console.log(data)
        setFNavbar(
            data?.map((result) => {
                const { id, mainclassname, imagesrc, altimage, headercontent, spancontent } = result;
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
        )
    }, [data])


    return (

        <div className='FNavcomponent '>
            <nav className='firstnavcontainer'>
                <AutoWashComp />
                {
                    FNavBar
                }
            </nav>
        </div>
    )
}