/**
 * Defines animation variants for page transitions.
 */
export const transitionVariantsPage = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

/**
 * Defines motion transitions for an "about" section.
 */
export const motionTransitionsAbout = {
  initial: {
    opacity: 0,
    bottom: "5rem",
    transform: "translateY(200px)",
  },
  transition: {
    duration: 2.3,
    type: "tween",
    ease: [0.25, 0.6, 0.3, 0.8],
  },
  animate: {
    opacity: 1,
    transform: "translateY(0px)",
  },
};

/**
 * Generates motion variants for a fade-in animation.
 * @param direction - The direction of the fade animation ("up", "down", "left", "right").
 * @param delay - The delay before the animation starts.
 * @returns Object with "hidden" and "show" states for the fade-in animation.
 */
export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
