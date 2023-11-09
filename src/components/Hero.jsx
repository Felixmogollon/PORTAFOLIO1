// import content
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden dark:bg-slate-900 py-8">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse   justify-center items-center">
        <div className="absolute top-20 right-1 ">
          <h1 className="text-black text-[25px] dark:text-white sm:text-[40px]  md:pr-4 w-[100px] flex gap-2 sm:justify-center sm:items-center  text ">
            {hero.firstName}{" "}
            <span className="text-dark_primary dark:text-darkTheme">
              {hero.LastName}
            </span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5 relative top-20" data-aos="fade-down">
          <h2 className="text-[25px] flex justify-center  md:text-[35px] dark:text-white">
            {hero.title}
          </h2>
          <br />
          <div className=" grid justify-center sm:justify-between items-center px-8 gap-8 sm:flex ">
            {/* <a
              href=""
              target="_blank"
              className="btn  dark:hover:bg-darkTheme hover:bg-dark_primary_1 hover:text-white  dark:text-white animate-move infinite"
            >
              Descargar CV
            </a> */}
            <a
              href="#contact"
              className="btn dark:hover:bg-darkTheme hover:bg-dark_primary_1 hover:text-white  dark:text-white "
            >
              {hero.btnText}
            </a>
          </div>
          <div className="md:container px-5 pt-14 grid justify-center items-center">
            <p
              data-aos="fade-left"
              className="border-[3px] border-dark_primary max-w-sm
           p-4 shadow-sm rounded-xl  sm:min-w-[22rem] leading-7 dark:border-darkTheme dark:text-white"
            >
              {hero.para}
            </p>
          </div>
          <div className="flex  flex-col gap-10 mt-10  ">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-70 gap-4
            ${i === 1 && " flex-row-reverse text-right "}  `}
              >
                <h3 className="dark:text-white">{content.count}</h3>
                <p className="dark:text-white">{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
