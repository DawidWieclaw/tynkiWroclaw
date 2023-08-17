import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Maszynowe gipsowe",
          "Maszynowe cementowo wapienne",
          "Renowacyjne",
          "dekoracyjne - Malowanie",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
