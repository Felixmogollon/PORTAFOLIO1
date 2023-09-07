import { useRef } from "react";
import { content } from "../Content";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  return (
    <section
      className="bg-dark_primary text-white flex justify-center items-center "
      id="contact"
    >
      <Toaster />
      <div className="md:container px-5 py-14 ">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4
          className="subtitle text-[20px] md:text-[35px]"
          data-aos="fade-down"
        >
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            action="https://formsubmit.co/1d4fd4fdd0a1bb674cef1d679c3cb713"
            method="POST"
            className="flex-1 flex flex-col gap-5  max-w-[800px]"
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
              placeholder="Mensaje"
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
            <input
              type="hidden"
              name="_next"
              value="https://portafolio-cristian-agudelo.netlify.app"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>
          <div className=" flex flex-col gap-5 ">
            <div className="flex md:grid md:justify-center md:gap-8 items-center gap-8">
              <a href="https://wa.me/+3015615963" target="_blank">
                <i className="bx bxl-whatsapp flex gap-4 text-[30px]">
                  <span className="text-white  hidden md:block text-[25px]">
                    WhatsApp
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
