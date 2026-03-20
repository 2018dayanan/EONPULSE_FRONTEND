import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Terminal, Server, Code, Zap, ArrowRight, ShieldCheck,
  Globe, Database, CloudLightning, Activity, Cpu, Layers, Rocket
} from 'lucide-react';

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const Hero = () => {
  const sparkContainerRef = useRef(null);
  const bubbleContainerRef = useRef(null);

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
      spark.style.left = `calc(65% + ${Math.random() * 12 - 6}px)`;
      spark.style.top = `${Math.random() * 80 + 10}%`;
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
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.setProperty('--duration', `${duration}s`);
        bubble.style.setProperty('--drift', `${drift}px`);
        bubble.style.animationDelay = `${Math.random() * 15}s`;
        bubbleContainerRef.current.appendChild(bubble);
      }
    };
    createBubbles();

    return () => clearInterval(sparkInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/10 mb-8 backdrop-blur-md self-start shadow-[0_0_20px_rgba(0,245,255,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping absolute"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-accent relative block"></span>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-accent">Status: Reconstruction Protocol Active</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-[1.05] tracking-tight">
            Stabilizing <br />Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent animate-gradient relative inline-block">
              Abyssal
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent/30 blur-md"></span>
            </span><br />Networks
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-light">
            Engineering resilient deep-infrastructure for the modern frontier. We repair fractured data conduits and transform them into high-performance, unbreakable digital ecosystems.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,245,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-accent to-cyan-500 text-primary font-black rounded-2xl text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all glow-pulse"
            >
              Initiate Protocol <Terminal size={18} strokeWidth={3} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl text-sm uppercase tracking-widest backdrop-blur-xl transition-all flex items-center justify-center gap-3"
            >
              View Schematics <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content / Dashboard Widget */}
        <motion.div
          className="hidden lg:flex justify-end items-center lg:col-span-5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
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
                  <motion.div
                    initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-full bg-gradient-to-r from-cyan-600 to-accent shimmer-active"
                  />
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
                  <motion.div
                    initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-secondary"
                  />
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
                  <motion.div
                    initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1.5, delay: 1.2 }}
                    className="h-full bg-slate-400"
                  />
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
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "Software Engineering", icon: <Code size={32} />, desc: "Hardened enterprise code bases designed to withstand complex logic environments with absolute stability.", color: "accent", delay: 0 },
    { title: "Edge Infrastructure", icon: <Server size={32} />, desc: "Distributed computing layers that reduce latency to absolute physical minimums in remote sectors.", color: "secondary", delay: 0.2 },
    { title: "Algorithmic Growth", icon: <Zap size={32} />, desc: "Data-driven marketing engines optimized for precision-targeted scaling and market penetration.", color: "accent", delay: 0.4 }
  ];

  return (
    <section className="py-40 bg-abyss relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Functional <span className="text-accent">Ecosystems</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-400 text-xl font-light leading-relaxed max-w-2xl">
            Deep-sea digital architecture requires specialized modules, engineered for extreme conditions and peak computational performance.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: service.delay }}
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-[2.5rem] group border border-white/5 hover:border-accent/40 hover:shadow-[0_20px_40px_rgba(0,245,255,0.1)] transition-all bg-white/[0.01]"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300 shadow-[0_0_30px_rgba(0,245,255,0.05)] text-accent">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed mb-10 font-light">{service.desc}</p>

              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r from-${service.color}/50 to-${service.color} transition-all duration-700 ease-out`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pipeline = () => {
  const steps = [
    { node: "01", title: "Signal Discovery", icon: <Activity size={24} />, color: "accent", desc: "Identifying systemic weaknesses and architectural opportunities in the existing digital strata using deep-scan telemetry." },
    { node: "02", title: "Architectural Mapping", icon: <Layers size={24} />, color: "secondary", desc: "Synthesizing blueprint solutions that integrate seamlessly with high-trust infrastructure and future-proof logic." },
    { node: "03", title: "Execution & Deployment", icon: <Rocket size={24} />, color: "accent", desc: "High-fidelity construction of software assets and automated cloud deployment via encrypted conduits." }
  ];

  return (
    <section className="py-40 bg-trench relative">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[80%] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white mb-32 text-center uppercase tracking-[0.3em]"
        >
          Protocol <span className="text-accent border-b-2 border-accent pb-2">Pipeline</span>
        </motion.h2>

        <div className="relative">
          {/* Animated Central Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <div className="w-full h-full bg-white/10 relative">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-secondary to-accent shadow-[0_0_15px_rgba(0,245,255,0.5)]"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>

          <div className="space-y-24 md:space-y-40">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0; // index 1 is even visual side (right to left)

              return (
                <div key={idx} className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center justify-between gap-8 md:gap-16 relative z-10`}>

                  {/* Text Content */}
                  <motion.div
                    className={`md:w-[45%] ${!isEven ? 'md:text-right' : 'md:text-left'} bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-sm hover:border-accent/30 transition-colors group`}
                    initial={{ opacity: 0, x: !isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                  >
                    <h4 className={`text-accent text-xs font-black tracking-[0.4em] mb-4 uppercase inline-flex items-center gap-2 ${!isEven ? 'flex-row-reverse' : ''}`}>
                      <span className="w-8 h-px bg-accent/50 block"></span> Node {step.node}
                    </h4>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accent transition-all">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Center Node Icon */}
                  <motion.div
                    className="relative shrink-0 hidden md:flex"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  >
                    <div className="w-24 h-24 rounded-full bg-trench border-2 border-accent/40 flex items-center justify-center shadow-[0_0_40px_rgba(0,245,255,0.2)] relative z-20 backdrop-blur-xl">
                      <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping opacity-20"></div>
                      <div className="text-accent">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>

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

const WhyChooseUs = () => {
  return (
    <section className="py-40 abyssal-fog overflow-hidden border-t border-white/5 relative">
      <div className="depth-haze"></div>

      {/* Bio entities floating in background */}
      <div className="bio-entity bio-pulse text-accent top-[10%] left-[5%] opacity-20"><div className="manta-ray"></div></div>
      <div className="bio-entity bio-pulse text-secondary top-[40%] right-[10%] opacity-20"><div className="jelly-form" style={{ transform: 'scale(0.8) rotate(15deg)' }}></div></div>
      <div className="bio-entity bio-pulse text-accent bottom-[20%] left-[15%] opacity-10"><div className="wireframe-cube"></div></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Side Text */}
        <motion.div
          className="lg:col-span-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 tracking-tight leading-[1.1]">
            Global Resilience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Built by Eonpulse</span>
          </motion.h2>

          <div className="space-y-8">
            <motion.div variants={fadeUp} className="flex gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-accent/20 transition-all group backdrop-blur-md">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 flex items-center justify-center group-hover:-rotate-12 transition-transform shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                <Globe className="text-accent" size={28} />
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-3">FZ-LLC Regulatory Compliance</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">Full international operational standards within the UAE economic framework, ensuring secure and legal global transactions.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-8 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-secondary/20 transition-all group backdrop-blur-md">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                <Cpu className="text-secondary" size={28} />
              </div>
              <div>
                <h4 className="text-white text-xl font-bold mb-3">Architecture-Led Logic</h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">Systems spearheaded by architects, not just engineers. Built to last decades with minimal entropy and absolute maximum stability.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Card */}
        <motion.div
          className="lg:col-span-6 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="neuro-glass p-12 md:p-16 rounded-[4rem] text-center w-full max-w-lg relative overflow-hidden group">
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
        </motion.div>

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
      <Pipeline />
      <WhyChooseUs />
    </>
  );
};

export default Home;
