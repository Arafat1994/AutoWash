import React from 'react';
import PlansComponent from '../../Components/PlansComponent/PlansComponent';
import PagerHeader from './../../DynmaicComponent/pageHeader/pageHeader';
export default function PricepageComponent()
{
    return(
        <div className='MainPrices'> 
            
                <PagerHeader/>

                <PlansComponent />
                
        </div>
    )
}