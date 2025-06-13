import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contact, { Thanks } from "./Contact.jsx";
import Notfound from "./Notfound";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./Components/Navigation";
import Cheatsheets from "./Components/Cheatsheets";
import Certificates from "./Components/Certificates";
import Privacy from "./Components/privacy";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { DemoRouter, DemoSearch } from "./Demos";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create root once



const renderDemoApp = () => {
  root.render(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<DemoSearch />} />
            <Route path="*" element={<DemoRouter />} />
          </Route>
        </Routes>
      </Router>

      <div className="foot">
        <br />
        <br />
        <br />
        Copyright © 2022 Matthew Harris - All Rights Reserved.
        <br />
        <a className="priv" href="/privacy">
          Privacy Policy
        </a>
        <br />
      </div>
    </>
  );
};

const renderCheatsheetsApp = () => {
  root.render(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="*" element={<Cheatsheets />} />
          </Route>
        </Routes>
      </Router>

      <div className="foot">
        <br />
        <br />
        <br />
        Copyright © 2022 Matthew Harris - All Rights Reserved.
        <br />
        <a className="priv" href="/privacy">
          Privacy Policy
        </a>
        <br />
      </div>
    </>
  );
};


function ParticleWrapper() {
  console.log("Rendering particles wrapper");

  const particlesInit = (engine) => {
    console.log("particlesInit called");
    // you can do engine.loadFull() here if needed
  };

  const particlesLoaded = (container) => {
    console.log("particlesLoaded called");
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        border: "2px solid red",
        backgroundColor: "#000",
      }}
    >
      <Particles
        id="tsparticles1"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: "#001" },
          particles: {
            number: { value: 30 },
            size: { value: 35 },
            color: { value: "#00ff00" },
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

const renderParticlesApp = () => {
  console.log("Rendering particles app");
  root.render(
    <>
      <ParticleWrapper />
      HI
    </>
  );
};

const renderApp = () => {
  root.render(
    <div className="bounds">
      <Router>
      <Routes>
      
        <Route path="/" element={<Navigation/>}>
          <Route exact path="/" element={<App />} />
          <Route path="Contact-Us" element={<Contact/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Demo/*" element={<DemoRouter nav="false"/>} />
          <Route path="Demo" element={<DemoSearch />} />
          <Route path="Privacy" element={<Privacy/>} />
          <Route path="Thanks" element={<Thanks/>} />
          <Route path="Certificates" element={<Certificates/>} />
          <Route path="Cheat" element={<Cheatsheets/>} />
          <Route path="Home" element={<App />} />
          <Route path="*" element={<Notfound />} />
      </Route>
      </Routes>
      </Router>
      <div className="foot">
        <br/><br/><br/>
        Copyright © 2022 Matthew Harris - All Rights Reserved.
        <br/>
        <a className="priv" href="/privacy">
          Privacy Policy
        </a>
        <br/>
      </div>
    </div>
  );
};


const subdomain = window.location.host.split(".")[0];

if (subdomain === "demo") {
  renderDemoApp();
} else if (subdomain === "cheat") {
  renderCheatsheetsApp();
} else {
  console.log("Rendering particles");
  renderApp();
}

reportWebVitals();
