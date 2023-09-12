// import content
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse   justify-center items-center">
        <div className="absolute top-4 right-1 ">
          <h1 className="text-black text-[25px]  sm:text-[40px]  md:pr-4 w-[100px] flex gap-2 sm:justify-center sm:items-center  text ">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-[25px] flex justify-center  md:text-[35px]">
            {hero.title}
          </h2>
          <br />
          <div className="flex justify-end px-8 transition duration-300 transform hover:translate-y-1 hover:scale-110">
            <a
              href="#contact"
              className="btn  hover:bg-dark_primary_1 hover:text-white"
            >
              {hero.btnText}
            </a>
          </div>
          <div className="md:container px-5 pt-14 grid justify-center items-center">
            {" "}
            <p
              data-aos="fade-left"
              className="border-2 border-dark_primary max-w-sm
           p-4 shadow-sm rounded-xl rounded-br-[6rem] sm:min-w-[22rem] leading-7"
            >
              {hero.para}
            </p>
          </div>
          <div className="flex  flex-col gap-10 mt-10 ">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-70 gap-4
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
