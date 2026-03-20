import React from 'react';

const Testimonial = () => {
  const feedbacks = [
    { author: "DeepNet Dynamics", quote: "The stability of our subsea conduits reached 99.99% after Eonpulse's structural intervention.", role: "Infrastructure Partner" },
    { author: "Nexus Cloud", quote: "Architectural mapping provided by Thorne's team saved us months of deployment cycles.", role: "Global Partner" },
    { author: "Abyssal Labs", quote: "Telemetry precision is unmatched. We now see system weaknesses before they manifest as failures.", role: "Research Division" }
  ];

  return (
    <div className="py-32 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            System <span className="text-accent">Feedback</span>
          </h1>
          <p className="text-slate-400 text-xl font-light leading-relaxed">
            Validation from our global network of infrastructure partners.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((item, idx) => (
            <div key={idx} className="glass p-12 rounded-[2.5rem] scroll-reveal relative">
              <span className="material-symbols-outlined text-accent/20 text-6xl absolute top-8 right-8">format_quote</span>
              <p className="text-white text-lg font-light leading-relaxed mb-10 italic">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent text-sm">hub</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.author}</h4>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
