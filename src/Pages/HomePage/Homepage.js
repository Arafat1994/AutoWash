import React from 'react' ; 
import CarouselComponent from '../../Components/CarouselComponent/CarouselComponent';
import Getwidth from './../../Hooks/GetwidthHook' ; 
export default function HomePage()
{

    const {Width}=Getwidth();
    return(
        <div> 
            
            {//<CarouselComponent /> 
            }
            <div> home page  {Width} </div>

        </div>
    )
}