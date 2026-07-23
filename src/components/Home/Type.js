import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Java & Spring Boot Developer",
          "ASP.NET Core Full-Stack Engineer",
          "AI & Deep Learning Engineer",
          "React, Angular & TypeScript Developer",
          "AI Engineer & LLM App Builder",
          "Blockchain Research Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
