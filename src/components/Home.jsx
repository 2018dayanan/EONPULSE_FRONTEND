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
            Stabilizing <br />Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent animate-gradient relative inline-block">
              Abyssal
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 blur-md"></span>
            </span><br />Networks
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
                  <div className="widget-bar-1 h-full bg-gradient-to-r from-cyan-600 to-accent shimmer-active" />
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
                  <div className="widget-bar-2 h-full bg-gradient-to-r from-indigo-600 to-secondary" />
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
                  <div className="widget-bar-3 h-full bg-slate-400" />
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
            Stabilized <br /> Ecosystem
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
            Legacy <br /> Chaos
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

const ZigZagProcessWaypoints = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const svgRef = useRef(null);
  const markerRef = useRef(null);
  const dotRefs = useRef([]);
  const cardRefs = useRef([]);

  const steps = [
    { id: '01', title: 'Plan', icon: <Globe size={22} />, desc: 'Identify systemic weaknesses and architectural opportunities using deep-scan telemetry protocols.', side: 'right' },
    { id: '02', title: 'Design', icon: <Layers size={22} />, desc: 'Synthesize blueprint solutions integrating seamlessly with high-trust infrastructure layers.', side: 'left' },
    { id: '03', title: 'Develop', icon: <Code size={22} />, desc: 'High-fidelity construction of software assets and automated cloud deployment via encrypted conduits.', side: 'right' },
    { id: '04', title: 'Deploy', icon: <Rocket size={22} />, desc: 'Precision execution with zero-downtime deployment strategies and post-launch monitoring.', side: 'left' }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        id: "zigzag-scroll-sync"
      }
    });

    // Helper to get relative positions for the marker and SVG
    const getPos = (i) => {
      const card = cardRefs.current[i];
      const track = trackRef.current;
      if (!card || !track) return { x: 0, y: 0 };
      const cr = card.getBoundingClientRect();
      const tr = track.getBoundingClientRect();
      // Use center of card
      return {
        x: cr.left - tr.left + cr.width / 2,
        y: cr.top - tr.top + cr.height / 2
      };
    };

    // Build the SVG path string
    const buildPath = () => {
      const points = steps.map((_, i) => getPos(i));
      if (points.length < 2) return "";
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midY = (prev.y + curr.y) / 2;
        d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
      }
      return d;
    };

    // Initial SVG setup
    const fullPathD = buildPath();
    const bgPath = svgRef.current.querySelector("#path-bg");
    const glowPath = svgRef.current.querySelector("#path-glow");
    if (bgPath) bgPath.setAttribute("d", fullPathD);
    if (glowPath) glowPath.setAttribute("d", fullPathD);

    // Animate the marker along the path
    // Since we don't have MotionPath plugin guaranteed, we'll animate between discrete points
    // and use the same easing to simulate the curve or just direct translation.
    // For a zig-zag, we'll go step by step.

    steps.forEach((step, i) => {
      if (i > 0) {
        const pos = getPos(i);
        tl.to(markerRef.current, {
          left: pos.x - 16,
          top: pos.y - 16,
          duration: 1,
          ease: "power2.inOut"
        }, i - 1);
      }

      // Activate cards and dots
      tl.to(cardRefs.current[i], {
        borderColor: "#00f5ff",
        backgroundColor: "rgba(0, 245, 255, 0.08)",
        boxShadow: "0 0 20px rgba(0, 245, 255, 0.15)",
        scale: 1.02,
        duration: 0.5
      }, i === 0 ? 0 : i - 0.5);

      tl.to(dotRefs.current[i], {
        borderColor: "#00f5ff",
        scale: 1.3,
        duration: 0.5
      }, i === 0 ? 0 : i - 0.5);
    });

    // Animate stroke dash of the glow path
    const pathLength = glowPath.getTotalLength();
    gsap.set(glowPath, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
    // Header Scan Animation
    tl.fromTo(".scanner-line", 
      { left: "-10%" },
      { left: "110%", duration: steps.length, ease: "none" },
      0
    );

    tl.fromTo(".title-text-solid",
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", duration: steps.length, ease: "none" },
      0
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#03070f] py-24 overflow-hidden border-t border-b border-white/5 h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00f5ff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.015] font-black uppercase text-[12vw] whitespace-nowrap pointer-events-none select-none z-0">
        LIFECYCLE
      </div>

      {/* Floating Status Badge */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-20">
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
        <div className="rotate-[-90deg] origin-center whitespace-nowrap py-4">
          <span className="font-mono text-[10px] text-accent font-bold tracking-[0.6em] uppercase flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping absolute opacity-50" />
            <span className="w-2 h-2 rounded-full bg-accent relative shadow-[0_0_15px_#00f5ff]" />
            Protocol Locked
          </span>
        </div>
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full px-6 flex flex-col items-center">
        <div className="text-center mb-16 mt-20 relative group">
          <div className="relative inline-block">
            {/* Background Outline Version */}
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white/5 absolute inset-0 select-none">
              Development <span className="italic font-light" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)', color: 'transparent' }}>Waypoints</span>
            </h2>
            
            {/* Foreground Solid Version (Clipped) */}
            <h2 className="title-text-solid text-4xl md:text-7xl font-black uppercase tracking-tighter text-white relative z-10">
              Development <span className="text-accent italic font-light">Waypoints</span>
            </h2>

            {/* Scanning Line */}
            <div className="scanner-line absolute top-0 bottom-0 w-1 bg-accent z-20 shadow-[0_0_20px_#00f5ff] pointer-events-none">
              <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#00f5ff]" />
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_#00f5ff]" />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        </div>

        <div ref={trackRef} className="relative w-full max-w-4xl min-h-[500px]">
          {/* SVG Connector */}
          <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <path id="path-bg" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="8 8" />
            <path id="path-glow" fill="none" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
          </svg>

          {/* Moving Marker */}
          <div
            ref={markerRef}
            className="absolute w-8 h-8 rounded-full z-30 pointer-events-none flex items-center justify-center border-2 border-accent shadow-[0_0_20px_#00f5ff]"
            style={{ background: 'rgba(0,245,255,0.2)' }}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          </div>

          {/* Steps Display */}
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={i} className={`flex items-center relative ${step.side === 'left' ? 'justify-start' : 'justify-end'}`}>

                {/* The Card */}
                <div
                  ref={el => cardRefs.current[i] = el}
                  className="relative w-[260px] md:w-[320px] glass p-6 rounded-3xl border border-white/5 backdrop-blur-3xl group transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="font-mono text-[9px] tracking-[0.3em] text-accent/50">PHASE {step.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors tracking-tight">{step.title}</h3>
                  <p className="text-slate-400 font-light text-[11px] leading-relaxed line-clamp-2">{step.desc}</p>
                </div>

                {/* The Dot (Anchor) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    ref={el => dotRefs.current[i] = el}
                    className="w-3 h-3 rounded-full border-2 border-white/20 bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
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
            Global Resilience <br />
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
      <ZigZagProcessWaypoints />
      <WhyChooseUs />
    </>
  );
};

export default Home;
