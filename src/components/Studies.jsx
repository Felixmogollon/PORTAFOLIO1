import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

import "swiper/css/navigation";

import { EffectFlip, Navigation, Pagination } from "swiper";
import { useState } from "react";

const Studies = () => {
  const { Studies } = content;

  return (
    <section>
      <div className="md:container px-2 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Studies.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Studies.subtitle}
        </h4>
        <br />
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="md:h-96 h-[30rem]  min-w-[200px] max-w-3xl p-2"
        >
          {Studies.studies_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={`mySwiper duration-500 bg-bg_light_primary mx-8 border-2 
              p-4 h-full rounded-2xl flex  gap-6
               border-slate-200 md:flex-row flex-col justify-center items-center 
                `}
              >
                <img src={content.img} alt="..." className="h-24 mx-auto" />
                <div>
                  <p className="sm:text-base text-sm text-center">
                    {content.review}
                  </p>
                  <br />
                  <div className="grid justify-center items-center gap-2">
                    <h6 className="text-center ">{content.name}</h6>
                    <h5 className="text-center ">{content.año}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Studies;
