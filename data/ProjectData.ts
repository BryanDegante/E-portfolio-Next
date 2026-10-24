export type Project = {
  id: number;
  name: {
    en: string;
    es: string;
  };
  screenshot: string;
  website: {
    live: string;
    repo: string;
  };
  tech: string[];
  description: {
    en: string;
    es: string;
  };
  featured: boolean;
};

export const ProjectsData: Project[] = [
  {
    id: 1,
    name: {
      en: 'Summarist ',
      es: 'Summarist',
    },
    screenshot: '/assets/summarist.png',
    website: {
      live: 'https://bryan-virtual-internship-v2.vercel.app/',
      repo: 'https://github.com/BryanDegante/bryan-Virtual-Internship-V2',
    },
    tech: ['Typescript', 'Tailwind Css', 'Vercel', 'Redux', 'Next', 'Firebase'],
    description: {
      en: 'An audiobook platform where users can discover and listen to book summaries, manage their personal library, and access premium features through subscription plans.',
      es: 'Una plataforma de audiolibros donde los usuarios pueden descubrir y escuchar resúmenes de libros, administrar su biblioteca personal y acceder a funciones premium mediante planes de suscripción.',
    },
    featured: true,
  },

  {
    id: 2,
    name: {
      en: 'Awwards Website Clone',
      es: 'Clon de Sitio Web de Awwards',
    },
    screenshot: '/assets/Awwards.png',
    website: {
      live: 'https://bryandegante.github.io/Awwards-Website-Clone/',
      repo: 'https://github.com/BryanDegante/Awwards-Website-Clone',
    },
    tech: ['JavaScript', 'GSAP', 'React', 'Tailwind Css', 'GitHub'],
    description: {
      en: 'A fully responsive awards-style interface clone built with React, recreating the design and layout of a real-world awards platform. Includes interactive elements, state management for dynamic content, and custom styling to match the original design, showcasing UI replication and front-end skills.',
      es: 'Una copia de interface contrusida, recreando el diseño y la estructura de una plataforma de premios del mundo real. Incluye elementos interactivos, gestión de estado para contenido dinámico y estilos personalizados que recrean el diseño original, demostrando habilidades de replicación de interfaces y desarrollo front-end.',
    },
    featured: true,
  },
  {
    id: 3,
    name: {
      en: 'EC 5 Star Transports',
      es: 'EC 5 Star Transports',
    },
    screenshot: '/assets/Ec5star.png',
    website: {
      live: 'https://ec5startransports.vercel.app/',
      repo: 'https://github.com/BryanDegante/ec5startransports',
    },
    tech: ['JavaScript', 'GSAP', 'React', 'CSS', 'Resend', 'Vercel', 'Vite'],
    description: {
      en: 'Designed and developed a modern, luxury-styled website for a family-owned vehicle transport company. The goal was to build trust quickly through premium visuals, smooth animations, and clear conversion paths. Built with React and GSAP, the site features glassmorphism UI elements, an animated navigation experience, and responsive layouts optimized for both desktop and mobile. Special focus was placed on performance, reusable components, and high-end visual polish.',
      es: 'Diseñé y desarrollé un sitio web moderno y elegante para una empresa familiar de transporte de vehículos. El objetivo fue generar confianza rápidamente mediante elementos visuales premium, animaciones fluidas y rutas de conversión claras. Construido con React y GSAP, el sitio incluye elementos de interfaz con glassmorphism, una navegación animada y diseños responsivos optimizados para computadoras y dispositivos móviles. Se prestó especial atención al rendimiento, los componentes reutilizables y un alto nivel de calidad visual.',
    },
    featured: true,
  },
  {
    id: 4,
    name: {
      en: 'Movie Site',
      es: 'Sitio de Películas',
    },
    screenshot: '/assets/MovieSite.png',
    website: {
      live: 'https://movie-site-iota-six.vercel.app/',
      repo: 'https://github.com/BryanDegante/Movie-Site',
    },
    tech: ['JavaScript', 'GSAP', 'React', 'CSS'],
    description: {
      en: 'A React-based movie and TV search platform integrated with the TMDB API, utilizing React Router for dynamic page navigation, state management for real-time search results and loading states, and embedded trailer playback. Designed with custom CSS for a clean, cinematic user experience.',
      es: 'Una plataforma de búsqueda de películas y series creada con React e integrada con la API de TMDB. Utiliza React Router para la navegación dinámica, gestión de estado para resultados de búsqueda en tiempo real y estados de carga, además de reproducción de comerciales. Diseñada con CSS personalizado para ofrecer una experiencia limpia y cinematográfica.',
    },
    featured: true,
  },

  {
    id: 5,
    name: {
      en: 'GSAP MacBook Site Clone',
      es: 'Clon de Sitio MacBook con GSAP',
    },
    screenshot: '/assets/Macbook.png',
    website: { live: 'https://gsap-macbook-site.vercel.app/', repo: 'https://github.com/BryanDegante/gsap__macbook_site' },
    tech: ['JavaScript', 'GSAP', 'React', 'Tailwind Css', 'Vercel'],
    description: {
      en: 'A fully responsive Apple-style MacBook landing page clone built with React, featuring smooth scroll-triggered animations and timeline-based transitions using GSAP. Recreates a modern product showcase design with interactive elements and performance-focused front-end development.',
      es: 'Un clon de una página de aterrizaje de MacBook con estilo Apple completamente responsiva, creada con React y que incluye animaciones fluidas activadas por el desplazamiento y transiciones basadas en líneas de tiempo utilizando GSAP. Recrea un diseño moderno de presentación de producto con elementos interactivos y un desarrollo front-end enfocado en el rendimiento.',
    },
    featured: false,
  },
  {
    id: 6,
    name: {
      en: 'All Glass N Mirror',
      es: 'All Glass N Mirror',
    },
    screenshot: '/assets/glass.png',
    website: { live: 'https://www.allglasssnmirror.com/', repo: 'https://github.com/BryanDegante/Glass-Business' },
    tech: ['Javascript', 'CSS', 'Vercel', 'React', 'Vite', 'GSAP'],
    description: {
      en: 'A business website designed to showcase glass and mirror products and services, providing customers with an accessible way to explore available solutions and learn more about the company. The project focuses on presenting the business professionally, organizing information clearly, and creating a straightforward experience for residential and commercial customers.',
      es: 'Un sitio web empresarial diseñado para presentar productos y servicios de vidrio y espejos, ofreciendo a los clientes una forma accesible de conocer las soluciones disponibles y obtener más información sobre la empresa. El proyecto se enfoca en transmitir una imagen profesional, organizar la información de manera clara y brindar una experiencia sencilla para clientes residenciales y comerciales.',
    },
    featured: true,
  },
];
