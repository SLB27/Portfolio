export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
}

export const site = {
  // ---- Identidad ----
  name: "Samuel Sánchez",
  firstName: "Samuel",
  lastName: "Sánchez",
  role: "Desarrollador Web Full Stack | Administrador de Sistemas",
  tagline:
    "Construyo experiencias web modernas, rápidas y accesibles con tecnologías actuales y las mejores prácticas de administración de sistemas.",

  // ---- Foto de perfil ----
  // Sustituye este archivo por tu foto real (mismo nombre o actualiza la ruta).
  avatar: "/images/avatar.svg",

  // ---- Enlaces sociales ----
  github: "https://github.com/SLB27",
  linkedin: "https://www.linkedin.com/in/samuel-sánchez-ballesteros-a44703335 ",

  // ---- Contacto ----
  email: "samuel121106@protonmail.com",

  // ---- Navegación ----
  navLinks: [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
};

// ---- Sección "Sobre mí" ----
export const about = {
  title: "Sobre mí",
  paragraphs: [
    "¡Hola! Soy desarrollador web full stack y administrador de sistemas con más de 2 años de experiencia en el desarrollo de aplicaciones web modernas y la gestión de infraestructuras tecnológicas. Me apasiona crear soluciones digitales que sean eficientes, escalables y fáciles de usar. Mi enfoque se centra en la calidad del código, la optimización del rendimiento y la seguridad de las aplicaciones. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades para ofrecer el mejor valor a los proyectos en los que trabajo.",
  ],
  highlights: [
    { value: "+2", label: "Años programando" },
    { value: "2", label: "Proyectos personales" },
    { value: "∞", label: "Ganas de aprender" },
  ],
};

// ---- Sección "Tecnologías" ----
export const technologies: Technology[] = [
  { name: "HTML5", icon: "/icons/tech/html5.svg" },
  { name: "CSS3", icon: "/icons/tech/css3.svg" },
  { name: "JavaScript", icon: "/icons/tech/javascript.svg" },
  { name: "TypeScript", icon: "/icons/tech/typescript.svg" },
  { name: "React", icon: "/icons/tech/react.svg" },
  { name: "Astro", icon: "/icons/tech/astro.svg" },
  { name: "Node.js", icon: "/icons/tech/nodejs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tech/tailwindcss.svg" },
  { name: "Git", icon: "/icons/tech/git.svg" },
  { name: "Python", icon: "/icons/tech/python.svg" },
  { name: "MongoDB", icon: "/icons/tech/mongodb.svg" },
  { name: "MySQL", icon: "/icons/tech/mysql.svg" },
];

// ---- Sección "Proyectos" ----
export const projects: Project[] = [
  {
    title: "La Pepa Peluquería",
    description:
      "Página web de una peluquería, diseñada para atraer clientes y mostrar los servicios ofrecidos. Construida con React y CSS para una experiencia de usuario fluida y atractiva.",
    image: "/images/projects/hero.png",
    tags: ["React", "JavaScript", "CSS"],
    repoUrl: "https://github.com/SLB27/Peluqueria_Landing_Page",
    demoUrl: "https://pepapeluqueria.com",
  },
  // {
  //   title: "Proyecto 2",
  //   description:
  //     "Breve descripción de tu proyecto: qué problema resuelve y qué tecnologías utilizaste para construirlo.",
  //   image: "/images/projects/proyecto-2.svg",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   repoUrl: "#",
  //   demoUrl: "#",
  // },
  // {
  //   title: "Proyecto 3",
  //   description:
  //     "Breve descripción de tu proyecto: qué problema resuelve y qué tecnologías utilizaste para construirlo.",
  //   image: "/images/projects/proyecto-3.svg",
  //   tags: ["JavaScript", "HTML", "CSS"],
  //   repoUrl: "#",
  //   demoUrl: "#",
  // },
  // {
  //   title: "Proyecto 4",
  //   description:
  //     "Breve descripción de tu proyecto: qué problema resuelve y qué tecnologías utilizaste para construirlo.",
  //   image: "/images/projects/proyecto-4.svg",
  //   tags: ["Python", "MySQL", "React"],
  //   repoUrl: "#",
  //   demoUrl: "#",
  // },
];
