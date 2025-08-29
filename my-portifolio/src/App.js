import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import "./App.css";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  return (
    <>
      <Navbar
        refs={{
          homeRef,
          skillsRef,
          projectsRef,
          connectRef,
        }}
      />
      <div ref={homeRef}><Home /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={connectRef}><Connect /></div>
    </>
  );
}

export default App;