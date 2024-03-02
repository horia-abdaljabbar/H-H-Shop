import React from 'react'
import { Navigation,  A11y,Autoplay } from 'swiper/modules';
import { useState ,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  './SwiperCategories.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperCategories() {
  let [categories,setcategories]=useState([]);
  
  const getCatagories=async ()=>{
      const response=await fetch(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10`);
      const data= await response.json();
      setcategories(data.categories);
      console.log(data.categories)

  }
  useEffect(()=>{
      getCatagories();
  },[]);

  return (
    <>
    <div className='container'>
    <h2 className='sectionTitle'>featured categories...</h2>

    </div>
   <Swiper
      // install Swiper modules
      modules={[Navigation, A11y ,Autoplay]}
      spaceBetween={10}
      slidesPerView={5}
      // navigation
      loop={true}
      autoplay={{
          delay: 5000,
          disableOnInteraction: false

      }}
      breakpoints={{
        // when window width is >= 576px
            576: {
              slidesPerView: 2,
            },
        // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
        // when window width is >= 1024px
            1024: {
            
              slidesPerView: 4,
            },
            1280: {
             
              slidesPerView: 5,
            },
          }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
               {categories.map((category) => (
        <SwiperSlide className='d-flex justify-content-center align-items-center ' key={category.id}>
          <img 
            src={category.image.secure_url}
            alt={category.name}
          />
          {/* <a href='#'>more</a> */}
        </SwiperSlide>
      ))}

    </Swiper>
    </>
  )
}

export default SwiperCategories