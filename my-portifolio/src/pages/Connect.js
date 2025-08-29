import React from "react";
import "./Connects.css";
import connectImg from "../assets/connect-img.svg"; 

export default function Connect() {
  return (
    <section className="section connect-section">
      <div className="connect-grid">
        <div className="connect-illustration">
          <img src={connectImg} alt="Get in touch" />
        </div>
        <form className="connect-form">
          <h2>Get in Touch</h2>
          <div className="connect-form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="connect-form-row">
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone No." />
          </div>
          <textarea placeholder="Message" rows={4} required />
          <button type="submit" className="connect-submit">Send</button>
          <div className="connect-email">
            Or email me directly at <b>esthernnyamburaa@gmail.com</b>
          </div>
        </form>
      </div>
      <footer className="connect-footer">
        <span>Esther</span>
        <div>
          <a href="https://www.linkedin.com/in/esther-nyambura-kariuki/" target="_blank" rel="noopener noreferrer">in</a>
          <a href="https://github.com/esthernkariuki" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <span>© 2025 Esther Nyambura All rights reserved.</span>
      </footer>
    </section>
  );
}