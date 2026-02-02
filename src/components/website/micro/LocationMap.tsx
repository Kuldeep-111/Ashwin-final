'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type { Swiper as SwiperType } from 'swiper';
import { GoArrowLeft,GoArrowRight  } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const features = [
  { image: "/images/micro/location/restaurants.png", name: "Restaurants"},
  { image: "/images/micro/location/cafe.png", name: "Cafes & Bars", },
  { image: "/images/micro/location/stores.png", name: "Grocery Stores", },
  { image: "/images/micro/location/cafe.png", name: "Cafes & Bars", },
  { image: "/images/micro/location/stores.png", name: "Grocery Stores", },
];

const data = [
    {title:"Achija Veg Restaurant",distance:"1.5 km"},
    {title:"East Asia",distance:"1.8 km"},
    {title:"Mugshot Kitchen & Bar",distance:"2.5 km"}
]


const LocationMap = () => {
  const [activeTab, setActiveTab] = useState<'eat-drink' | 'transportation' | 'attractions'>('eat-drink');
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="py-[50px] md:py-[100px] bg-[#FEF7F0] border-t border-black">
        <div className=''>

               <h2  data-direction="bottom" className="reveal-text text-center  text-[32px] leading-[50px]  tracking-[1px] font-medium text-[#E37D24] mb-12">
          Step Into Your Exclusive Haven
        </h2>

         <div  data-direction="bottom" className="reveal-text flex justify-center gap-6 mb-16">
          <button
            onClick={() => setActiveTab('eat-drink')}
            className={`px-8 py-3 rounded-md font-bold tracking-widest text-sm border
              ${activeTab === 'eat-drink'
                ? 'bg-[#1B4485] text-white'
                : 'text-[#1B4485] border-[#1B4485]'}`}
          >
           Eat and drink
          </button>

          <button
            onClick={() => setActiveTab('transportation')}
            className={`px-8 py-3 rounded-md font-bold tracking-widest text-sm border
              ${activeTab === 'transportation'
                ? 'bg-[#1B4485] text-white'
                : 'text-[#1B4485] border-[#1B4485]'}`}
          >
           Transportation
          </button>

          <button
            onClick={() => setActiveTab('attractions')}
            className={`px-8 py-3 rounded-md font-bold tracking-widest text-sm border
              ${activeTab === 'attractions'
                ? 'bg-[#1B4485] text-white'
                : 'text-[#1B4485] border-[#1B4485]'}`}
          >
           Attractions
          </button>
        </div>
         <div  data-direction="bottom" className="reveal-text relative max-w-[800px] mx-auto mb-[50px]">

            {/* CENTER ARROWS (FIXED, NOT PER SLIDE) */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-[-10%] top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full text-[#0E4194] flex items-center justify-center"
            >
              <GoArrowLeft size={24} />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-[-10%] top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full text-[#0E4194] flex items-center justify-center"
            >
              <GoArrowRight  size={24} />
            </button>

            <Swiper
              modules={[Navigation]}
              loop
              centeredSlides
              spaceBetween={50}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {features.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center justify-center gap-[10px] px-6">
                    <div className='image'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mx-auto h-[30px] object-contain"
                    />
                    </div>
                    
                        <p className='text-[#0E4194]'>{item.name}</p>
                        <IoIosArrowDown className='text-[#0E4194]'/>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        <div className='w-full relative'>
            <div className='bg-white p-[20px] w-[300px] flex flex-col items-center gap-[20px] absolute top-0 left-[25%]'>
                {data.map((item,index) =>(
                    <div key={index} className='w-full flex justify-between items-center text-black'><span>{item.title}</span> <span>{item.distance}</span></div>
                ))}
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.716561316398!2d72.84200073488769!3d19.207578299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d9129510a1%3A0xae98e7bd01d78422!2sSheth%20Edmont%20Kandivali!5e0!3m2!1sen!2sin!4v1769774277092!5m2!1sen!2sin" width="600" height="500" style={{
              border:0,
              width:"100%"
            }} loading="lazy" ></iframe>
            {/* <img src="/images/micro/location/map.png" alt="map"  className='h-[500px] w-full object-cover'/> */}
        </div>

        </div>
      
    </section>
  )
}

export default LocationMap
