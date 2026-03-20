import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Terminal, Server, Code, Zap, ArrowRight, ShieldCheck, 
  Globe, Database, CloudLightning, Activity, Cpu, Layers, Rocket
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sparkContainerRef = useRef(null);
  const bubbleContainerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Keep ambient vanilla JS effects for ultimate performance on particles
    const createSpark = () => {
      if (!sparkContainerRef.current) return;
      const spark = document.createElement('div');
      spark.style.position = 'absolute';
      spark.style.width = '2px';
      spark.style.height = '2px';
      spark.style.backgroundColor = '#00f5ff';
      spark.style.boxShadow = '0 0 12px #00f5ff';
      spark.style.borderRadius = '50%';
      spark.style.left = `calc(65% + \${Math.random() * 12 - 6}px)`;
      spark.style.top = `\${Math.random() * 80 + 10}%`;
      spark.animate([
        { opacity: 0, transform: 'scale(0)' },
        { opacity: 1, transform: 'scale(1.5)', offset: 0.2 },
        { opacity: 0, transform: 'scale(0)' }
      ], { duration: 400 + Math.random() * 600 });
      sparkContainerRef.current.appendChild(spark);
      setTimeout(() => spark.remove(), 1000);
    };

    const sparkInterval = setInterval(createSpark, 150);

    const createBubbles = () => {
      if (!bubbleContainerRef.current) return;
      for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const duration = Math.random() * 10 + 10;
        const drift = (Math.random() - 0.5) * 100;
        bubble.className = 'bubble';
        bubble.style.width = `\${size}px`;
        bubble.style.height = `\${size}px`;
        bubble.style.left = `\${Math.random() * 100}%`;
        bubble.style.setProperty('--duration', `\${duration}s`);
        bubble.style.setProperty('--drift', `\${drift}px`);
        bubble.style.animationDelay = `\${Math.random() * 15}s`;
        bubbleContainerRef.current.appendChild(bubble);
      }
    };
    createBubbles();

    return () => clearInterval(sparkInterval);
  }, []);

  useGSAP(() => {
    // Hero Elements Stagger
    gsap.from(".hero-item", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    });

    // Dashboard Widget Entrance
    gsap.from(".widget-container", {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.4,
      ease: "power3.out"
    });

    // Dashboard Widget Bars (Staggered width)
    gsap.fromTo(".widget-bar-1", { width: 0 }, { width: "85%", duration: 1.5, delay: 0.8, ease: "power2.out" });
    gsap.fromTo(".widget-bar-2", { width: 0 }, { width: "95%", duration: 1.5, delay: 1, ease: "power2.out" });
    gsap.fromTo(".widget-bar-3", { width: 0 }, { width: "65%", duration: 1.5, delay: 1.2, ease: "power2.out" });
    
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="flare top-[20%] left-[60%] animate-pulse"></div>
        <div className="conduit"></div>
        <div ref={sparkContainerRef} className="absolute inset-0">
          <div className="underwater-rays"></div>
          <div ref={bubbleContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-abyss pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 w-full py-24">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="hero-item inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/10 mb-8 backdrop-blur-md self-start shadow-[0_0_20px_rgba(0,245,255,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping absolute"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent relative block"></span>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-accent">Status: Reconstruction Protocol Active</span>
          </div>
          
          <h1 className="hero-item text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-[1.05] tracking-tight">
            Stabilizing <br/>Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent animate-gradient relative inline-block">
              Abyssal
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 blur-md"></span>
            </span><br/>Networks
          </h1>
          
          <p className="hero-item text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Engineering resilient deep-infrastructure for the modern frontier. We repair fractured data conduits and transform them into high-performance, unbreakable digital ecosystems.
          </p>
          
          <div className="hero-item flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-accent to-cyan-500 text-primary font-black rounded-2xl text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] active:scale-95 glow-pulse">
              Initiate Protocol <Terminal size={18} strokeWidth={3} />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl text-sm uppercase tracking-widest backdrop-blur-xl transition-all flex items-center justify-center gap-3 hover:scale-105 hover:bg-white/10 active:scale-95">
              View Schematics <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        {/* Right Content / Dashboard Widget */}
        <div className="widget-container hidden lg:flex justify-end items-center lg:col-span-5 relative">
          <div className="neuro-glass p-8 rounded-[2rem] w-full max-w-lg border border-accent/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_30px_rgba(0,245,255,0.1)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"></div>
            
            {/* Header of widget */}
            <div className="flex items-start justify-between mb-10 relative z-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-2xl tracking-tight uppercase flex items-center gap-3">
                  <Database className="text-accent" size={24} /> System Core
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[280px] font-medium">Scalable digital ecosystems deployed safely.</p>
              </div>
              <div className="w-14 h-14 rounded-2xl border border-accent/40 flex items-center justify-center animate-spin-slow bg-accent/10 shadow-[0_0_20px_rgba(0,245,255,0.3)]">
                <Activity className="text-accent" size={24} />
              </div>
            </div>

            {/* Bars */}
            <div className="space-y-6 relative z-10">
              {/* Bar 1 */}
              <div className="p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-accent/50 transition-colors group/item backdrop-blur-md">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <Code size={14} className="text-accent" /> Software Eng
                    </span>
                    <p className="text-[11px] text-slate-500 leading-tight">Custom platforms & logic layers</p>
                  </div>
                  <span className="text-[10px] text-accent font-black uppercase flex items-center gap-1.5 bg-accent/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#00f5ff]"></span> Active
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="widget-bar-1 h-full bg-gradient-to-r from-cyan-600 to-accent shimmer-active"/>
                </div>
              </div>
              
              {/* Bar 2 */}
              <div className="p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-secondary/50 transition-colors backdrop-blur-md">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <CloudLightning size={14} className="text-secondary" /> Infrastructure
                    </span>
                    <p className="text-[11px] text-slate-500 leading-tight">Cloud-ready modern architecture</p>
                  </div>
                  <span className="text-[10px] text-secondary font-black uppercase flex items-center gap-1.5 bg-secondary/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_#6366f1]"></span> Optimized
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="widget-bar-2 h-full bg-gradient-to-r from-indigo-600 to-secondary"/>
                </div>
              </div>

              {/* Bar 3 */}
              <div className="p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-white/30 transition-colors backdrop-blur-md">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs text-white font-bold tracking-widest uppercase flex items-center gap-2">
                      <Globe size={14} className="text-slate-300" /> Growth
                    </span>
                    <p className="text-[11px] text-slate-500 leading-tight">Digital presence scaling</p>
                  </div>
                  <span className="text-[10px] text-slate-300 font-black uppercase flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span> Scaling
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="widget-bar-3 h-full bg-slate-400"/>
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative z-10 flex items-center gap-3 bg-accent/5 p-4 rounded-2xl border border-accent/10">
              <ShieldCheck className="text-accent shrink-0" size={20} />
              <p className="text-[10px] text-slate-400 leading-relaxed font-bold uppercase tracking-wider">
                Enterprise readiness verified. Secure transactions enforcing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);

  const services = [
    { title: "Software Engineering", icon: <Code size={32} />, desc: "Hardened enterprise code bases designed to withstand complex logic environments with absolute stability.", color: "accent" },
    { title: "Edge Infrastructure", icon: <Server size={32} />, desc: "Distributed computing layers that reduce latency to absolute physical minimums in remote sectors.", color: "secondary" },
    { title: "Algorithmic Growth", icon: <Zap size={32} />, desc: "Data-driven marketing engines optimized for precision-targeted scaling and market penetration.", color: "accent" }
  ];

  useGSAP(() => {
    gsap.from(".service-heading", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    gsap.from(".service-card", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-40 bg-abyss relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-24">
          <h2 className="service-heading text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Functional <span className="text-accent">Ecosystems</span>
          </h2>
          <p className="service-heading text-slate-400 text-xl font-light leading-relaxed max-w-2xl">
            Deep-sea digital architecture requires specialized modules, engineered for extreme conditions and peak computational performance.
          </p>
        </div>
        
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card glass p-12 rounded-[2.5rem] group border border-white/5 hover:border-accent/40 hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)] transition-all bg-white/[0.01] hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300 shadow-[0_0_30px_rgba(0,245,255,0.05)] text-accent">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 font-light">{service.desc}</p>
              
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r from-\${service.color}/50 to-\${service.color} transition-all duration-700 ease-out`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImageMaskReveal = () => {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Pin the container and scrub the clip-path of the top image
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Pins for 1.5x screen height to allow scrolling
        scrub: 1,
        pin: true,
      }
    });

    tl.to(maskRef.current, {
      clipPath: "inset(0 100% 0 0)", // Swipes the top image mask from right-to-left
      ease: "none",
    }, 0);

    tl.to(textRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5
    }, 0);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-primary border-t border-b border-white/5">
      {/* Background Image (After / Eonpulse) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img src="/images/eonpulse_quantum_servers.png" alt="Eonpulse Infrastructure" className="object-cover w-full h-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-20 left-10 md:left-24 z-10 max-w-xl">
          <span className="text-xs font-black tracking-[0.4em] text-accent uppercase mb-4 block">Post-Integration</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Stabilized <br/> Ecosystem
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            Quantum-tier architecture providing absolute stability and zero latency.
          </p>
        </div>
      </div>

      {/* Foreground Image with Mask (Before / Messy) */}
      <div 
        ref={maskRef} 
        className="absolute inset-0 w-full h-full z-10"
        style={{ clipPath: "inset(0 0 0 0)" }}
      >
        <img src="/images/messy_legacy_servers.png" alt="Legacy Infrastructure" className="object-cover w-full h-full opacity-60 grayscale contrast-125 saturate-50 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-red-900/10 to-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent"></div>
        
        <div ref={textRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none mt-20">
           <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/50 mb-4 animate-pulse"></div>
           <div className="bg-black/40 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
               <span className="text-white text-xs font-bold tracking-[0.3em] uppercase opacity-70 flex items-center gap-3">
                 Scroll to restructure <ArrowRight size={14} className="animate-bounce-x" />
               </span>
           </div>
        </div>

        <div className="absolute bottom-20 left-10 md:left-24 z-20 max-w-xl">
          <span className="text-xs font-black tracking-[0.4em] text-red-500 uppercase mb-4 block">Pre-Integration</span>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-300 mb-4 leading-tight drop-shadow-lg">
            Legacy <br/> Chaos
          </h2>
          <p className="text-xl md:text-2xl text-red-400 font-light leading-relaxed">
            High-latency, tangled surface-level networks. Unstable logic.
          </p>
        </div>
      </div>
      
      {/* Decorative center line for scrub indicator */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 z-20 hidden md:block"></div>
    </section>
  );
};

const Pipeline = () => {
  const sectionRef = useRef(null);

  const steps = [
    { node: "01", title: "Signal Discovery", icon: <Activity size={24} />, color: "accent", desc: "Identifying systemic weaknesses and architectural opportunities in the existing digital strata using deep-scan telemetry." },
    { node: "02", title: "Architectural Mapping", icon: <Layers size={24} />, color: "secondary", desc: "Synthesizing blueprint solutions that integrate seamlessly with high-trust infrastructure and future-proof logic." },
    { node: "03", title: "Execution & Deployment", icon: <Rocket size={24} />, color: "accent", desc: "High-fidelity construction of software assets and automated cloud deployment via encrypted conduits." }
  ];

  useGSAP(() => {
    // Pipeline Heading
    gsap.from(".pipeline-heading", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%"
      }
    });

    // Vertical line drawing
    gsap.to(".pipeline-line", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".pipeline-track",
        start: "top 60%",
        end: "bottom 80%",
        scrub: true
      }
    });

    // Node items
    const nodes = gsap.utils.toArray(".pipeline-node");
    nodes.forEach((node, i) => {
      const isEven = i % 2 !== 0;
      const textBlock = node.querySelector(".node-text");
      const iconBlock = node.querySelector(".node-icon");
      
      gsap.from(textBlock, {
        opacity: 0,
        x: isEven ? 50 : -50,
        duration: 0.7,
        scrollTrigger: {
          trigger: node,
          start: "top 80%"
        }
      });
      
      gsap.from(iconBlock, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: node,
          start: "top 80%"
        }
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-40 bg-trench relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[80%] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="pipeline-heading text-3xl md:text-5xl font-black text-white mb-32 text-center uppercase tracking-[0.3em]">
          Protocol <span className="text-accent border-b-2 border-accent pb-2">Pipeline</span>
        </h2>
        
        <div className="pipeline-track relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <div className="w-full h-full bg-white/10 relative">
              <div className="pipeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-secondary to-accent shadow-[0_0_15px_rgba(0,245,255,0.5)] h-0"></div>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-0 relative min-h-[600px]">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0;
              
              return (
                <div 
                  key={idx} 
                  className={`pipeline-node flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center justify-between gap-8 md:gap-16 relative z-10 md:pb-32 last:pb-0`}
                  style={{ 
                    marginTop: idx === 0 ? '0' : '-80px' // Negative margin to overlap/stagger on desktop
                  }}
                >
                  
                  {/* Text Content */}
                  <div className={`node-text md:w-[45%] ${!isEven ? 'md:text-right' : 'md:text-left'} bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-sm hover:border-accent/30 transition-colors group ${isEven ? 'md:translate-y-40' : ''}`}>
                    <h4 className={`text-accent text-xs font-black tracking-[0.4em] mb-4 uppercase inline-flex items-center gap-2 ${!isEven ? 'flex-row-reverse' : ''}`}>
                      <span className="w-8 h-px bg-accent/50 block"></span> Node {step.node}
                    </h4>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent transition-all">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  
                  {/* Center Node Icon */}
                  <div className={`node-icon relative shrink-0 hidden md:flex ${isEven ? 'md:translate-y-40' : ''}`}>
                    <div className="w-24 h-24 rounded-full bg-trench border-2 border-accent/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,245,255,0.2)] relative z-20 backdrop-blur-xl">
                      <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping opacity-20"></div>
                      <div className="text-accent">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-[45%] hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const HorizontalWaypoints = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const waypoints = [
    { title: "Strategic Discovery", desc: "Analysis of messy legacy strata to identify signal patterns.", icon: <Globe size={24} />, color: "#00f5ff" },
    { title: "Architecture Forge", desc: "Engineering high-fidelity digital blueprints for zero-latency.", icon: <Layers size={24} />, color: "#7000ff" },
    { title: "Agile Engineering", desc: "Iterative construction of robust software using modern logic.", icon: <Code size={24} />, color: "#00f5ff" },
    { title: "Resilience Testing", desc: "Stress-testing all nodes for absolute stability under load.", icon: <ShieldCheck size={24} />, color: "#7000ff" },
    { title: "Global Activation", desc: "Secure deployment into the stabilized Eonpulse ecosystem.", icon: <Rocket size={24} />, color: "#00f5ff" }
  ];

  useGSAP(() => {
    const panels = gsap.utils.toArray(".waypoint-panel");
    
    // Horizontal Scroll
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        start: "top top",
        end: () => `+=${containerRef.current.offsetWidth}`,
        id: "horizontal-scroll"
      }
    });

    // SVG Path drawing
    gsap.fromTo(pathRef.current, 
      { strokeDashoffset: 1000, strokeDasharray: 1000 },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${containerRef.current.offsetWidth}`,
          scrub: 1,
        }
      }
    );

    // Individual node animations
    panels.forEach((panel, i) => {
      gsap.from(panel.querySelector(".waypoint-content"), {
        opacity: 0,
        y: 50,
        duration: 0.5,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: gsap.getById("horizontal-scroll"), // Note: need to ID the tween
          start: "left center",
          toggleActions: "play none none reverse",
          horizontal: true
        }
      });
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-primary overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-20 left-10 md:left-24 z-10 pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-black text-white/10 uppercase tracking-[0.2em] leading-none">
          Lifecycle <br/> Evolution
        </h2>
      </div>

      <div ref={containerRef} className="flex h-screen" style={{ width: `${waypoints.length * 100}%` }}>
        {waypoints.map((wp, i) => (
          <div key={i} className="waypoint-panel w-screen h-full flex items-center justify-center relative px-6 md:px-20 overflow-hidden">
            
            {/* Connecting Line (SVG) */}
            {i < waypoints.length - 1 && (
              <div className="absolute top-1/2 left-1/2 w-full h-[2px] z-0 hidden lg:block">
                 <svg className="w-full h-20 -translate-y-1/2 pointer-events-none overflow-visible">
                    <path 
                      ref={i === 0 ? pathRef : null}
                      d={`M 0 40 Q ${window.innerWidth / 2} ${i % 2 === 0 ? 0 : 80}, ${window.innerWidth} 40`}
                      fill="none" 
                      stroke="url(#line-gradient)" 
                      strokeWidth="2" 
                      strokeDasharray="10 10"
                      className="opacity-20"
                    />
                    <defs>
                      <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00f5ff" />
                        <stop offset="100%" stopColor="#7000ff" />
                      </linearGradient>
                    </defs>
                 </svg>
              </div>
            )}

            <div className="waypoint-content relative z-10 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <div className="absolute -inset-10 bg-accent/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent relative z-10 backdrop-blur-3xl group">
                    <div className="absolute inset-4 border border-accent/20 rounded-xl animate-pulse"></div>
                    <div className="scale-[2] md:scale-[3]">{wp.icon}</div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 text-8xl font-black text-white/[0.03] select-none">
                    0{i + 1}
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="px-4 py-1 rounded-full border border-accent/20 bg-accent/5 inline-block">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Phase 0{i+1}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{wp.title}</h3>
                  <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                    {wp.desc}
                  </p>
                  <div className="flex items-center gap-6 pt-6">
                    <button className="px-8 py-3 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/40 rounded-full text-xs font-bold text-white uppercase tracking-widest transition-all">
                      Internal Logs
                    </button>
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map(n => (
                        <div key={n} className="w-8 h-8 rounded-full border-2 border-primary bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
                          {n}
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Left side text stagger
    gsap.from(".why-item", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    // Right side widget
    gsap.from(".why-widget", {
      opacity: 0,
      scale: 0.9,
      rotationY: 15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-40 abyssal-fog overflow-hidden border-t border-white/5 relative perspective-[1000px]">
      <div className="depth-haze"></div>
      
      {/* Bio entities floating in background */}
      <div className="bio-entity bio-pulse text-accent top-[10%] left-[5%] opacity-20"><div className="manta-ray"></div></div>
      <div className="bio-entity bio-pulse text-secondary top-[40%] right-[10%] opacity-20"><div className="jelly-form" style={{ transform: 'scale(0.8) rotate(15deg)' }}></div></div>
      <div className="bio-entity bio-pulse text-accent bottom-[20%] left-[15%] opacity-10"><div className="wireframe-cube"></div></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side Text */}
        <div className="lg:col-span-6">
          <h2 className="why-item text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 tracking-tight leading-[1.1]">
            Global Resilience <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Built by Eonpulse</span>
          </h2>
          
          <div className="space-y-8">
            <div className="why-item flex gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-accent/20 transition-all group backdrop-blur-md">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 flex items-center justify-center group-hover:-rotate-12 transition-transform shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                <Globe className="text-accent" size={28} />
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-3">FZ-LLC Regulatory Compliance</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">Full international operational standards within the UAE economic framework, ensuring secure and legal global transactions.</p>
              </div>
            </div>
            
            <div className="why-item flex gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-secondary/20 transition-all group backdrop-blur-md">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                <Cpu className="text-secondary" size={28} />
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-3">Architecture-Led Logic</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">Systems spearheaded by architects, not just engineers. Built to last decades with minimal entropy and absolute maximum stability.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="why-widget neuro-glass p-12 md:p-16 rounded-[4rem] text-center w-full max-w-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-32 h-32 bg-black/40 rounded-full flex items-center justify-center mx-auto mb-10 glow-pulse border border-accent/30 backdrop-blur-md">
                <Server className="text-accent" size={48} strokeWidth={1.5} />
              </div>
              
              <p className="text-2xl md:text-3xl font-bold text-white mb-12 leading-tight">
                Infrastructure built on stable cloud-native foundations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["AWS Core", "Kubernetes", "PostgreSQL", "Rust"].map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <ServicesSection />
      <ImageMaskReveal />
      <Pipeline />
      <HorizontalWaypoints />
      <WhyChooseUs />
    </>
  );
};

export default Home;
