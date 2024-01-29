// Import the "client" module from the "use" package
"use client";
// Import the "useCallback" function from React
import { useCallback } from "react";
// Import the "Particles" component from the "react-tsparticles" library
import Particles from "react-tsparticles";
// Import the "loadFull" function and the "Engine" type from the "tsparticles" library
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
// Import the "optionsParticles" object from the "particleOptions" file
import { optionsParticles } from "./particleOptions";
// Import the "Introduction" component from the "Introduction" file
import { Introduction } from "../Introduction";

// Define the functional component "Cover"
export function Cover() {
  // Define an initialization function to load all "tsparticles" functions
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Define a particles loading function (currently left empty)
  const particlesLoaded = useCallback(async () => {}, []);

  // Return the JSX of the "Cover" component
  return (
    <div id="cover">
      {/* Render the "Particles" component with specific properties */}
      <Particles
        className="absolute w-full h-full translate-z-0"
        id="tsparticles"
        init={particlesInit} // Particles initialization
        loaded={particlesLoaded} // Particles loading function
        options={optionsParticles} // Particle configuration options
      />
      {/* Render the "Introduction" component */}
      <Introduction />
    </div>
  );
}
