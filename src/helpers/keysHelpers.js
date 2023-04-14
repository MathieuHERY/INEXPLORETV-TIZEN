import React, { useEffect, useState } from "react";

export default function UseKeys() {
  const [keyPressed, setKeyPressed] = useState(null);

  useEffect(() => {
    function handleKeyDown(e) {
      setKeyPressed(e.keyCode);
    }
    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return keyPressed;
}
