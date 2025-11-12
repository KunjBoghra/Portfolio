import Portfolio from "./componment/Portfolio";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    // Disable right click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Disable copy & cut
    document.addEventListener("copy", (e) => e.preventDefault());
    document.addEventListener("cut", (e) => e.preventDefault());

    // Disable key shortcuts like Ctrl+U, Ctrl+S, F12
    document.addEventListener("keydown", (e) => {
      if (
        (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "c")) ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    });
  }, []);
  return (
    <>
      <Portfolio />
    </>
  );
}

export default App;
