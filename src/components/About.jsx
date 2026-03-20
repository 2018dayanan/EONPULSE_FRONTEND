import React from 'react';

const About = () => {
  const metrics = [
    { value: '7+', label: 'Years in Subsea Systems', icon: 'timeline' },
    { value: '42', label: 'Deployed Modules', icon: 'memory' },
    { value: '99.98%', label: 'Uptime Target', icon: 'shield' },
    { value: '24/7', label: 'Operations Monitoring', icon: 'monitoring' }
  ];

  const pillars = [
    {
      title: 'Abyss-Grade Reliability',
      desc: 'Built for hostile conditions: pressure, latency, and zero tolerance for failure. We architect systems that remain stable when everything else drifts.',
      icon: 'tungsten'
    },
    {
      title: 'Security by Design',
      desc: 'Threat models first. Encryption everywhere. Least privilege, immutable pipelines, and hardened delivery channels across every layer.',
      icon: 'security'
    },
    {
      title: 'Precision Engineering',
      desc: 'Measured performance, deliberate complexity, and clean interfaces. We build modules that scale without losing clarity.',
      icon: 'architecture'
    }
  ];

  const timeline = [
    {
      year: 'Phase 01',
      title: 'Signal Discovery',
      desc: 'We map your current system strata and identify high-impact stability and performance upgrades.'
    },
    {
      year: 'Phase 02',
      title: 'Protocol Design',
      desc: 'We synthesize a future-proof blueprint: modular, observable, and secure-by-default.'
    },
    {
      year: 'Phase 03',
      title: 'Deployment & Evolution',
      desc: 'We ship hardened infrastructure and iterate with telemetry-driven improvements.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-14 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-8 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl scroll-reveal">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              About <span className="text-accent">EONPULSE</span>
            </h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed">
              We design subsea-grade digital systems: resilient architectures, secure pipelines, and modular infrastructure engineered for extreme environments.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-accent text-primary font-black rounded-xl text-sm uppercase tracking-widest hover:brightness-110 transition-all glow-pulse shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                Start a Project
              </button>
              <button className="px-8 py-3 bg-white/5 text-white font-black rounded-xl text-sm uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10">
                View Protocol
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-14 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <div key={idx} className="glass p-8 rounded-[2rem] border border-white/5 scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-accent">{m.icon}</span>
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">{m.value}</div>
                </div>
                <div className="text-slate-400 text-xs uppercase tracking-[0.25em] font-bold">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Why we build <span className="text-accent">differently</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Our approach blends deep systems thinking with ruthless simplicity. Every module is engineered to be observable, secure, and scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, idx) => (
              <div key={idx} className="glass p-10 rounded-[2.5rem] group scroll-reveal tilt-card border border-white/5 hover:border-accent/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,245,255,0.12)]">
                  <span className="material-symbols-outlined text-accent text-3xl">{p.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-trench relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
              Our <span className="text-accent">protocol</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              A clean, repeatable delivery pipeline designed to minimize risk and maximize clarity from discovery to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((t, idx) => (
              <div key={idx} className="glass p-10 rounded-[2.5rem] scroll-reveal border border-white/5">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4">{t.year}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{t.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="glass p-16 rounded-[3rem] scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Initiate a <span className="text-accent">project</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Tell us what you’re building. We’ll respond with a clear plan, timeline, and a secure deployment protocol.
            </p>
            <button className="px-10 py-4 bg-accent text-primary font-black rounded-2xl text-sm uppercase tracking-widest hover:brightness-110 transition-all glow-pulse shadow-[0_0_24px_rgba(0,245,255,0.45)]">
              Contact Operations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
