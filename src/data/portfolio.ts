// ============================================================
// ⚙️ ARCHIVO CENTRAL DE DATOS DEL PORTFOLIO
// Edita aquí tu nombre, enlaces, email, tecnologías y proyectos.
// Todos los componentes de la página leen de este archivo.
// ============================================================

export interface Technology {
  /** Nombre que se muestra debajo del icono */
  name: string;
  /** Ruta del icono en /public (ej: "/icons/tech/react.svg") */
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  /** Imagen de la card (ej: "/images/projects/proyecto-1.svg") */
  image: string;
  /** Tecnologías usadas (etiquetas pequeñas en la card) */
  tags: string[];
  /** Enlaces opcionales: déjalos como "#" si aún no los tienes */
  repoUrl: string;
  demoUrl: string;
}

export const site = {
  // ---- Identidad ----
  name: "Tu Nombre",
  firstName: "Tu",
  lastName: "Nombre",
  role: "Desarrollador Web Full Stack",
  tagline:
    "Construyo experiencias web modernas, rápidas y accesibles con tecnologías actuales.",

  // ---- Foto de perfil ----
  // Sustituye este archivo por tu foto real (mismo nombre o actualiza la ruta).
  avatar: "/images/avatar.svg",

  // ---- Enlaces sociales ----
  github: "https://github.com/tu-usuario",
  linkedin: "https://www.linkedin.com/in/tu-usuario",

  // ---- Contacto ----
  email: "tu-correo@ejemplo.com",

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
    "¡Hola! Soy desarrollador web y me apasiona convertir ideas en productos digitales reales. Disfruto especialmente del frontend: interfaces limpias, cuidadas al detalle y con una gran experiencia de usuario.",
    "Mi pasión por la programación nació de la curiosidad por entender cómo funcionan las cosas en la web. Desde entonces no he parado de aprender: cada proyecto es una oportunidad para mejorar, probar nuevas herramientas y escribir código más limpio y mantenible.",
    "Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos personales y seguir aprendiendo para convertirme cada día en un mejor desarrollador.",
  ],
  highlights: [
    { value: "+2", label: "Años programando" },
    { value: "+10", label: "Proyectos personales" },
    { value: "∞", label: "Ganas de aprender" },
  ],
};

// ---- Sección "Tecnologías" ----
// Iconos disponibles en /public/icons/tech/ :
// astro, css3, figma, git, html5, javascript, mongodb, mysql,
// nodejs, python, react, tailwindcss, typescript
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
// Sustituye por tus proyectos reales: cambia título, descripción,
// imagen (/public/images/projects/...), tags y enlaces.
export const projects: Project[] = [
  {
    title: "Proyecto 1",
    description:
      "Breve descripción de tu proyecto: qué problema resuelve y qué tecnologías utilizaste para construirlo.",
    image: "/images/projects/proyecto-1.svg",
    tags: ["Astro", "TypeScript", "CSS"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Proyecto 2",
    description:
      "Breve descripción de tu proyecto: qué problema resuelve y qué tecnologías utilizaste para construirlo.",
    image: "/images/projects/proyecto-2.svg",
    tags: ["React", "Node.js", "MongoDB"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Proyecto 3",
    description:
      "Breve descripción de tu proyecto: qué problema resuelve y qué tecnologías utilizaste para construirlo.",
    image: "/images/projects/proyecto-3.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Proyecto 4",
    description:
      "Breve descripción de tu proyecto: qué problema resuelve y qué tecnologías utilizaste para construirlo.",
    image: "/images/projects/proyecto-4.svg",
    tags: ["Python", "MySQL", "React"],
    repoUrl: "#",
    demoUrl: "#",
  },
];
