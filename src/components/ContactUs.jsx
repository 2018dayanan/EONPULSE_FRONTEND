import React from 'react';

const ContactUs = () => {
  return (
    <div className="py-32 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
            Initiate <span className="text-accent">Protocol</span>
          </h1>
          <p className="text-slate-400 text-xl font-light leading-relaxed mb-12">
            Establish a secure connection with our engineering team to start your next infrastructure project.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent">alternate_email</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Secure Channel</p>
                <p className="text-white font-medium">comms@eonpulse.tech</p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">location_on</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Physical Presence</p>
                <p className="text-white font-medium">Ras Al Khaimah, UAE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="neuro-glass p-10 rounded-[2.5rem] border border-white/10 scroll-reveal">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Operator Identity</label>
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent/50 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Signal Destination</label>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent/50 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Transmission Data</label>
              <textarea placeholder="Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent/50 transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-accent text-primary font-black rounded-2xl text-xs uppercase tracking-[0.3em] hover:brightness-110 transition-all glow-pulse">
              Transmit Signal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
