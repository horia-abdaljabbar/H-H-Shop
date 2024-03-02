import React from "react";
import style from "./Hero.module.css";
// import { Navigation, Pagination, A11y } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

function HeroSwiper() {
  return (
    <>
    <div className={style.hero}>
<h1>welcome</h1>
    </div>
    </>
   // <div>
    //   <Swiper
    //     className={style.heroSwiper}
    //     // install Swiper modules

    //     modules={[Navigation, Pagination, A11y]}
    //     slidesPerView={1}
        
    //     navigation
    //     pagination={{ clickable: true }}
    //     onSwiper={(swiper) => console.log(swiper)}
    //     onSlideChange={() => console.log("slide change")} 
    //   >
    //     <SwiperSlide>
    //       <img src="src/assets/images/hero/img2.jpg" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="src/assets/images/hero/img2.jpg" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="src/assets/images/hero/img2.jpg" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="src/assets/images/hero/img2.jpg" />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="src/assets/images/hero/img2.jpg" />
    //     </SwiperSlide>
         
    //   </Swiper>
    // </div>
  );
}

export default HeroSwiper;
