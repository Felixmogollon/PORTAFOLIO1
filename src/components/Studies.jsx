import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Studies = () => {
  const { Studies } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Studies.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Studies.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[45rem]  min-w-[200px] max-w-3xl p-4"
        >
          {Studies.studies_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${
                  activeIndex !== i && "scale-75 blur-sm"
                } grid justify-center items-center md:flex  `}
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
