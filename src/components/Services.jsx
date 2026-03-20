import React from 'react';

const Services = () => {
  const services = [
    { title: "Software Engineering", icon: "terminal", desc: "Hardened enterprise code bases designed to withstand complex logic environments with absolute stability.", color: "accent" },
    { title: "Edge Infrastructure", icon: "cloud_off", desc: "Distributed computing layers that reduce latency to absolute physical minimums in remote sectors.", color: "secondary" },
    { title: "Algorithmic Growth", icon: "insights", desc: "Data-driven marketing engines optimized for precision-targeted scaling and market penetration.", color: "accent" },
    { title: "Cloud Native Systems", icon: "cloud", desc: "Scalable architecture built for modern cloud environments with high availability.", color: "secondary" },
    { title: "Security Architecture", icon: "security", desc: "End-to-end security protocols protecting critical digital infrastructure from the core up.", color: "accent" },
    { title: "Data Telemetry", icon: "analytics", desc: "Deep-scan telemetry and analytics providing real-time visibility into system performance.", color: "secondary" }
  ];

  return (
    <div className="py-32 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Digital <span className="text-accent">Solutions</span>
          </h1>
          <p className="text-slate-400 text-xl font-light leading-relaxed">
            Our specialized modules are engineered for extreme performance and absolute stability in the most demanding digital environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="glass p-12 rounded-[2.5rem] group scroll-reveal tilt-card border border-white/5 hover:border-accent/30 transition-all">
              <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 border border-${service.color}/20 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,245,255,0.1)]`}>
                <span className="material-symbols-outlined text-accent text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
              <div className={`h-[1px] w-full bg-gradient-to-r from-${service.color}/50 to-transparent`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
