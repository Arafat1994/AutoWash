import React from 'react';
import OurArticlesComponent from '../../Components/OurArticlesComponet/OurArticlesComponet';
import PagerHeader from './../../DynmaicComponent/pageHeader/pageHeader';
export default function PagesPagecomponent()
{
    return(
        <div className='MainPages'> 
            
                <PagerHeader/>
                <OurArticlesComponent />
                
        </div>
    )
}