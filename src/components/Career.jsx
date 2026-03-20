import React from 'react';

const Career = () => {
  const openings = [
    { title: "Systems Architect", sector: "Infrastructure", level: "Senior" },
    { title: "Data Telemetry Engineer", sector: "Analytics", level: "Mid-Senior" },
    { title: "Security Protocol Lead", sector: "Security", level: "Lead" }
  ];

  return (
    <div className="py-32 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Join the <span className="text-accent">Frontier</span>
          </h1>
          <p className="text-slate-400 text-xl font-light leading-relaxed">
            We are looking for elite operators to help us engineer the stable digital future.
          </p>
        </div>
        
        <div className="space-y-6">
          {openings.map((job, idx) => (
            <div key={idx} className="neuro-glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all flex flex-col md:flex-row items-center justify-between gap-8 scroll-reveal">
              <div className="flex items-center gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent">terminal</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{job.title}</h3>
                  <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>Sector: {job.sector}</span>
                    <span className="text-accent">Level: {job.level}</span>
                  </div>
                </div>
              </div>
              <button className="w-full md:w-auto px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                View Protocol
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
