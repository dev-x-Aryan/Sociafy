import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Stats from './components/Stats'
import FloatingCTA from './components/FloatingCTA'
import Loader from './components/Loader'

const App = () => {

  const [loading, setLoading] = useState(true);

  // loader control
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 sec loader

    return () => clearTimeout(timer);
  }, []);

  // scroll to top logic (your existing code)
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }

    const forceScrollTop = () => {
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 0);
      setTimeout(() => window.scrollTo(0, 0), 50);
    };

    forceScrollTop();
    window.addEventListener("load", forceScrollTop);

    return () => {
      window.removeEventListener("load", forceScrollTop);
    };
  }, []);

  // 👉 show loader first
  if (loading) return <Loader />;

  return (
    <div className="transition-opacity duration-500 opacity-100">
      <Navbar />
      <Hero />  
      <Services />
      <About />
      <Stats />
      <Contact />
      <FloatingCTA/>
    </div>
  )
}

export default App