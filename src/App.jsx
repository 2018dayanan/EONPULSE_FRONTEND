import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Testimonial from './components/Testimonial';
import Career from './components/Career';
import About from './components/About';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';

function App() {
  const location = useLocation();

  useEffect(() => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const observerOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    reveals.forEach(el => revealObserver.observe(el));

    const handleParallax = () => {
      const scrollY = window.pageYOffset;
      document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleParallax);

    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      };
      const handleLeave = () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      };
      card.addEventListener('mousemove', handleMove);
      card.addEventListener('mouseleave', handleLeave);
    });

    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, [location]);

  return (
    <div className="bg-primary text-slate-100 antialiased selection:bg-accent selection:text-primary min-h-screen">
      <div className="abyss-overlay"></div>
      <ParticleField />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogArticle />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
