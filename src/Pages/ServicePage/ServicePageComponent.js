import React from 'react';
import ClientOpenionComponent from '../../Components/ClientOpenionComponent/ClientOpenionComponent';
import WhatwedoComponent from '../../Components/WhatwedoComponent/WhatwedoComponent';
import PagerHeader from './../../DynmaicComponent/pageHeader/pageHeader';

export default function ServicePageComponent()
{
    return(
        <div className='MainServices'> 
            
                <PagerHeader/>
                <WhatwedoComponent />
                <ClientOpenionComponent />
               
        </div>
    )
}