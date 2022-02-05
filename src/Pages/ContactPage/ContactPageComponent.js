import React from 'react';
import ContactComponent from '../../Components/ContactInfoComponent/ContactComponent';
import PagerHeader from './../../DynmaicComponent/pageHeader/pageHeader';
export default function ContactPageComponent()
{
    return(
        <div className='MainContact'> 
            
                <PagerHeader/>
                <ContactComponent />
                
        </div>
    )
}