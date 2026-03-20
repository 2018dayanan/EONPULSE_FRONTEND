import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const sparkContainerRef = useRef(null);
  const bubbleContainerRef = useRef(null);

  useEffect(() => {
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="flare top-[20%] left-[60%] animate-pulse"></div>
        <div className="conduit"></div>
        <div ref={sparkContainerRef} className="absolute inset-0">
          <div className="underwater-rays"></div>
          <div ref={bubbleContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-abyss pointer-events-none"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 w-full py-20">
        <div className="parallax-layer" data-speed="0.05">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 backdrop-blur-md reveal-item" style={{ animationDelay: '0.5s' }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent">Status: Reconstruction Protocol Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-10 text-white reveal-item delay-headline">
            Stabilizing <br/>Digital <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-400 to-accent animate-gradient">Abyssal</span><br/>Networks
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-light reveal-item delay-subtext">
            Engineering resilient deep-infrastructure for the modern frontier, repairing fractured data conduits into high-performance digital ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 reveal-item delay-cta">
            <button className="w-full sm:w-auto px-10 py-5 bg-accent text-primary font-black rounded-xl text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all glow-pulse">
              Initiate Protocol <span className="material-symbols-outlined">settings_input_component</span>
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-sm uppercase tracking-widest backdrop-blur-xl hover:bg-white/10 transition-all">
              View Schematics
            </button>
          </div>
        </div>
        
        <div className="hidden lg:flex justify-end items-center parallax-layer" data-speed="0.15">
          <div className="neuro-glass p-10 rounded-3xl w-full max-w-lg tilt-card border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_0_20px_rgba(0,245,255,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none rounded-3xl"></div>
            <div className="absolute inset-[1px] bg-gradient-to-b from-white/10 to-transparent opacity-20 rounded-3xl pointer-events-none"></div>
            <div className="flex items-start justify-between mb-10 relative z-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-white font-bold text-2xl tracking-tight uppercase">Digital System Core</h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[280px] font-medium">Engineered to transform complex ideas into scalable digital ecosystems.</p>
              </div>
              <div className="w-12 h-12 rounded-2xl border border-accent/30 flex items-center justify-center animate-spin-slow bg-accent/5 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                <span className="material-symbols-outlined text-accent text-lg">sync</span>
              </div>
            </div>
            <div className="space-y-5 relative z-10">
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-accent/40 transition-all group/item shadow-inner">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-white font-bold tracking-widest uppercase">Software Engineering</span>
                    <p className="text-[10px] text-slate-500 leading-tight">Custom platforms, automation systems, and production-ready digital solutions.</p>
                  </div>
                  <span className="text-[9px] text-accent font-black uppercase flex items-center gap-1.5 bg-accent/10 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#00f5ff]"></span> Active
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
                  <div className="w-[85%] h-full bg-gradient-to-r from-accent/50 to-accent shimmer-active"></div>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-secondary/40 transition-all shadow-inner">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-white font-bold tracking-widest uppercase">Digital Infrastructure</span>
                    <p className="text-[10px] text-slate-500 leading-tight">Web platforms, cloud-ready systems, and modern application architecture.</p>
                  </div>
                  <span className="text-[9px] text-secondary font-black uppercase flex items-center gap-1.5 bg-secondary/10 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_#6366f1]"></span> Optimized
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
                  <div className="w-[92%] h-full bg-secondary"></div>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.07] hover:border-accent/40 transition-all shadow-inner">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] text-white font-bold tracking-widest uppercase">Growth Enablement</span>
                    <p className="text-[10px] text-slate-500 leading-tight">Brand systems, digital presence, and scalable online growth support.</p>
                  </div>
                  <span className="text-[9px] text-accent/50 font-black uppercase flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-accent/40 rounded-full"></span> Scaling
                  </span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-4">
                  <div className="w-[70%] h-full bg-accent/20"></div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-white/5 relative z-10">
              <p className="text-[9px] text-slate-500 leading-relaxed font-medium uppercase tracking-wider">
                UAE-registered technology company delivering scalable engineering, digital infrastructure, and long-term business support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => (
  <section className="py-48 bg-abyss relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent"></div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl mb-32 scroll-reveal">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Functional <span className="text-accent">Ecosystems</span></h2>
        <p className="text-slate-400 text-xl font-light leading-relaxed">Deep-sea digital architecture requires specialized modules, engineered for extreme conditions and peak performance.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Software Engineering", icon: "terminal", desc: "Hardened enterprise code bases designed to withstand complex logic environments with absolute stability.", color: "accent" },
          { title: "Edge Infrastructure", icon: "cloud_off", desc: "Distributed computing layers that reduce latency to absolute physical minimums in remote sectors.", color: "secondary" },
          { title: "Algorithmic Growth", icon: "insights", desc: "Data-driven marketing engines optimized for precision-targeted scaling and market penetration.", color: "accent" }
        ].map((service, idx) => (
          <div key={idx} className="glass p-12 rounded-[2.5rem] group scroll-reveal tilt-card">
            <div className={`w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,245,255,0.1)]`}>
              <span className="material-symbols-outlined text-accent text-3xl">{service.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
            <div className={`h-[1px] w-full bg-gradient-to-r from-accent/50 to-transparent`}></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pipeline = () => (
  <section className="py-48 bg-trench relative">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-40 text-center scroll-reveal uppercase tracking-[0.3em]">Protocol Pipeline</h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 w-px h-[calc(100%-80px)] -translate-x-1/2 hidden md:block">
          <svg className="w-full h-full" height="100%" width="2">
            <line stroke="rgba(0, 245, 255, 0.2)" strokeDasharray="10,10" strokeWidth="2" x1="1" x2="1" y1="0" y2="100%"></line>
            <line className="path-animate" stroke="rgba(0, 245, 255, 0.6)" strokeWidth="2" x1="1" x2="1" y1="0" y2="100%"></line>
          </svg>
        </div>
        <div className="space-y-52">
          {[
            { node: "01", title: "Signal Discovery", color: "accent", desc: "Identifying systemic weaknesses and architectural opportunities in the existing digital strata using deep-scan telemetry.", reverse: false },
            { node: "02", title: "Architectural Mapping", color: "secondary", desc: "Synthesizing blueprint solutions that integrate seamlessly with high-trust infrastructure and future-proof logic.", reverse: true },
            { node: "03", title: "Execution & Deployment", color: "accent", desc: "High-fidelity construction of software assets and automated cloud deployment via encrypted conduits.", reverse: false }
          ].map((step, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row ${step.reverse ? 'md:flex-row-reverse' : ''} items-center justify-between gap-10 group scroll-reveal`}>
              <div className={`md:w-1/2 ${!step.reverse ? 'md:text-right' : ''}`}>
                <h4 className={`text-${step.color} text-[10px] font-black tracking-[0.5em] mb-4 uppercase`}>Node {step.node}</h4>
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className={`text-slate-500 max-w-sm ${!step.reverse ? 'ml-auto' : ''} font-light leading-relaxed`}>{step.desc}</p>
              </div>
              <div className="relative z-10">
                <div className={`w-20 h-20 rounded-full bg-trench border border-${step.color}/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,245,255,0.2)]`}>
                  {idx === 0 ? <div className="w-3 h-3 rounded-full bg-accent animate-ping"></div> : 
                   idx === 1 ? <div className="w-5 h-5 rounded-sm border border-secondary animate-spin-slow"></div> :
                   <span className="material-symbols-outlined text-accent text-2xl">bolt</span>}
                </div>
              </div>
              <div className="md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-48 abyssal-fog overflow-hidden border-t border-white/5">
    <div className="depth-haze"></div>
    <div className="bio-entity bio-pulse text-accent top-[10%] left-[5%] parallax-layer" data-speed="0.04">
      <div className="manta-ray"></div>
    </div>
    <div className="bio-entity bio-pulse text-secondary top-[40%] right-[10%] parallax-layer" data-speed="0.06">
      <div className="jelly-form" style={{ transform: 'scale(0.8) rotate(15deg)' }}></div>
    </div>
    <div className="bio-entity bio-pulse text-accent bottom-[20%] left-[15%] parallax-layer" data-speed="0.02">
      <div className="wireframe-cube"></div>
    </div>
    <div className="bio-entity bio-pulse text-secondary bottom-[10%] right-[30%] parallax-layer" data-speed="0.05">
      <div className="manta-ray" style={{ transform: 'scale(0.6) rotate(-10deg)' }}></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
      <div className="scroll-reveal">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-12 tracking-tight">Global Resilience <br/><span className="text-accent">Built by Eonpulse</span></h2>
        <div className="space-y-8">
          {[
            { title: "FZ-LLC Regulatory Compliance", icon: "verified", desc: "Full international operational standards within the UAE economic framework, ensuring secure global transactions.", color: "accent" },
            { title: "Architecture-Led Logic", icon: "security", desc: "Systems spearheaded by architects, not just engineers. Built to last decades with minimal entropy.", color: "secondary" }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group backdrop-blur-sm">
              <div className={`shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                <span className={`material-symbols-outlined text-accent`}>{item.icon}</span>
              </div>
              <div>
                <h4 className="text-white text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative scroll-reveal">
        <div className="neuro-glass p-16 rounded-[4rem] text-center border border-accent/20 tilt-card">
          <div className="w-28 h-28 bg-accent/5 rounded-full flex items-center justify-center mx-auto mb-12 glow-pulse border border-accent/20">
            <span className="material-symbols-outlined text-accent text-6xl">database</span>
          </div>
          <p className="text-2xl font-bold text-white mb-10 leading-tight">Infrastructure built on stable cloud-native foundations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["AWS Core", "Kubernetes", "PostgreSQL", "Rust"].map((tech, idx) => (
              <span key={idx} className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400 font-bold tracking-widest uppercase hover:border-accent/40 transition-colors">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
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
