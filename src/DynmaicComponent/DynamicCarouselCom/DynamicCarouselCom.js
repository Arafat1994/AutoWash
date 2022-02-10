import './DynamicCarouselCom.scss';
import React from 'react';

/*
import image1 from './../../Assets/images/team-1.jpg';
import image2 from './../../Assets/images/team-2.jpg';
import image3 from './../../Assets/images/team-3.jpg';
import image4 from './../../Assets/images/team-4.jpg';
*/

import { Swiper } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
SwiperCore.use([EffectFade, Autoplay, Navigation, Pagination]);



export default function DynamicCarouselComponent(props) {

    /*const returneddiv = props.data.map((res) => {
        return (
            <SwiperSlide className="swiperslide" key={res.id}>
                <div className='swiperelemet' >
                    <img src={res.srcImage} alt='testi' />
                    <div className='rightdetails'>
                        <p className='name'> {res.clientName}   </p>
                        <p className='title'> {res.clienTitle}  </p>
                        <p className='comment'>{res.clientComment}  </p>
                    </div>
                </div>
            </SwiperSlide>
        )
    })*/

    //console.log(image1, image2, image3, image4)

    const { child ,breakpointsviewNum } =props ; 
    return (
        <Swiper autoplay={{ delay: 3000 }} navigation={true} pagination={true} breakpoints={breakpointsviewNum} loop={true} >
           {
               child
           }
        </Swiper>
    )
}