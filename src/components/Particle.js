import React from "react";

function Particle() {
  return (
    <div
      className="particles-background"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background:
          "radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.03) 0%, transparent 60%)",
      }}
      aria-hidden="true"
    />
  );
}

export default Particle;
