import { content } from "../Content";
import { Toaster } from "react-hot-toast";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const { Contact } = content;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ms07ui",
        "template_4w77edv",
        e.target,
        "5Ma01IBYP8JJqOPXU"
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Envio exitoso",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "No se pudo enviar, ¡vuelve a intentar! ",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <section
      className="bg-dark_primary_1 text-white flex justify-center items-center dark:bg-darkTheme "
      id="contact"
    >
      <Toaster />
      <div className="container px-5 py-20 ">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4
          className="subtitle text-[20px] md:text-[35px] dark:text-black"
          data-aos="fade-down"
        >
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col  max-w-[800px] mx-auto">
          <form onSubmit={sendEmail} className="flex-1 flex flex-col gap-5 ">
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              required
              className="placeholder-white/50 border-[3px]  border-[#4d473a] dark:border-black p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Correo"
              required
              className="placeholder-white/50 border-[3px]  border-[#4d473a] dark:border-black p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              className="placeholder-white/50 border-[3px]  border-[#3a4d3e] dark:border-black p-3 rounded h-44 resize-none "
              required
            ></textarea>
            <></>
            <button
              type="submit"
              className="btn self-start
            bg-white text-dark_primary   cursor-pointer dark:text-black dark:hover:bg-white/60 dark:border-[3px] dark:hover:border-black animate-move infinite "
            >
              Enviar
            </button>
          </form>
          <div className=" flex flex-col gap-5 ">
            <div className="flex md:grid md:justify-center md:gap-8 items-center gap-8">
              <a href="https://wa.me/+3015615963" target="_blank">
                <i className="bx bxl-whatsapp flex gap-4 text-[30px] transition duration-300 transform hover:translate-y-1 hover:scale-110">
                  <span className="text-white  hidden md:block text-[25px]">
                    WhatsApp
                  </span>
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-alberto-8a36941a4"
                target="_blank"
              >
                <i className="bx bxl-linkedin flex gap-4 text-[30px] transition duration-300 transform hover:translate-y-1 hover:scale-110">
                  <span className="text-white  hidden md:block text-[25px]">
                    Linkedin
                  </span>
                </i>
              </a>
              <a href="https://github.com/agudelo1" target="_blank">
                <i className="bx bxl-github flex gap-4 text-[30px] transition duration-300 transform hover:translate-y-1 hover:scale-110">
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
