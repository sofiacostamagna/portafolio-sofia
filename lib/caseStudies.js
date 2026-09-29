// Casos de estudio — /work/[slug]
// Todo lo que dice acá sale de lo que contó Sofía o de lo que se ve en el sitio publicado.
// Para sumar resultados o desafíos, agregar `results` / `challenge` y se muestran solos.

export const caseStudies = [
  {
    slug: "aruma-clinic",
    title: "Aruma Clinic",
    url: "https://arumaclinic.com/",
    category: { en: "Aesthetic medicine · WordPress", es: "Medicina estética · WordPress" },
    summary: {
      en: "A website designed from scratch for an aesthetic medicine clinic — calm, premium and built to make booking a consultation easy.",
      es: "Un sitio diseñado desde cero para una clínica de medicina estética — sereno, premium y pensado para que reservar una consulta sea fácil.",
    },
    role: { en: "UX/UI Design · Frontend Development", es: "Diseño UX/UI · Desarrollo Frontend" },
    stack: ["Figma", "WordPress", "PHP", "CSS"],
    briefTitle: { en: ["Starting from", "scratch"], es: ["Empezar desde", "cero"] },
    brief: {
      en: "The clinic needed a new website and there was no previous design to build on. I started from the essentials: their information and a few visual references they liked. The goal was a site that conveys trust and turns visits into consultations.",
      es: "La clínica necesitaba un sitio nuevo y no había un diseño previo del cual partir. Arranqué desde lo esencial: su información y algunas referencias visuales que les gustaban. El objetivo era un sitio que transmita confianza y convierta visitas en consultas.",
    },
    process: [
      { en: ["Brief", "Client information and visual references as the starting point."], es: ["Brief", "La información del cliente y sus referencias visuales como punto de partida."] },
      { en: ["Design in Figma", "A full mockup designed from scratch."], es: ["Diseño en Figma", "Un mockup completo diseñado desde cero."] },
      { en: ["Feedback rounds", "Back-and-forth with the client until the design felt right."], es: ["Idas y vueltas", "Ajustes con el cliente hasta que el diseño quedó como querían."] },
      { en: ["Build in WordPress", "Turned into code with a custom theme and PHP."], es: ["Desarrollo en WordPress", "Llevado a código con un tema a medida y PHP."] },
    ],
    highlights: {
      en: [
        "Calm, premium identity: elegant serif typography, warm neutrals and generous white space.",
        "Clear paths to book — “Reservar consulta” in the hero, “Cita rápida” in the menu and WhatsApp always at hand.",
        "Treatments presented as visual cards, each leading to its own page.",
        "Mobile-first and fully responsive, on a custom WordPress theme.",
      ],
      es: [
        "Identidad serena y premium: tipografía serif elegante, neutros cálidos y mucho aire.",
        "Caminos claros para reservar — “Reservar consulta” en el hero, “Cita rápida” en el menú y WhatsApp siempre a mano.",
        "Tratamientos presentados como tarjetas visuales, cada una con su propia página.",
        "Mobile-first y totalmente responsivo, sobre un tema WordPress a medida.",
      ],
    },
  },
  {
    slug: "wiplex-studios",
    title: "WiPlex Studios",
    url: "https://www.wiplex.net/",
    category: { en: "AI content platform · Redesign", es: "Plataforma de contenido con IA · Rediseño" },
    summary: {
      en: "A complete redesign of a creative studio's platform for AI-powered animated series and storytelling channels.",
      es: "Un rediseño completo de la plataforma de un estudio creativo de series animadas y canales de storytelling hechos con IA.",
    },
    role: { en: "UI Redesign · Frontend Development · PHP", es: "Rediseño UI · Desarrollo Frontend · PHP" },
    stack: ["HTML", "CSS", "PHP", "JavaScript"],
    briefTitle: { en: ["Rethinking", "everything"], es: ["Repensar", "todo"] },
    brief: {
      en: "WiPlex Studios publishes AI-powered video content across several channels — from kids' animation to history and mystery. I changed the entire design of the site and built it in HTML, CSS and PHP.",
      es: "WiPlex Studios publica contenido audiovisual hecho con IA en varios canales — desde animación infantil hasta historia y misterio. Cambié todo el diseño del sitio y lo desarrollé con HTML, CSS y PHP.",
    },
    process: [
      { en: ["Starting point", "The existing site and the studio's content and channels."], es: ["Punto de partida", "El sitio existente y el contenido y los canales del estudio."] },
      { en: ["New design", "A full redesign of the look and structure."], es: ["Nuevo diseño", "Un rediseño completo de la estética y la estructura."] },
      { en: ["Feedback rounds", "Iterations with the client along the way."], es: ["Idas y vueltas", "Iteraciones con el cliente durante el proceso."] },
      { en: ["Build", "Frontend in HTML and CSS, with PHP for the site's pages."], es: ["Desarrollo", "Frontend en HTML y CSS, con PHP para las páginas del sitio."] },
    ],
    highlights: {
      en: [
        "Cinematic dark interface, with a featured episode and a “Watch now” call to action up front.",
        "Channel navigation — LupiToons, DinoBu, History in Flames, Secrets in Shadows — right below the hero.",
        "A ticker with the latest releases to keep the home page alive.",
        "Built with HTML, CSS and PHP.",
      ],
      es: [
        "Interfaz oscura y cinematográfica, con un episodio destacado y un “Watch now” bien visible.",
        "Navegación por canales — LupiToons, DinoBu, History in Flames, Secrets in Shadows — justo debajo del hero.",
        "Una cinta con los últimos estrenos que mantiene viva la home.",
        "Desarrollado con HTML, CSS y PHP.",
      ],
    },
  },
  {
    slug: "dr-javier-ruiz-romero",
    title: "Dr. Javier Ruiz Romero",
    url: "https://drjavierruizromero.com/",
    category: { en: "Men's health specialist · WordPress", es: "Especialista en salud masculina · WordPress" },
    summary: {
      en: "A website designed from scratch for an andrology specialist with practices in several cities in Spain — clear, trustworthy and patient-focused.",
      es: "Un sitio diseñado desde cero para un especialista en andrología con consultorios en varias ciudades de España — claro, confiable y orientado al paciente.",
    },
    role: { en: "UX/UI Design · Frontend Development", es: "Diseño UX/UI · Desarrollo Frontend" },
    stack: ["Figma", "WordPress", "PHP", "CSS"],
    briefTitle: { en: ["Authority &", "trust"], es: ["Autoridad y", "confianza"] },
    brief: {
      en: "The doctor needed a website that would present his practice with authority and make it easy for patients to get in touch. As with Aruma, there was no previous design: I worked from his information and a few references.",
      es: "El doctor necesitaba un sitio que presentara su práctica con autoridad y que a los pacientes les resultara fácil contactarlo. Como en Aruma, no había un diseño previo: trabajé a partir de su información y algunas referencias.",
    },
    process: [
      { en: ["Brief", "Client information and visual references as the starting point."], es: ["Brief", "La información del cliente y sus referencias visuales como punto de partida."] },
      { en: ["Design in Figma", "A full mockup designed from scratch."], es: ["Diseño en Figma", "Un mockup completo diseñado desde cero."] },
      { en: ["Feedback rounds", "Back-and-forth with the client until the design felt right."], es: ["Idas y vueltas", "Ajustes con el cliente hasta que el diseño quedó como quería."] },
      { en: ["Build in WordPress", "Turned into code with a custom theme, PHP and SEO basics."], es: ["Desarrollo en WordPress", "Llevado a código con un tema a medida, PHP y SEO."] },
    ],
    highlights: {
      en: [
        "Editorial, elegant design with large serif headlines that give the practice authority.",
        "“Solicitar consulta” and direct WhatsApp contact from the very first screen.",
        "Practice locations — Madrid, Barcelona, Reus, Ciudad Real — visible up front.",
        "Custom WordPress theme, responsive design and SEO optimization.",
      ],
      es: [
        "Diseño editorial y elegante, con grandes títulos serif que le dan autoridad a la práctica.",
        "“Solicitar consulta” y contacto directo por WhatsApp desde la primera pantalla.",
        "Las sedes — Madrid, Barcelona, Reus, Ciudad Real — visibles desde el inicio.",
        "Tema WordPress a medida, diseño responsivo y optimización SEO.",
      ],
    },
  },
];

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
