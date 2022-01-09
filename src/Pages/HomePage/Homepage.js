import React from 'react' ; 
import CarouselEle from '../../Components/CarouselComponent/CarouselComponent';
import Getwidth from './../../Hooks/GetwidthHook' ; 
import data from './../../Assets/jsonFile/data.json';

export default function HomePage()
{
    let carouseldatafromJson = data[0].CarouselData;
    const carouselview = 1 ;
    const {Width}=Getwidth();
    return(
        <div> 
            <CarouselEle carouselview={carouselview}  carouseldata={carouseldatafromJson}/>
            {//<CarouselComponent /> 
            }
            <div> home page  {Width} </div>

        </div>
    )
}