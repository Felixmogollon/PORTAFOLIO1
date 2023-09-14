import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section className=" dark:bg-slate-900" id="services">
      <div className="md:container px-5 py-20 ">
        <h2 className="title  dark:text-white" data-aos="fade-down">
          {services.title}
        </h2>
        <h4
          className="subtitle text-[20px] md:text-[35px] dark:text-darkTheme"
          data-aos="fade-down"
        >
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300  border-[3px] border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none dark:bg-slate-800 dark:border-darkTheme "
            >
              <img
                src={content.logo}
                alt="..."
                className="mx-auto bg-white/40 p-2 rounded-md"
              />
              <h6 className="my-3 dark:text-white">{content.title}</h6>
              <p className="leading-7 dark:text-white ">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
