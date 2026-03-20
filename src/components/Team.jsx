import React from 'react';

const Team = () => {
  const members = [
    { name: "Alex Rivers", role: "Chief Systems Architect", icon: "architecture" },
    { name: "Sarah Chen", role: "Lead Infrastructure Engineer", icon: "terminal" },
    { name: "Marcus Thorne", role: "Head of Security Protocols", icon: "security" },
    { name: "Elena Vance", role: "Data Telemetry Specialist", icon: "monitoring" },
    { name: "Julian Marsh", role: "Edge Computing Lead", icon: "settings_input_component" },
    { name: "Sophia Rhee", role: "Interface Architect", icon: "grid_view" }
  ];

  return (
    <div className="py-32 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            The <span className="text-accent">Architects</span>
          </h1>
          <p className="text-slate-400 text-xl font-light leading-relaxed">
            A specialized collective engineering the resilient deep-infrastructure of the digital frontier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {members.map((member, idx) => (
            <div key={idx} className="neuro-glass p-8 rounded-3xl group scroll-reveal tilt-card border border-white/5 hover:border-accent/30 transition-all text-center">
              <div className="w-24 h-24 rounded-full bg-accent/5 border border-accent/20 flex items-center justify-center mx-auto mb-8 glow-pulse group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-accent text-4xl">{member.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-accent text-xs font-black uppercase tracking-[0.2em] mb-6">{member.role}</p>
              <div className="h-[1px] w-12 bg-accent/30 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
