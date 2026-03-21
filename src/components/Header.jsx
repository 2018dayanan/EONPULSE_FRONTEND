import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHub, setIsHub] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setIsHub(currentScrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contactus' },
    { name: 'Testimonial', path: '/testimonial' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <>
      <style>{`
        .header-root {
          position: fixed;
          top: 0;
          z-index: 1000;
          width: 100%;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top right;
        }

        /* ── Hub Mode Transformations ── */
        .header-root.hub-mode {
          width: 100%;
          height: 0;
          top: 0;
          left: 0;
          right: 0;
          background: transparent;
        }

        .hub-logo-orb, .hub-menu-orb {
          position: fixed;
          top: 24px;
          width: 50px;
          height: 50px;
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(5, 11, 22, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 245, 255, 0.3);
          box-shadow: 0 0 30px rgba(0, 245, 255, 0.2);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2000;
          opacity: 0;
          pointer-events: none;
        }

        .hub-logo-orb { left: 24px; transform: translateX(-100px); }
        .hub-menu-orb { right: 24px; transform: translateX(100px); pointer-events: auto; }

        .hub-mode .hub-logo-orb { opacity: 1; transform: translateX(0); pointer-events: auto; }
        .hub-mode .hub-menu-orb { opacity: 1; transform: translateX(0); }

        .hub-menu-orb.expanded {
          width: auto;
          border-radius: 12px;
          padding-right: 15px;
          padding-left: 10px;
        }

        .hub-mode .header-bar {
          opacity: 0;
          pointer-events: none;
        }

        /* Disable hub mode constraints when drawer is open */
        .header-root.drawer-open {
          width: 100vw !important;
          height: 100vh !important;
          height: 100dvh !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          border-radius: 0 !important;
          background: rgba(5, 11, 22, 0.98) !important;
          transform: none !important;
        }

        .header-bar {
          background: rgba(8, 17, 34, 0.92);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid rgba(0, 245, 255, 0.10);
          transition: all 0.6s ease;
          width: 100%;
          height: 100%;
        }
        .header-bar.scrolled {
          background: rgba(5, 11, 22, 0.97);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0,245,255,0.15);
        }

        .header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── Logo ── */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-icon {
          width: 40px; height: 40px;
          background: linear-gradient(135deg, #00f5ff 0%, #6366f1 100%);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 18px rgba(0,245,255,0.35);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          flex-shrink: 0;
        }
        .logo-link:hover .logo-icon {
          transform: scale(1.08) rotate(-3deg);
          box-shadow: 0 0 28px rgba(0,245,255,0.55);
        }
        .logo-icon span {
          font-size: 20px;
          color: #050b16;
          font-variation-settings: 'FILL' 1, 'wght' 700;
        }
        .logo-text-wrap { display: flex; flex-direction: column; line-height: 1; }
        .logo-name {
          font-family: 'Space Grotesk', 'Syne', sans-serif;
          font-size: 1.15rem; font-weight: 800;
          letter-spacing: -0.04em; color: #fff;
          line-height: 1.1;
        }
        .logo-sub {
          font-size: 0.48rem; font-weight: 900;
          letter-spacing: 0.35em; text-transform: uppercase;
          color: #00f5ff; margin-top: 2px;
        }

        /* ── Desktop nav ── */
        .desktop-nav { 
          display: none; 
          align-items: center; 
          gap: 0.25rem; 
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        @media (min-width: 768px) { .desktop-nav { display: flex; } }

        .nav-link {
          position: relative;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(148,163,184,0.85);
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 0; height: 2px;
          background: linear-gradient(90deg, #00f5ff, #6366f1);
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #00f5ff; background: rgba(0,245,255,0.06); }
        .nav-link:hover::after { width: calc(100% - 1.8rem); }
        .nav-link.active {
          color: #00f5ff;
          background: rgba(0,245,255,0.10);
          box-shadow: inset 0 0 0 1px rgba(0,245,255,0.2);
        }
        .nav-link.active::after { width: calc(100% - 1.8rem); }

        /* ── CTA button ── */
        .cta-btn {
          margin-left: 1rem;
          padding: 0.55rem 1.3rem;
          background: linear-gradient(135deg, #00f5ff 0%, #0ea5e9 100%);
          color: #050b16; font-size: 0.68rem; font-weight: 900;
          letter-spacing: 0.12em; text-transform: uppercase;
          border: none; border-radius: 9px; cursor: pointer;
          box-shadow: 0 0 18px rgba(0,245,255,0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(0,245,255,0.55);
          filter: brightness(1.08);
        }
        .cta-btn:active { transform: translateY(0); }

        /* ── Hamburger ── */
        .hamburger {
          display: flex !important; 
          align-items: center; justify-content: center;
          width: 40px; height: 40px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; cursor: pointer; color: #ffffff !important;
          transition: background 0.2s ease;
        }
        @media (min-width: 768px) {
          .hamburger { display: none !important; }
          .hub-mode .hamburger { display: flex !important; }
        }
        
        .hub-mode .hamburger {
          background: transparent;
          border: none;
        }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          position: fixed; inset: 0; z-index: 90;
          background: rgba(5, 10, 22, 0.98);
          backdrop-filter: blur(32px) saturate(200%);
          -webkit-backdrop-filter: blur(32px) saturate(200%);
          display: flex; flex-direction: column;
          padding: 5.5rem 1.75rem 2.5rem;
          border-top: 1px solid rgba(0,245,255,0.12);
          animation: drawerIn 0.25s cubic-bezier(0.2,0,0.2,1);
        }
        @keyframes drawerIn {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* subtle gradient accent lines inside drawer */
        .mobile-drawer::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #00f5ff, transparent);
          opacity: 0.5;
        }

        .mobile-nav { display: flex; flex-direction: column; gap: 0.25rem; flex: 1; }

        .mobile-nav-link {
          font-size: 1rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(148,163,184,0.8);
          padding: 0.9rem 1rem;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .mobile-nav-link::before {
          content: '';
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(0,245,255,0.3);
          flex-shrink: 0;
          transition: background 0.2s ease, box-shadow 0.2s ease;
        }
        .mobile-nav-link:hover {
          color: #00f5ff;
          background: rgba(0,245,255,0.07);
          border-color: rgba(0,245,255,0.15);
        }
        .mobile-nav-link:hover::before, .mobile-nav-link.active::before {
          background: #00f5ff;
          box-shadow: 0 0 8px rgba(0,245,255,0.6);
        }
        .mobile-nav-link.active {
          color: #00f5ff;
          background: rgba(0,245,255,0.1);
          border-color: rgba(0,245,255,0.2);
        }

        .mobile-cta {
          margin-top: 1.5rem;
          padding: 0.9rem 1.5rem;
          background: linear-gradient(135deg, #00f5ff 0%, #0ea5e9 100%);
          color: #050b16; font-size: 0.8rem; font-weight: 900;
          letter-spacing: 0.12em; text-transform: uppercase;
          border: none; border-radius: 12px; cursor: pointer;
          box-shadow: 0 0 24px rgba(0,245,255,0.4);
          transition: filter 0.2s ease, transform 0.2s ease;
        }
        .mobile-cta:hover { filter: brightness(1.1); transform: translateY(-1px); }

        .hub-mode .desktop-nav:not(.expanded-nav) {
          display: none;
        }
        
        @media (min-width: 768px) {
          .hub-mode .desktop-nav:not(.expanded-nav) {
            display: flex;
            opacity: 0;
            transform: scale(0.9);
            pointer-events: none;
          }
        }

        .hub-mode .logo-text-wrap,
        .hub-mode .cta-btn,
        .hub-mode .logo-link {
          display: none !important;
        }
        
        .hub-mode .header-inner {
          display: none;
        }
        
        .drawer-open.header-root {
          width: 100vw !important;
          height: 100vh !important;
          top: 0 !important;
          left: 0 !important;
          padding: 0 !important;
        }

        .drawer-open .hub-logo-orb,
        .drawer-open .hub-menu-orb {
          display: none !important;
        }

        .mobile-footer {
          margin-top: 2rem; padding-top: 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; gap: 0.5rem;
        }
        .mobile-footer-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #00f5ff;
          box-shadow: 0 0 8px rgba(0,245,255,0.7);
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .mobile-footer-text {
          font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(148,163,184,0.4); font-weight: 600;
        }

        @media (max-width: 767px) {
          .header-inner {
            padding: 0 1rem;
            height: 64px;
          }
          .header-root.hub-mode {
            width: 56px;
            height: 56px;
            top: 16px;
            right: 16px;
          }
          .drawer-open .header-inner {
            height: 72px;
            padding: 0 1.5rem;
          }
        }
      `}</style>

      <header 
        className={`header-root ${isHub ? 'hub-mode' : ''} ${mobileMenuOpen ? 'drawer-open' : ''}`}
      >
        {/* The Hub Orbs (Active on Scroll) */}
        {!mobileMenuOpen && (
          <>
            <div className="hub-logo-orb">
              <span className="material-symbols-outlined text-white">bolt</span>
            </div>
            <div 
              className={`hub-menu-orb ${isHovered ? 'expanded' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center gap-3">
                <button 
                  className="hamburger" 
                  style={{ display: 'flex !important' }}
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="material-symbols-outlined text-white">menu</span>
                </button>
                {isHovered && (
                  <nav className="desktop-nav flex gap-4 pr-2">
                    {menuItems.slice(0, 4).map((item) => (
                      <NavLink key={item.path} to={item.path} className="nav-link text-[0.65rem]">{item.name}</NavLink>
                    ))}
                  </nav>
                )}
              </div>
            </div>
          </>
        )}

        <div className={`header-bar ${scrolled && !isHub ? 'scrolled' : ''}`}>
          <div className="header-inner">
            {/* Standard Logo */}
            <Link to="/" className={`logo-link ${isHub ? 'hidden' : 'flex'}`}>
              <div className="logo-icon">
                <span className="material-symbols-outlined" style={{ color: '#fff' }}>bolt</span>
              </div>
              <div className="logo-text-wrap">
                <span className="logo-name">EONPULSE</span>
                <span className="logo-sub">Subsea Digital Systems</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className={`desktop-nav ${isHovered ? 'expanded-nav' : ''}`}>
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            {!isHub && (
              <button className="cta-btn hidden md:block">
                Start a Project
              </button>
            )}

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <Link to="/" className="flex items-center gap-4 mb-12" onClick={() => setMobileMenuOpen(false)}>
              <div className="logo-icon">
                <span className="material-symbols-outlined" style={{ color: '#fff' }}>bolt</span>
              </div>
              <div className="logo-text-wrap">
                <span className="logo-name">EONPULSE</span>
                <span className="logo-sub text-[0.4rem]">Subsea Digital Systems</span>
              </div>
            </Link>
            <nav className="mobile-nav">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <button className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
              Start a Project
            </button>
            <div className="mobile-footer">
              <div className="mobile-footer-dot" />
              <span className="mobile-footer-text">Systems Online</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;