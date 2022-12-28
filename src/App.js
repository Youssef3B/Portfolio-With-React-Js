import React,  { useEffect, useCallback }  from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import Navbarr from './Components/Header/Navbarr';
import { Routes, Route } from "react-router-dom"
import Herosection from "./Components/Herosection/Herosection";
import Features from './Components/Features/Features';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
        AOS.init();
      }, [])
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
    <>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#212428",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-xl-2">
            <Navbarr/>
            </div>
        
            <div  className="col-lg-9 col-xl-10 ">
            <Routes>
            <Route path="/" exact element={<Herosection />} />
            <Route path="features" element={<Features />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            </Routes>
            </div>
        </div>
   </div> 
    </>
  );
}

export default App;
