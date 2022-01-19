import React from 'react' ; 
import CarouselEle from '../../Components/CarouselComponent/CarouselComponent';
import Getwidth from './../../Hooks/GetwidthHook' ; 
import data from './../../Assets/jsonFile/data.json';
import NumbersComponent from '../../Components/NumbersComponent/NumbersComponent';
//import Spinnerloadingcomponent from '../../Components/Spinnerloading/Spinnerloading';
import BreifComponent from '../../Components/breifComponent/breifComponent';
import WhatwedoComponent from '../../Components/WhatwedoComponent/WhatwedoComponent';
import PlansComponent from '../../Components/PlansComponent/PlansComponent';

export default function HomePage()
{
    let carouseldatafromJson = data[0].CarouselData;
    const carouselview = 1 ;
    const {Width}=Getwidth();
    return(
        <div className='MainHomepage'> 

            <CarouselEle carouselview={carouselview}  carouseldata={carouseldatafromJson}/>
            <BreifComponent />
            <WhatwedoComponent />
            <NumbersComponent />
            <PlansComponent />
           
            
            <div> home page  {Width} </div>

        </div>
    )
}