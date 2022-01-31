import './ClientOpenionComponent.scss';
import React from 'react';
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
import DynamicCarouselComponent from './../../DynmaicComponent/DynamicCarouselCom/DynamicCarouselCom';
import data from './../../Assets/jsonFile/data.json';
import { SwiperSlide } from 'swiper/react';

export default function ClientOpenionComponent() {

    const carouselData = data[0].clientCarouseldata;
    const returneddiv = carouselData.map((res) => {
        return (
            <SwiperSlide className="swiperslide" key={res.id} >
                <div className='swiperelemet'  >
                    <img src={res.srcImage} alt='testi' />
                    <div className='rightdetails'>
                        <p className='name'> {res.clientName}   </p>
                        <p className='title'> {res.clienTitle}  </p>
                        <p className='comment'>{res.clientComment}  </p>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

    const breakpointsview = {
        1200: { width: 1200, slidesPerView: 3 },
        1050: { width: 1050, slidesPerView: 3 },
        820: { width: 820, slidesPerView: 2 },
        600: { width: 600, slidesPerView: 1 }
    }


    return (
        <div className='Clientopenioncontainer'>
            <TitleOfComponent title='Clients Openion ' header="What Does Our Clients Says ? " dirction="center" />
            <div className='Clientopeniondiv'>
                <DynamicCarouselComponent data={carouselData} breakpointsviewNum={breakpointsview} child={returneddiv} />
            </div>
        </div>
    )
} 