// import content
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse   justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full   w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10 px-4"
        >
          <div className="absolute top-4 right-1 ">
            <h1 className="text-[#EAF2FA] text-[25px]  md:pr-4 w-[250px]  text ">
              {hero.firstName}{" "}
              <span className="text-dark_primary">{hero.LastName}</span>
            </h1>
          </div>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-[30px] flex justify-center  md:text-[35px]">
            {hero.title}
          </h2>
          <br />
          <div className="flex justify-end px-8">
            <a href="#contact" className="btn">
              {hero.btnText}
            </a>
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

        {/* sec col */}
        <div className=" sm:h-[30rem] h-[320px]">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
