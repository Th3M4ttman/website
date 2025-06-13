import React from "react";
import Particles from '@tsparticles/react';
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (engine) => {
    console.log("Loading tsparticles engine");
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
          shape: {
            type: "circle",
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.8,
          },
        },
        background: {
          color: "#000000",
        },
      }}
    />
  );
}
