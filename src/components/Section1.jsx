import React from 'react'
import '../assets/scss/section1.scss'
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Mprimg1 from '../assets/img/mpr-slimg1.png'
import Mprimg2 from '../assets/img/mpr-slimg2.png'
import Mprimg4 from '../assets/img/mpr-slimg4.png'
import BgMvs1 from '../assets/img/bg_mvsimg1.png'
import BgMvs2 from '../assets/img/bg_mvsimg2.png'
import BgMvs3 from '../assets/img/bg_mvsimg3.png'
import BgMvs4 from '../assets/img/bg_mvsimg4.png'
import BgMvs5 from '../assets/img/bg_mvsimg5.png'
import BgMvs6 from '../assets/img/bg_mvsimg6.png'

const Section1 = () => {
  return (
    <div className='Section1Wrap'>
        <div className='section1'>
            <div className='TxtBox'>
                <div className='FtGia'>2022 개정 <br></br> 교육과정 교과서</div>
                <div className='FtGia1'>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</div>
            </div>
            <div className='SlideContainer'>
                    <div className='MprSlide'>
                        <div className='TitBox'>
                            <h5 className='FtOut'>EVENT</h5>
                        </div>
                        <div className='MprSlideBox'>
                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000 }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide className='MprSwiper'>
                                <p>선생님! 아직 티솔루션 회원이 아니신가요?</p>
                                <p>신규 회원가입 이벤트 🎁</p>
                                <img src={Mprimg1}></img></SwiperSlide>
                            <SwiperSlide className='MprSwiper'>
                                <p>마음에 드는 표지 선택하고 상품 받아가세요!</p>
                                <p>표지 좋아요 이벤트 💗</p>
                                <img src={Mprimg2}></img></SwiperSlide>
                            <SwiperSlide className='MprSwiper'>
                                <p>2022 개정 지학사 교과서를 응원해 주세요!</p>
                                <p>응원 이벤트 🍀</p>
                                <img src={Mprimg4}></img></SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                    
                    <div className='MvSlide'>
                        <Swiper
                            modules={[Pagination, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 1000 }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide><img src={BgMvs1} className="RoundedImg"></img></SwiperSlide>
                            <SwiperSlide><img src={BgMvs2} className="RoundedImg"></img></SwiperSlide>
                            <SwiperSlide><img src={BgMvs3} className="RoundedImg"></img></SwiperSlide>
                            <SwiperSlide><img src={BgMvs4} className="RoundedImg"></img></SwiperSlide>
                            <SwiperSlide><img src={BgMvs5} className="RoundedImg"></img></SwiperSlide>
                            <SwiperSlide><img src={BgMvs6} className="RoundedImg"></img></SwiperSlide>
                        </Swiper>
                    </div>
            </div>
            
        
        </div>
    </div>
  )
}

export default Section1
