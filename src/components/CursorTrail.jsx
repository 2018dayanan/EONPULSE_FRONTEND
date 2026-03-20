import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorTrail = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Performance optimization for GSAP tracking mouse
    const xToCursor = gsap.quickTo(cursorRef.current, 'x', { duration: 0.1, ease: 'power3' });
    const yToCursor = gsap.quickTo(cursorRef.current, 'y', { duration: 0.1, ease: 'power3' });

    // The follower uses a slightly longer duration for the "trail" lag effect
    const xToFollower = gsap.quickTo(followerRef.current, 'x', { duration: 0.6, ease: 'power3' });
    const yToFollower = gsap.quickTo(followerRef.current, 'y', { duration: 0.6, ease: 'power3' });

    // Ensure the cursor isn't rendered until the mouse actually moves (to avoid it being stuck top-left initially)
    let isVisible = false;

    const handleMouseMove = (e) => {
      if (!isVisible) {
        gsap.set([cursorRef.current, followerRef.current], { opacity: 1 });
        isVisible = true;
      }
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);
    };

    // Event delegation for hover states on interactive elements
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, p, h1, h2, h3')) {
        const isText = e.target.closest('p, h1, h2, h3') && !e.target.closest('a, button');

        if (isText) {
          gsap.to(cursorRef.current, { scale: 0.2, duration: 0.3 });
          gsap.to(followerRef.current, { scale: 1.5, opacity: 0.1, duration: 0.3 });
        } else {
          // It's a button or link
          gsap.to(cursorRef.current, { scale: 0, duration: 0.3 });
          gsap.to(followerRef.current, {
            scale: 1.8,
            backgroundColor: 'rgba(0, 245, 255, 0.15)',
            borderColor: 'rgba(0, 245, 255, 0.5)',
            duration: 0.3
          });
        }
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, p, h1, h2, h3')) {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
        gsap.to(followerRef.current, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(0, 245, 255, 0.4)',
          opacity: 1,
          duration: 0.3
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <style>{`
        /* Hide the default cursor only on non-touch devices if you want full immersion, 
           but often keeping it is safer. In this setup, we just overlay the custom cursor. */
        @media (pointer: fine) {
          body {
            /* If you want to completely replace the cursor uncomment the below line, 
               otherwise leave it commented out for an overlay effect. highly recommended overlay for usability. */
            /* cursor: none; */ 
          }
        }
      `}</style>

      {/* Center dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] opacity-0 mix-blend-screen shadow-[0_0_10px_#00f5ff] hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Trailing ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-accent/40 rounded-full pointer-events-none z-[9998] opacity-0 hidden md:flex items-center justify-center transition-colors duration-200"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full bg-accent/5 rounded-full blur-[2px]"></div>
      </div>
    </>
  );
};

export default CursorTrail;
