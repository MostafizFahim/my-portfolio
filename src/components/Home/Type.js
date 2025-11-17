import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Blockchain & Smart Contract Developer",
          "Machine Learning Practitioner",
          "Cloud & DevOps Enthusiast",
          "IoT & Embedded Systems Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
