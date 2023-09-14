// import content
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;

  return (
    <section
      className="min-h-fit bg-bg_light_primary dark:bg-slate-800"
      id="skills"
    >
      {/* content */}
      <div className="md:container px-8 py-20 ">
        <h2 className="title dark:text-white" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4
          className="subtitle text-[17px]  md:text-[35px] dark:text-darkTheme"
          data-aos="fade-down"
        >
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white 
               relative group w-full flex items-center justify-center
                gap-8 p-5 max-w-[280px] rounded-md border-[3px] border-slate-200 dark:border-darkTheme dark:bg-slate-900"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6 className="dark:text-white">{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
