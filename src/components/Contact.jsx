import { useRef } from "react";
import { content } from "../Content";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            action="https://formsubmit.co/cristian.agudelo1@udea.edu.co"
            method="POST"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Correo"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Mensage"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <></>
            <input
              type="submit"
              value="Send Message"
              className="btn self-start
            bg-white text-dark_primary cursor-pointer"
            />
            <input type="hidden" name="_next" value="http://localhost:5173/" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
          <div className="flex-1 flex flex-col gap-5 ">
            <div className="flex md:grid md:gap-8 items-center gap-8">
              <a
                href="https://www.facebook.com/Cristian.Agudelo09?mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="bx bxl-facebook flex gap-4 text-[30px]">
                  <span className="text-white  hidden md:block text-[25px]">
                    Facebook
                  </span>
                </i>
              </a>
              <a
                href="https://www.facebook.com/Cristian.Agudelo09?mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="bx bxl-instagram-alt flex gap-4 text-[30px]">
                  <span className="text-white  hidden md:block text-[25px]">
                    Instagram
                  </span>
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-alberto-8a36941a4"
                target="_blank"
              >
                <i className="bx bxl-linkedin flex gap-4 text-[30px]">
                  <span className="text-white  hidden md:block text-[25px]">
                    Linkedin
                  </span>
                </i>
              </a>
              <a href="https://github.com/agudelo1" target="_blank">
                <i className="bx bxl-github flex gap-4 text-[30px]">
                  <span className="text-white  hidden md:block text-[25px]">
                    Github
                  </span>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
