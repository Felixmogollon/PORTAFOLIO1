import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4
            className="subtitle text-[20px]  md:text-[35px]"
            data-aos="fade-down"
          >
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center  lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 md:max-w-[420px] max-w-[280px] drop-shadow-primary self-center"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl  border-[#FAF9FD] h-fit"
              >
                <img
                  className="h-full w-full object-cover"
                  src={content.image}
                  alt="..."
                />
                <div className="flex flex-col gap-2 mt-2">
                  <h5 className="font-bold font-Poppins p-2">
                    {content.title}
                  </h5>
                  <a
                    href={content.link}
                    className="font-bold text-black/70 self-center pb-2 text-center flex justify-center items-center gap-1"
                    target="_blank"
                  >
                    <i className="bx bx-link-external"></i>
                    Visitame
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
