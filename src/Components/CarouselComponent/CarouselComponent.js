import React, { useEffect, useState } from 'react';
import "./CarouselComponent.scss"
import carousel1 from './../../Assets/images/carousel-1.jpg';
import carousel2 from './../../Assets/images/carousel-2.jpg';
import carousel3 from './../../Assets/images/carousel-3.jpg';
import { Carousel } from 'bootstrap';
export default function CarouselComponent() {


    const carouselimages = [carousel1, carousel2, carousel3];
    let index = 0
    const [activeCarousel, setActiveCarousel] = useState(carouselimages[index]);
    useEffect(()=>{
        function activeCarouselfun()
        {
            setInterval(() => {
                if (index < carouselimages.length -1 ) {
                    index++;
                    //console.log(index)
                    setActiveCarousel(carouselimages[index]); 
                }
                else
                {
                    index=0 ;
                    //console.log(index)
                }
        
            }, 5000);
        }
        activeCarouselfun()

    } , [ ])
   






    return (
        <div className='CarouselContainer '>
            <div className='CarouselImage'>

                <img src={activeCarousel} alt="carousel1" className='carsoulimage' />


            </div>
            <div className='carouseltext'>

            </div>


        </div>
    )
}