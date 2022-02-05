import React from 'react';
import WashingPointcomponent from '../../Components/washingPointcomponent/washingPointcomponent';
import PagerHeader from './../../DynmaicComponent/pageHeader/pageHeader';
export default function WashingPointsPageComponent()
{
    return(
        <div className='MainWashing'> 
            
                <PagerHeader/>
                <WashingPointcomponent />
                
        </div>
    )
}