import './WorkersComponent.scss';
import React from 'react';
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
//import image1 from './../../Assets/images/team-1.jpg';
//import image2 from './../../Assets/images/team-2.jpg';
//import image3 from './../../Assets/images/team-3.jpg';
//import image4 from './../../Assets/images/team-4.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from './../../Assets/jsonFile/data.json' ; 


export default function WorkersComponent() {


    //console.log(image1, image2, image3, image4);

    const returneddata = data[0].workersData;
    const returneddiv= returneddata.map((res)=>{
        return(
            <div className='workerelement' key={res.id}>
                    <img  src={res.srcimage} alt='workerimage' />
                    <div className='socialmediadiv'>
                        <a href='/AutoWash' className='socialmedialink'> <FontAwesomeIcon className='icon' icon={["fab", "twitter"]} /> </a>
                        <a href='/AutoWash' className='socialmedialink'> <FontAwesomeIcon className='icon' icon={["fab", "facebook"]} /> </a>
                        <a href='/AutoWash' className='socialmedialink'> <FontAwesomeIcon className='icon' icon={["fab", "linkedin"]} /> </a>
                        <a href='/AutoWash' className='socialmedialink'> <FontAwesomeIcon className='icon' icon={["fab", "instagram"]} /> </a>
                    </div>
                    <div className='detailsdiv'>
                        <p> {res.name}  </p>
                        <p> {res.job}  </p>
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