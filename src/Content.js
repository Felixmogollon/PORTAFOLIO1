// import images
import Hero_person from "/images/Hero/person.png";

import git from "/images/Skills/github.png";
import js from "/images/Skills/js.png";
import nodejs from "/images/Skills/node.png";
import reactjs from "/images/Skills/react.png";

import services_logo1 from "/images/Services/logo1.png";

import project1 from "/images/Projects/img1.png";
import project2 from "/images/Projects/img2.png";
import project3 from "/images/Projects/img3.png";
import project4 from "/images/Projects/img4.png";
import project5 from "/images/Projects/img5.png";
import project6 from "/images/Projects/img6.png";
import project7 from "/images/Projects/img7.png";
import person_project from "/images/Projects/person.png";

import Hireme_person from "/images/Hireme/person.png";
import Hireme_person2 from "/images/Hireme/person2.png";

// import icons from react-icons
import { BiUser } from "react-icons/bi";

import { MdArrowForward, MdOutlinePermContactCalendar } from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Desarrollador web",
    firstName: "CRISTIAN",
    LastName: "AGUDELO",
    btnText: "Contratame",
    image: Hero_person,
    hero_content: [
      {
        count: "0+",
        text: "Años de experiencia en desarrollo web.",
      },
      {
        count: "10+",
        text: "Proyectos trabajados en mi carrera",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "MIS PRINCIPALES HABILIDADES",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },

      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: js,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "GitHub",
        para: "Lorem ipsum text  dummy",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Servicios",
    subtitle: "LO QUE OFREZCO",
    service_content: [
      {
        title: "Desarrollo web",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Proyectos",
    subtitle: "MI CREACIÓN",
    image: person_project,
    project_content: [
      {
        title: "Ecommerce",
        image: project1,
      },
      {
        title: "App del clima",
        image: project2,
      },
      {
        title: "Buscador de paises",
        image: project3,
      },
      {
        title: "App de Rick and Morty",
        image: project4,
      },
      {
        title: "Crud de usuarios",
        image: project5,
      },
      {
        title: "App galletas de la fortuna",
        image: project6,
      },
      {
        title: "App de Pokemons",
        image: project7,
      },
    ],
  },
  Hireme: {
    title: "Contratame",
    subtitle: "PARA TUS PROYECTOS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contáctame",
    subtitle: "PONERSE EN CONTACTO",
    // social_media: [
    //   {
    //     text: "cristian.agudelo1@udea.edu.co",
    //     icon: GrMail,
    //     link: "mailto:cristian.agudelo1@udea.edu.co",
    //   },
    //   {
    //     text: "+57 301 561 5963",
    //     icon: MdCall,
    //     link: "https://wa.me/573015615963",
    //   },
    //   {
    //     text: "codeaprogram",
    //     icon: BsInstagram,
    //     link: "https://www.instagram.com/codeaprogram/",
    //   },
    // ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
