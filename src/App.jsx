import { useState } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-black">
      {/* CUSTOM CURSOR */}

      <CustomCursor />

      {/* LOADER */}

      {loading && (
        <Loader
          onComplete={() => setLoading(false)}
        />
      )}

      {/* SMOOTH SCROLL */}

      {!loading && <SmoothScroll />}

      {/* NAVBAR */}

      <Navbar />

      {/* SECTIONS */}

      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />

      {/* FOOTER */}

      <Footer />
    </main>
  );
}

export default App;