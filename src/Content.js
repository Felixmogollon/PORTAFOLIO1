// import images

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

import academlo from "/images/Studies/academlo.svg";
import udea from "/images/Studies/udea.png";
import unab from "/images/Studies/unab.png";

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
    btnText: "Contactame",
    para: "¡Hola! Soy Cristian, un apasionado desarrollador frontend con experiencia en la creación de experiencias web excepcionales. Mi enfoque se centra en utilizar tecnologías de vanguardia para diseñar y desarrollar aplicaciones web que no solo sean visualmente atractivas, sino también altamente funcionales y eficientes.",
    hero_content: [
      {
        count: "1+",
        text: "Años de experiencia en desarrollo web.",
      },
      {
        count: "7+",
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
        name: "Node js",

        logo: nodejs,
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
        image: project1,
        link: "https://store-ecommerce-cristian.netlify.app",
      },
      {
        title: "App del clima",
        image: project2,
        link: "https://app-weather-cristian.netlify.app",
      },
      {
        title: "Buscador de paises",
        image: project3,
        link: "https://app-countries-cristian.netlify.app",
      },
      {
        title: "App de Rick and Morty",
        image: project4,
        link: "https://rick-and-morty-app-cristian.netlify.app",
      },
      {
        title: "Crud de usuarios",
        image: project5,
        link: "https://users-cristian.netlify.app",
      },
      {
        title: "App galletas de la fortuna",
        image: project6,
        link: "https://fortune-cookies-cristian.netlify.app",
      },
      {
        title: "App de Pokemons",
        image: project7,
        link: "https://api-pokemons-cristian.netlify.app",
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
        review: "“Técnico en programación con énfasis en aplicaciones web”",
        img: unab,
        name: "Universidad Autónoma de Bucaramanga",
        año: "2022-2023",
      },
      {
        review: "“Ingeniería de sistemas”",
        img: udea,
        name: "Universidad de Antioquia",
        año: "En proceso",
      },

      {
        review: "“Bootcamp desarrollo front-end y back-end”",
        img: academlo,
        name: "ACADEMLO",
        año: "En proceso",
      },
    ],
  },
};
