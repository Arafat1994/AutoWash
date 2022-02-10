import './WorkersComponent.scss';
import React from 'react';
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
//import image1 from './../../Assets/images/team-1.jpg';
//import image2 from './../../Assets/images/team-2.jpg';
//import image3 from './../../Assets/images/team-3.jpg';
//import image4 from './../../Assets/images/team-4.jpg';
import data from './../../Assets/jsonFile/data.json';
import SocialmedialinksComponent from '../../DynmaicComponent/SocialmediaLinksComponent/SocialmedialinksComponent';


export default function WorkersComponent(props) {


    //console.log(image1, image2, image3, image4);
    
    const top='-30px' ; 
    const returneddata = data[0].workersData;
    const returneddiv = returneddata.map((res) => {
        const {id , srcimage , socialmedialinks , name , job }=res ; 
        return (
            <div className='workerelement' key={id}>
                <img src={srcimage} alt='workerimage' />
                <SocialmedialinksComponent  socialmediaLinks={socialmedialinks}  top={top} />
                <div className='detailsdiv'> 
                    <p> {name}  </p>
                    <p> {job}  </p>
                </div>
            </div>
        )
    })

    return (
        <div className='workercontainer'>
            <TitleOfComponent title="Meet Our Team" header=" Our Engineers And Workers " dirction="center" />
            <div className='workersdiv'>
                {
                    returneddiv
                }
            </div>
        </div>
    )
}