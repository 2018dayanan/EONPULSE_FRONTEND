import React from 'react';

const Footer = () => (
  <footer className="abyssal-fog pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
    <div className="depth-haze opacity-50"></div>
    <div className="bio-entity bio-pulse text-secondary top-20 right-[20%] parallax-layer" data-speed="0.03">
      <div className="jelly-form" style={{ transform: 'scale(0.5) rotate(-20deg)' }}></div>
    </div>
    <div className="bio-entity bio-pulse text-accent bottom-10 left-[10%] parallax-layer" data-speed="0.01">
      <div className="manta-ray" style={{ transform: 'scale(0.4) rotate(5deg)' }}></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center shadow-[0_0_15px_rgba(0,245,255,0.4)]">
              <span className="material-symbols-outlined text-primary text-sm font-bold">bolt</span>
            </div>
            <h2 className="text-lg font-bold tracking-tighter text-white">EONPULSE</h2>
          </div>
          <p className="text-slate-500 text-[10px] leading-loose uppercase tracking-[0.3em] mb-8 font-bold">
            Architecting the stable digital future from the core up.
          </p>
          <div className="flex gap-4">
            <a className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all" href="#"><span className="material-symbols-outlined">podcasts</span></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-black text-[10px] tracking-[0.5em] mb-10 uppercase opacity-60">Solutions</h4>
          <ul className="space-y-5 text-xs font-bold text-slate-500 tracking-[0.2em] uppercase">
            <li><a className="hover:text-accent transition-colors" href="#">Engineering</a></li>
            <li><a className="hover:text-accent transition-colors" href="#">Deployment</a></li>
            <li><a className="hover:text-accent transition-colors" href="#">Stability</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black text-[10px] tracking-[0.5em] mb-10 uppercase opacity-60">Presence</h4>
          <p className="text-slate-500 text-xs leading-loose tracking-[0.2em] uppercase font-bold">
            Eonpulse Tech FZ-LLC<br/>
            RAKEZ Free Zone, Al Hamra<br/>
            Ras Al Khaimah, UAE
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <div className="w-full h-36 rounded-2xl glass overflow-hidden border border-white/10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-crosshair">
            <div className="w-full h-full bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBx7sn7Y9TZIWF6kTlUal0Av868hi2qBLXJW1Dy1JTsM9p_F4ybGUC7XVlUDF53nnbQRbHIEYoi9SojHyPeYafFohI3Rbw_x4x0a6b48-gB_W-EFHgfeSvf5XuZWBch8ksld9P-C1a0Tu00mxSucRw_qlv-9n5T4LrFlxZ9ukNLxuFl0ygT1DodwdGjoudUNAzzPzlIZr6hqir9UQuw7iav3RLYRvziSgtiQmAxgBQC4ePkMBKzu3Su0-6VJF6Rcjo5GAF43B-Bz5Q')] bg-cover bg-center scale-110 hover:scale-100 transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-slate-600 text-[9px] font-black tracking-[0.5em] uppercase">
          © 2024 EONPULSE TECH FZ-LLC. DEEP-SEA DIGITAL INFRASTRUCTURE.
        </p>
        <div className="flex gap-10 text-[9px] text-slate-600 font-black tracking-[0.4em] uppercase">
          <a className="hover:text-slate-400 transition-colors" href="#">Privacy</a>
          <a className="hover:text-slate-400 transition-colors" href="#">Compliance</a>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-accent/[0.03] blur-[150px] rounded-full pointer-events-none"></div>
  </footer>
);

export default Footer;
