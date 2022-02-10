
import React, { useEffect, useState } from "react";
import { SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import './CarouselComponent.scss';
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import MainButtonComponent from './../../DynmaicComponent/AppointmentButtonComponent/MainButtonComponent.js';
import DynamicCarouselComponent from './../../DynmaicComponent/DynamicCarouselCom/DynamicCarouselCom.js';



export default function CarouselEle(props) {


    let data = props.carouseldata;
    const [carouseldata, setCarouselData] = useState(null);

    useEffect(() => {
        setCarouselData(data.map((res) => {
            const {id , imgsrc , header , mainheader , firstdetails , seconddtails } = res ; 
            return (
                <SwiperSlide className="swiperslide" key={id}>
                    <img src={imgsrc} alt="img" />
                    <div className="carousel-div">
                        <p className="header">  {header}  </p>
                        <p className="main-header"> {mainheader} </p>
                        <div className="Some-details" > <p>{firstdetails}</p> <p>{seconddtails}</p></div>
                        <MainButtonComponent child='Explore More' font='#202C45' back='#E81C2E' hoverback='#202C45' hoverfont='white' />
                    </div>
                </SwiperSlide>
            )
        })
        )

    }, [data]);

    const breakpointsview = {

        1400: { width: 600, slidesPerView: 1 }
    }

    return (
        <div className="swiper">

            <DynamicCarouselComponent data={data} breakpointsviewNum={breakpointsview} child={carouseldata} />

            {
            /*
            <Swiper className="swiper" slidesPerView={props.carouselview} autoplay={{ delay: 3000 }} navigation={true} pagination={true}>
                {
                    carouseldata
                }
            </Swiper>
            */
            }

        </div>

    )

}


/*


import React from 'react';
import "./CarouselComponent.scss"
/*import carousel1 from './../../Assets/images/carousel-1.jpg';
import carousel2 from './../../Assets/images/carousel-2.jpg';
import carousel3 from './../../Assets/images/carousel-3.jpg';
import MainButtonComponent from '../AppointmentButtonComponent/MainButtonComponent';

export default function CarouselComponent() {
/*
    const carouselimages = [carousel1, carousel1, carousel2, carousel3];
    let index = 0
    const [activeCarousel, setActiveCarousel] = useState(carouselimages[index]);
    useEffect(() => {
        function activeCarouselfun() {
            setInterval(() => {
                //setActiveCarousel(carouselimages[index]); 
                if (index < carouselimages.length - 1) { index++; setActiveCarousel(carouselimages[index]); }
                else { index = 0; }
            }, 2500);
        }
        //activeCarouselfun()

    }, [])







    return (
        <div className='CarouselContainer '>
            <div className='Carousel'>
                <div className='CarouselImage'>
                    <img src={carousel1} alt="carousel1" className='carsoulimage' />
                </div>
                <div className='carouseltext'>
                    <p className='header1 '>  Washing & Detailing  </p>
                    <h1 className='mainHeader  '>  Keeh1 Your Car Newer </h1>
                    <p className='someDetails  '>Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac</p>
                    <MainButtonComponent child='Explore More ' >   </MainButtonComponent>
                    
                </div>

            </div>


        </div>
    )
    

    return(
        <div> 
            no data
            </div>
    )
}
*/