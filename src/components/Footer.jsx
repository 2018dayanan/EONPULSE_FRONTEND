import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Footer = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mapRef = useRef(null);
  const iconRefs = useRef([]);

  useGSAP(() => {
    // 1. Canvas Particles Logic
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    const resize = () => {
      if (!containerRef.current) return;
      width = canvas.width = containerRef.current.offsetWidth;
      height = canvas.height = containerRef.current.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
        this.life = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(0, 245, 255, ${this.life})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
      }
    };

    let animationFrame;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);

    // 2. GSAP Entrance Animations
    gsap.from(".footer-reveal", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrame);
    };
  }, { scope: containerRef });

  const handleTilt = (e) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    
    gsap.to(mapRef.current, {
      rotationY: x * 12,
      rotationX: -y * 12,
      transformPerspective: 1000,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const handleTiltLeave = () => {
    gsap.to(mapRef.current, {
      rotationY: 0,
      rotationX: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)"
    });
  };

  const handleMagnetic = (e, i) => {
    const el = iconRefs.current[i];
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.4;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.4;
    gsap.to(el, { x, y, duration: 0.4, ease: "power2.out" });
  };

  const resetMagnetic = (i) => {
    gsap.to(iconRefs.current[i], { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <footer ref={containerRef} className="bg-[#050b16] pt-40 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Layer: Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-40" />
      
      {/* Background Decor */}
      <div className="depth-haze opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Modern CTA Section */}
        <div className="footer-reveal mb-32 p-10 md:p-16 rounded-[3rem] glass border-accent/20 flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-white/[0.03] to-transparent group">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              Ready to stabilize your <span className="text-accent">digital core?</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              We engineer deep-infrastructure solutions for the modern frontier. Let's architect your success together.
            </p>
          </div>
          <button className="px-12 py-5 bg-accent text-primary font-black rounded-2xl text-sm uppercase tracking-widest hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,245,255,0.3)] active:scale-95 whitespace-nowrap">
            Start a Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="footer-reveal col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                <span className="material-symbols-outlined text-primary text-base font-black">bolt</span>
              </div>
              <h2 className="text-2xl font-black tracking-tighter text-white">EONPULSE</h2>
            </div>
            <p className="text-slate-500 text-[10px] leading-loose uppercase tracking-[0.4em] mb-10 font-black opacity-60">
              Architecting stable digital <br/> futures from the core up.
            </p>
            <div className="flex gap-4">
              {[ {icon: 'alternate_email'}, {icon: 'podcasts'} ].map((item, i) => (
                <a 
                  key={i}
                  ref={el => iconRefs.current[i] = el}
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all border-white/5" 
                  href="#"
                  onMouseMove={(e) => handleMagnetic(e, i)}
                  onMouseLeave={() => resetMagnetic(i)}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-reveal">
            <h4 className="text-white font-black text-[10px] tracking-[0.6em] mb-12 uppercase opacity-40">Solutions</h4>
            <ul className="space-y-6 text-xs font-black text-slate-500 tracking-[0.2em] uppercase">
              {['Engineering', 'Deployment', 'Stability', 'Resilience'].map(link => (
                <li key={link}><a className="hover:text-accent transition-colors flex items-center gap-3 group" href="#"><span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform" /> {link}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-reveal">
            <h4 className="text-white font-black text-[10px] tracking-[0.6em] mb-12 uppercase opacity-40">Presence</h4>
            <div className="space-y-4">
              <p className="text-slate-400 text-xs leading-loose tracking-[0.2em] uppercase font-black">
                Eonpulse Tech FZ-LLC<br/>
                RAKEZ Free Zone, Al Hamra<br/>
                Ras Al Khaimah, UAE
              </p>
              <div className="flex items-center gap-3 text-accent font-bold text-[10px] tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                Operational worldwide
              </div>
            </div>
          </div>

          <div className="footer-reveal flex flex-col justify-end">
            <div 
              ref={mapRef}
              className="w-full h-44 rounded-3xl glass overflow-hidden border border-white/10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-crosshair relative shadow-2xl"
              onMouseMove={handleTilt}
              onMouseLeave={handleTiltLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <div className="w-full h-full bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBx7sn7Y9TZIWF6kTlUal0Av868hi2qBLXJW1Dy1JTsM9p_F4ybGUC7XVlUDF53nnbQRbHIEYoi9SojHyPeYafFohI3Rbw_x4x0a6b48-gB_W-EFHgfeSvf5XuZWBch8ksld9P-C1a0Tu00mxSucRw_qlv-9n5T4LrFlxZ9ukNLxuFl0ygT1DodwdGjoudUNAzzPzlIZr6hqir9UQuw7iav3RLYRvziSgtiQmAxgBQC4ePkMBKzu3Su0-6VJF6Rcjo5GAF43B-Bz5Q')] bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-1000"></div>
            </div>
          </div>
        </div>

        <div className="footer-reveal pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-[9px] font-black tracking-[0.4em] uppercase">
            © 2024 EONPULSE TECH FZ-LLC. <span className="hidden md:inline">DEEP-SEA DIGITAL INFRASTRUCTURE.</span>
          </p>
          <div className="flex gap-10 text-[9px] text-slate-600 font-black tracking-[0.4em] uppercase">
            <a className="hover:text-slate-400 transition-colors" href="#">Privacy Protocol</a>
            <a className="hover:text-slate-400 transition-colors" href="#">Regulatory Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
