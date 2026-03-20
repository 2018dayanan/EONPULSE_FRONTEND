import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  ArrowLeft, Clock, Calendar, User, Share2,
  Twitter, Linkedin, Facebook, Link as LinkIcon,
  ChevronRight, Terminal, Cpu, ShieldCheck
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const progressRef = useRef(null);

  // Scroll to top on load based on article ID
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Refresh ScrollTrigger on route change to recalculate heights
    ScrollTrigger.refresh();
  }, [id]);

  useGSAP(() => {
    // 1. Reading Progress Bar
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1
      }
    });

    // 2. Hero Section Entrance (Stagger)
    gsap.from(".hero-anim", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });

    // 3. Article Body Entrance
    gsap.from(".article-body-anim", {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.3,
      ease: "power3.out"
    });

    // 4. Background Orbs subtle movement
    gsap.to(".orb-anim", {
      y: -20,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 5. Related Articles Entrance
    gsap.from(".related-anim", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".related-container",
        start: "top 85%"
      }
    });

  }, { scope: containerRef, dependencies: [id] });

  // Helper for generating stylized dummy content to solve the "content missing" issue
  const generateContent = (title, focus) => `
    <h2>The Evolution of ${focus}</h2>
    <p>In the vast expanse of the world's oceans, the demand for robust and resilient digital infrastructure has never been higher. The implementation of <strong>${title}</strong> represents a monumental shift in how we approach underwater systems.</p>

    <h3>Breaking the Analytical Barriers</h3>
    <p>Historically, deep-sea operations have been hampered by extreme pressure, total darkness, and corrosive environments. Today's breakthroughs leverage cutting-edge materials and quantum concepts to overcome these seemingly insurmountable obstacles. We are seeing unprecedented gains in reliability from our newest sub-oceanic nodes.</p>

    <blockquote>
      The abyss is no longer a barrier to human connectivity; it is the ultimate frontier for next-generation digital infrastructure. Our goal is zero downtime under maximum atmospheric pressure.
    </blockquote>

    <h3>Key Advancements</h3>
    <ul>
      <li><strong>Hyper-Resilient Architectures:</strong> Nodes designed to withstand thousands of atmospheres of pressure while maintaining absolute structural integrity.</li>
      <li><strong>Autonomous Calibration:</strong> Systems that self-adjust to dynamic ocean currents and temperature shifts in real-time.</li>
      <li><strong>Zero-Latency Relays:</strong> Revolutionary photonic routing that minimizes signal degradation over trans-oceanic distances.</li>
    </ul>

    <h3>Looking Ahead to 2030</h3>
    <ol>
      <li>Deployment of localized processing clusters closer to the ocean floor.</li>
      <li>Integration with autonomous deep-sea drones for self-healing repair grids.</li>
      <li>Establishing a global, unified subsea mesh network resilient to continental shift.</li>
    </ol>

    <p>As we push deeper into the ocean, the fusion of advanced engineering and software analytics ensures that our most critical data remains accessible, secure, and instantaneous. The future of global connectivity lies beneath the waves.</p>
  `;

  // Full Blog DB to match the Homepage / Blog Page
  const articles = {
    "1": {
      title: "Deep-Sea Data Transmission: Breaking the 10Gbps Barrier",
      author: "Dr. Sarah Chen",
      date: "March 15, 2026",
      readTime: "8 min read",
      category: "Infrastructure",
      image: "data-transmission",
      content: generateContent("Deep-Sea Data Transmission", "Data Highways")
    },
    "2": {
      title: "Quantum Encryption for Underwater Communications",
      author: "Marcus Rodriguez",
      date: "March 12, 2026",
      readTime: "6 min read",
      category: "Security",
      image: "quantum-security",
      content: generateContent("Quantum Encryption", "Subsea Security")
    },
    "3": {
      title: "AI-Powered Predictive Maintenance for Subsea Systems",
      author: "Elena Volkov",
      date: "March 8, 2026",
      readTime: "10 min read",
      category: "AI/ML",
      image: "ai-maintenance",
      content: generateContent("AI Predictive Maintenance", "Machine Learning at Depth")
    },
    "4": {
      title: "Autonomous Underwater Vehicles: The Future of Exploration",
      author: "James Mitchell",
      date: "March 5, 2026",
      readTime: "7 min read",
      category: "Robotics",
      image: "auv-exploration",
      content: generateContent("Autonomous Underwater Vehicles", "Robotic Autonomy")
    },
    "5": {
      title: "Thermal Management in Extreme Deep-Sea Environments",
      author: "Dr. Akira Tanaka",
      date: "March 1, 2026",
      readTime: "9 min read",
      category: "Engineering",
      image: "thermal-systems",
      content: generateContent("Thermal Management Systems", "Thermal Engineering")
    },
    "6": {
      title: "Neural Networks for Ocean Current Prediction",
      author: "Sophie Laurent",
      date: "February 26, 2026",
      readTime: "5 min read",
      category: "Data Science",
      image: "neural-currents",
      content: generateContent("Neural Networks", "Predictive Mapping")
    }
  };

  const article = articles[id] || articles["1"];

  // Custom typography styles passed via Tailwind arbitrary variants
  const tailwindProseClasses = `
    text-slate-300 text-lg leading-relaxed
    [&_h2]:text-3xl [&_h2]:md:text-4xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-16 [&_h2]:mb-8 [&_h2]:tracking-tight
    [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-slate-100 [&_h3]:mt-12 [&_h3]:mb-6
    [&_p]:mb-8
    [&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:bg-white/[0.02] [&_blockquote]:p-8 [&_blockquote]:italic [&_blockquote]:text-white [&_blockquote]:text-xl [&_blockquote]:leading-loose [&_blockquote]:rounded-r-3xl [&_blockquote]:my-12 [&_blockquote]:shadow-[inset_0_0_20px_rgba(0,245,255,0.03)]
    [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-4 [&_ul]:my-8 [&_ul]:bg-white/[0.01] [&_ul]:p-6 [&_ul]:rounded-2xl [&_ul]:border [&_ul]:border-white/5
    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-4 [&_ol]:my-8 [&_ol]:text-slate-300
    [&_li]:relative [&_ul>li]:pl-8
    [&_ul>li::before]:content-[''] [&_ul>li::before]:absolute [&_ul>li::before]:left-2 [&_ul>li::before]:top-[0.6em] [&_ul>li::before]:w-2 [&_ul>li::before]:h-2 [&_ul>li::before]:bg-accent [&_ul>li::before]:rounded-full [&_ul>li::before]:shadow-[0_0_8px_rgba(0,245,255,0.6)]
    [&_strong]:text-white [&_strong]:font-bold [&_strong]:bg-accent/10 [&_strong]:px-1.5 [&_strong]:py-0.5 [&_strong]:rounded-md
    [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-accent/30 hover:[&_a]:decoration-accent [&_a]:transition-colors
  `;

  // Related posts (excluding current)
  const relatedPosts = Object.entries(articles)
    .filter(([key]) => key !== id)
    .slice(0, 3)
    .map(([key, val]) => ({ id: key, ...val }));

  return (
    <div ref={containerRef} className="min-h-screen bg-primary text-slate-300 selection:bg-accent selection:text-primary pb-32">
      {/* Scroll Progress Bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary origin-left z-50 shadow-[0_0_20px_rgba(0,245,255,0.6)] scale-x-0"
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden flex items-end justify-center min-h-[55vh] border-b border-white/5">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-abyss z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,245,255,0.1),transparent_70%)] z-0"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

        {/* Abstract floating shapes */}
        <div className="orb-anim absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px]"></div>
        <div className="orb-anim absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full filter blur-[100px]" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div>
            {/* Breadcrumb / Back Navigation */}
            <nav className="hero-anim flex items-center gap-2 text-xs font-bold tracking-widest text-slate-500 mb-8 uppercase">
              <Link to="/blog" className="hover:text-accent transition-colors flex items-center gap-1 group">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Blog
              </Link>
              <ChevronRight size={14} className="text-slate-700" />
              <span className="text-slate-400">{article.category}</span>
            </nav>

            <div className="hero-anim flex items-center gap-4 mb-8">
              <span className="px-5 py-2 bg-white/5 text-accent text-xs font-black uppercase tracking-[0.2em] rounded-full border border-accent/20 shadow-[0_0_15px_rgba(0,245,255,0.15)] flex items-center gap-2 backdrop-blur-md">
                <Terminal size={14} /> {article.category}
              </span>
              <span className="text-slate-400 font-medium text-sm flex items-center gap-1.5 bg-white/5 py-2 px-4 rounded-full backdrop-blur-md">
                <Clock size={16} className="text-secondary" /> {article.readTime}
              </span>
            </div>

            <h1 className="hero-anim text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
              {article.title}
            </h1>

            <div className="hero-anim flex flex-wrap items-center gap-8 text-slate-400 text-sm border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary p-[2px] shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                  <div className="w-full h-full rounded-full bg-primary flex items-center justify-center border-2 border-primary">
                    <User size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-tight">{article.author}</p>
                  <p className="text-xs uppercase tracking-widest text-accent mt-1">Lead Researcher</p>
                </div>
              </div>

              <div className="w-px h-10 bg-white/10 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-slate-500" />
                <span className="font-medium text-slate-300">{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

        {/* Left Sidebar (Share Buttons) */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-40 flex flex-col gap-5 items-center">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20 mb-2"></div>

            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-all hover:-translate-y-1 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40 hover:bg-[#1DA1F2]/10 transition-all hover:-translate-y-1">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all hover:-translate-y-1">
              <Linkedin size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 transition-all hover:-translate-y-1">
              <Facebook size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-all hover:-translate-y-1">
              <LinkIcon size={18} />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="lg:col-span-8">
          <div
            className={`article-body-anim \${tailwindProseClasses}`}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Footer & Tags */}
          <div className="mt-16 pt-8 border-t border-white/10 opacity-0 article-body-anim">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mr-2">Tags:</span>
              {["Deep-Sea", "Innovation", article.category].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-300 hover:text-accent hover:border-accent/30 transition-colors cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar (Author / Widgets) */}
        <div className="lg:col-span-3 space-y-8">
          <div className="sticky top-32 space-y-8">

            {/* Author Profile Box */}
            <div className="article-body-anim glass p-8 rounded-3xl border border-white/5 hover:border-accent/20 transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu size={100} className="text-accent" />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary p-[2px] mb-6 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                  <div className="w-full h-full rounded-full bg-primary flex items-center justify-center border-2 border-primary">
                    <User size={24} className="text-white" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{article.author}</h4>
                <p className="text-xs uppercase tracking-widest text-accent mb-4">Lead Researcher</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Specialist in advanced subsea network architecture and extreme-pressure fiber optic deployment strategies.
                </p>

                <button className="w-full py-3 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/30 rounded-xl text-sm font-bold text-white uppercase tracking-widest transition-all">
                  View Profile
                </button>
              </div>
            </div>

            {/* Newsletter widget */}
            <div className="article-body-anim bg-gradient-to-b from-accent/10 to-transparent p-1 rounded-3xl">
              <div className="bg-primary/90 backdrop-blur p-8 rounded-[22px] border border-white/5">
                <ShieldCheck size={32} className="text-accent mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Subsea Insights</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Subscribe to get our latest technical deep-dives directly in your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/50 mb-3"
                />
                <button className="w-full py-3 bg-accent text-primary rounded-xl text-sm font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,245,255,0.4)]">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="related-container max-w-7xl mx-auto px-6 mt-32 border-t border-white/10 pt-20">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-8 h-1 bg-accent rounded-full"></span>
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Link
              to={`/blog/\${post.id}`}
              key={post.id}
              className="related-anim glass p-6 rounded-[2rem] border border-white/5 hover:border-accent/30 transition-all group tilt-card"
            >
              <div className="w-full h-40 bg-black/40 rounded-2xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-accent/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-600 group-hover:text-accent transition-colors">
                    analytics
                  </span>
                </div>
              </div>

              <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                {post.title}
              </h3>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-slate-400 text-sm font-medium">{post.author}</span>
                <span className="text-slate-500 text-xs flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default BlogArticle;