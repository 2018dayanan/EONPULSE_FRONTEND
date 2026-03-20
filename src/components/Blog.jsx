import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Deep-Sea Data Transmission: Breaking the 10Gbps Barrier",
      excerpt: "Revolutionary fiber optic technology enables unprecedented data transmission speeds in subsea environments, transforming offshore digital infrastructure.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2026",
      readTime: "8 min read",
      category: "Infrastructure",
      image: "data-transmission",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Encryption for Underwater Communications",
      excerpt: "Next-generation quantum key distribution protocols secure critical subsea communication channels against emerging cyber threats.",
      author: "Marcus Rodriguez",
      date: "March 12, 2026",
      readTime: "6 min read",
      category: "Security",
      image: "quantum-security"
    },
    {
      id: 3,
      title: "AI-Powered Predictive Maintenance for Subsea Systems",
      excerpt: "Machine learning algorithms predict equipment failures before they occur, reducing downtime by 87% in deep-sea operations.",
      author: "Elena Volkov",
      date: "March 8, 2026",
      readTime: "10 min read",
      category: "AI/ML",
      image: "ai-maintenance"
    },
    {
      id: 4,
      title: "Autonomous Underwater Vehicles: The Future of Exploration",
      excerpt: "Swarm robotics and advanced navigation systems enable unprecedented mapping of ocean floor resources and infrastructure.",
      author: "James Mitchell",
      date: "March 5, 2026",
      readTime: "7 min read",
      category: "Robotics",
      image: "auv-exploration"
    },
    {
      id: 5,
      title: "Thermal Management in Extreme Deep-Sea Environments",
      excerpt: "Innovative cooling solutions maintain optimal operating temperatures for critical infrastructure at depths exceeding 3,000 meters.",
      author: "Dr. Akira Tanaka",
      date: "March 1, 2026",
      readTime: "9 min read",
      category: "Engineering",
      image: "thermal-systems"
    },
    {
      id: 6,
      title: "Neural Networks for Ocean Current Prediction",
      excerpt: "Deep learning models achieve 94% accuracy in predicting complex ocean current patterns, optimizing routing for subsea cable deployment.",
      author: "Sophie Laurent",
      date: "February 26, 2026",
      readTime: "5 min read",
      category: "Data Science",
      image: "neural-currents"
    }
  ];

  const categories = ["All", "Infrastructure", "Security", "AI/ML", "Robotics", "Engineering", "Data Science"];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl scroll-reveal">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Deep <span className="text-accent">Insights</span>
            </h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-8">
              Exploring the cutting edge of subsea digital infrastructure, from quantum encryption to autonomous exploration systems.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent">article</span>
                {blogPosts.length} Articles
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent">schedule</span>
                Updated Weekly
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent">trending_up</span>
                2.3k Readers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  category === "All"
                    ? "bg-accent text-primary shadow-[0_0_20px_rgba(0,245,255,0.4)]"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-accent border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts[0].featured && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass rounded-[3rem] p-12 border border-white/5 hover:border-accent/30 transition-all scroll-reveal tilt-card">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-2 bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest rounded-full">
                      Featured
                    </span>
                    <span className="text-slate-500 text-sm">{blogPosts[0].category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-sm">person</span>
                      </div>
                      <div>
                        <p className="text-white font-bold">{blogPosts[0].author}</p>
                        <p className="text-slate-500 text-sm">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <span className="text-slate-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${blogPosts[0].id}`}
                    className="px-8 py-3 bg-accent text-primary font-black rounded-xl text-sm uppercase tracking-widest hover:brightness-110 transition-all glow-pulse shadow-[0_0_20px_rgba(0,245,255,0.4)]"
                  >
                    Read Full Article
                  </Link>
                </div>
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent text-6xl">analytics</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="glass p-8 rounded-[2rem] group scroll-reveal tilt-card border border-white/5 hover:border-accent/30 transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-xs">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-accent text-xs">person</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">{post.author}</p>
                      <p className="text-slate-500 text-xs">{post.date}</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="w-full py-3 bg-white/5 text-accent font-bold rounded-xl text-sm uppercase tracking-widest hover:bg-accent/10 transition-all border border-accent/20 hover:border-accent/40"
                >
                  Read Article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass p-16 rounded-[3rem] scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-accent">Connected</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Get weekly insights on subsea digital infrastructure innovations and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all"
              />
              <button className="px-8 py-3 bg-accent text-primary font-black rounded-xl text-sm uppercase tracking-widest hover:brightness-110 transition-all glow-pulse shadow-[0_0_20px_rgba(0,245,255,0.4)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
