import './WorkersComponent.scss';
import React, { useLayoutEffect, useState } from 'react';
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
//import image1 from './../../Assets/images/team-1.jpg';
//import image2 from './../../Assets/images/team-2.jpg';
//import image3 from './../../Assets/images/team-3.jpg';
//import image4 from './../../Assets/images/team-4.jpg';
import SocialmedialinksComponent from '../../DynmaicComponent/SocialmediaLinksComponent/SocialmedialinksComponent';
import { useSelector } from 'react-redux';
import { getMainDataSelectr } from '../../Selectors/MainSelector';


export default function WorkersComponent(props) {


    //console.log(image1, image2, image3, image4);

    const top = '-30px';
    const {workersData}=useSelector(getMainDataSelectr); 
    const [WorkerstData, SetWorkerData]=useState(null);
    useLayoutEffect(() => {
        SetWorkerData(
            workersData?.map((res) => {
                const { id, srcimage, socialmedialinks, name, job } = res;
                return (
                    <div className='workerelement' key={id}>
                        <img src={require('./../../Assets/images'+srcimage).default} alt='workerimage' />
                        <SocialmedialinksComponent socialmediaLinks={socialmedialinks} top={top} />
                        <div className='detailsdiv'>
                            <p> {name}  </p>
                            <p> {job}  </p>
                        </div>
                    </div>
                )
            })
        )
    }, [workersData])



    return (
        <div className='workercontainer'>
            <TitleOfComponent title="Meet Our Team" header=" Our Engineers And Workers " dirction="center" />
            <div className='workersdiv'>
                {
                    WorkerstData
                }
            </div>
        </div>
    )
}