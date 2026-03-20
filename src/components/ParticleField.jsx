import React, { useEffect, useRef } from 'react';

const ParticleField = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const particleCount = 120;
    
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 2 + 0.5;
      const opacity = Math.random() * 0.4 + 0.1;
      p.className = 'absolute bg-white rounded-full pointer-events-none';
      p.style.opacity = opacity.toString();
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.filter = `blur(${Math.random() * 1.5}px)`;

      p.animate([
        { transform: 'translate(0, 0)', opacity: opacity },
        { transform: `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)`, opacity: 0.1 }
      ], {
        duration: Math.random() * 25000 + 15000,
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
      });
      container.appendChild(p);
    }
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default ParticleField;
