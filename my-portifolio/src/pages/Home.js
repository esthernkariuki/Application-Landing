import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import "./Home.css";

export default function Home() {
  return (
    <section className="section home-section">
      <div className="home-left">
        <h2 className="home-greeting">Who am I?</h2>
        <div className="home-typing">
          <h1>
            <Typewriter
              words={[
                "I am a Software Developer.",
                "I build smart, scalable solutions."
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h1>
        </div>
        <p className="persona">
          Passionate about building impactful digital experiences, I thrive at the intersection of creativity and technology. 
          With a keen eye for detail and a love for problem-solving, I transform ideas into elegant, scalable solutions. 
          Let's create something remarkable together.
        </p>
        <a href="/connect" className="home-connect-btn">Let’s Connect</a>
      </div>
      <div className="home-right">
        <img src="images/future.jpg" alt="Illustration" className="home-img" />
      </div>
    </section>
  );
}