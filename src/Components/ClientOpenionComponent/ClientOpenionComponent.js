import './ClientOpenionComponent.scss';
import React, { useLayoutEffect, useState } from 'react';
import TitleOfComponent from '../Titleofanycomponent/TitleofComponent';
import DynamicCarouselComponent from './../../DynmaicComponent/DynamicCarouselCom/DynamicCarouselCom';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import { getMainDataSelectr } from '../../Selectors/MainSelector';

export default function ClientOpenionComponent() {

    ///const carouselData = data[0].clientCarouseldata;
    const {clientCarouseldata} = useSelector(getMainDataSelectr) ; 
    const [ClientOpenionData, SetClientOpenionData] = useState(null);

    useLayoutEffect(()=>{
        SetClientOpenionData(
            clientCarouseldata?.map((res) => {
                const { id , srcImage , clientName , clienTitle , clientComment} = res ; 
                return (
                    <SwiperSlide className="swiperslide" key={id} >
                        <div className='swiperelemet'  >
                            <img src={require('./../../Assets/images'+srcImage).default} alt='testi' />
                            <div className='rightdetails'>
                                <p className='name'> {clientName}   </p>
                                <p className='title'> {clienTitle}  </p>
                                <p className='comment'>{clientComment}  </p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })

        )
    },[clientCarouseldata])


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
                <DynamicCarouselComponent data={clientCarouseldata} breakpointsviewNum={breakpointsview} child={ClientOpenionData} />
            </div>
        </div>
    )
} 