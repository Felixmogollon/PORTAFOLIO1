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
    <section
      className="bg-bg_light_primary flex justify-center dark:bg-slate-800"
      id="projects"
    >
      <div className="md:container px-5 pt-14 min-h-screen grid  items-center">
        <div>
          <h2 className="title dark:text-white" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4
            className="subtitle text-[20px]  md:text-[35px] dark:text-darkTheme"
            data-aos="fade-down"
          >
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 sm:max-w-[500px] max-w-[280px] drop-shadow-lg self-center "
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl border-[3px]  border-[#FAF9FD] dark:border-darkTheme h-fit dark:bg-slate-900 overflow-hidden"
              >
                <img
                  className="h-full w-full object-cover"
                  src={content.image}
                  alt="..."
                />
                <div className="flex flex-col gap-2 mt-2 ">
                  <h5 className="font-bold font-Poppins p-2 dark:text-white ">
                    {content.title}
                  </h5>
                  <a
                    href={content.link}
                    className="font-bold text-black/70 self-center pb-2 text-center flex justify-center items-center gap-1 dark:text-white"
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
