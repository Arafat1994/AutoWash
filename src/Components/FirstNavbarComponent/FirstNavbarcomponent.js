import React from 'react';
import './FirstNavbarcomponentstyle.scss';
import data from './../../Assets/jsonFile/data.json';
import UseMapingdatafromJson from './../../Hooks/CustomHookmapingData';






export default function FirstNavBar() {



    //`${ response.imagesrc }` {`${ response.imagesrc }`}

    
    
    let Fnavdata = data[0].FNavbardata;
    
    const { dataFromJson } = UseMapingdatafromJson(Fnavdata);
    const returneddiv = dataFromJson.map((result) => {
        return (

            < div key={result.id} className={result.mainclassname} >
                <div className='imagepart'>
                    <img src={result.imagesrc} alt={result.altimage} />
                </div>
                <div className='textpart'>
                    <p>   {result.headercontent}  </p>
                    <span>{result.spancontent} </span>
                </div>
            </div >

        )

    })

    return (

        <div className='FNavcomponent '>

            <nav className='firstnavcontainer'>

                <div className='ele1'> <a href='/'> <span> Auto </span> Wash </a></div>

                {
                    returneddiv
                }

            </nav>
        </div>
    )
}