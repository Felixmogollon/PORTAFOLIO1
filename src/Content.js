// import images

import git from "/images/Skills/github.png";
import js from "/images/Skills/js.png";
import nodejs from "/images/Skills/node.png";
import reactjs from "/images/Skills/react.png";

import services_logo1 from "/images/Services/logo1.png";
import logodenode from "/images/Skills/logodenode.png";

import project1 from "/images/Projects/img1.png";
import project2 from "/images/Projects/img2.png";
import project3 from "/images/Projects/img3.png";
import project4 from "/images/Projects/img4.png";
import project5 from "/images/Projects/img5.png";
import project6 from "/images/Projects/img6.png";
import project7 from "/images/Projects/img7.png";


import academlo from "/images/Studies/academlo.svg";
import udea from "/images/Studies/udea.png";
import unab from "/images/Studies/unab.png";

const fesc = "./images/Studies/FESC.png"
const table = "./images/Skills/admin.png"
const project8 = "./images/Projects/ecommerce1.jpg";

// import icons from react-icons
import { BiUser } from "react-icons/bi";

import { MdArrowForward, MdOutlinePermContactCalendar } from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";

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
      link: "#studies",
      icon: PiStudentBold,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Desarrollador web",
    firstName: "FELIX",
    LastName: "MOGOLLON",
    btnText: "Contactame",
    para: " HOLA!,Soy felix un desarrollador frontend apasionado con experiencia en la creación de paginas web excepcionales, combinando habilidades en contabilidad para ofrecer soluciones creativas.  ",
    
    hero_content: [
      {
        count: "-1",
        text: "Años de experiencia en desarrollo web.",
      },
      {
        count: "4",
        text: "Proyectos trabajados en mi proceso de educación",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "MIS PRINCIPALES HABILIDADES",
    skills_content: [
      {
        name: "React js",

        logo: reactjs,
      },

      {
        name: "JavaScript",

        logo: js,
      },
      {
        name: "NODE. JS",

        logo: logodenode,
      },
      {
        name: "GitHub",

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
        para: "Desarrollador web con la experiencia y las habilidades necesarias para llevar tus ideas y proyectos en línea al siguiente nivel. Mi enfoque se centra en ofrecer soluciones web a medida que combinen diseño atractivo, funcionalidad intuitiva y un rendimiento excepcional",
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: "Proyectos",
    subtitle: "MI CREACIÓN",
    project_content: [
      {
        title: "Ecommerce",
        image: project8,
        link: "https://aquamarine-gnome-3e3d52.netlify.app/#",
      },
      {
        title: "App del clima",
        image: project2,
        link: "https://shimmering-praline-ea0341.netlify.app/",
      },
   
      {
        title: "App de Rick and Morty",
        image: project4,
        link: "https://flourishing-cascaron-c04901.netlify.app/",
      },
    
      {
        title: "App de Pokemons",
        image: project7,
        link: "https://admirable-marigold-5eafd4.netlify.app/",
      },
    ],
  },

  Contact: {
    title: "Contáctame",
    subtitle: "PONERSE EN CONTACTO",
  },
  Studies: {
    title: "Estudios",
    subtitle: "MIS ESTUDIOS",
    studies_content: [
      {
        review: "“Técnico en contabilidad financiera”",
        img: fesc,
        name: "Fundación de Estudios Superiores Comfanorte(FESC)",
        año: "2020-2021",
      },
     

      {
        review: "“Bootcamp desarrollo front-end y back-end”",
        img: academlo,
        name: "ACADEMLO",
        año: "2024",
      },
    ],
  },
};
