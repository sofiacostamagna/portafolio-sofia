export const optionsParticles = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "bubble", // Puedes probar con "grab" u otros modos
      },
      onHover: {
        enable: true,
        mode: "bubble", // Puedes probar con "repulse" u otros modos
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 100,
        size: 10,
        duration: 2,
        opacity: 0.8,
      },
    },
  },

  particles: {
    color: {
      value: "#fff",
    },
    links: {
      color: "#fff",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: undefined,
      enable: true,
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "edge",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
