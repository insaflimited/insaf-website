'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'architecture', name: 'Architecture', count: 8 },
    { id: 'rajuk', name: 'RAJUK Guide', count: 6 },
    { id: 'design', name: 'Design Tips', count: 5 },
    { id: 'construction', name: 'Construction', count: 5 }
  ]

  const featuredPost = {
    title: 'The Future of Sustainable Architecture in Bangladesh',
    excerpt: 'Exploring eco-friendly building practices and green technologies that are shaping the future of construction in our country.',
    author: 'Ar. Mohammad Insaf',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Architecture'
  }

  const blogPosts = [
    {
      id: 1,
      title: 'কেন অনেক বাড়ি RAJUK Pass করে না?',
      excerpt: 'RAJUK approval পেতে ব্যর্থ হওয়ার সাধারণ কারণগুলো এবং কীভাবে এড়ানো যায়।',
      author: 'Eng. Rahman Khan',
      date: 'Dec 10, 2024',
      readTime: '5 min',
      category: 'rajuk',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Modern Minimalist Home Design Trends 2024',
      excerpt: 'Discover the latest trends in minimalist architecture combining functionality with aesthetics.',
      author: 'Ar. Sarah Ahmed',
      date: 'Dec 8, 2024',
      readTime: '6 min',
      category: 'design',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Commercial ভবনে ROI বাড়াতে Floor Planning',
      excerpt: 'কীভাবে স্মার্ট ফ্লোর প্ল্যানিং আপনার commercial property এর মূল্য বাড়াতে পারে।',
      author: 'Ar. Mohammad Insaf',
      date: 'Dec 5, 2024',
      readTime: '7 min',
      category: 'architecture',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Understanding BNBC: Building Code Essentials',
      excerpt: 'A comprehensive guide to Bangladesh National Building Code requirements and compliance.',
      author: 'Eng. Rahman Khan',
      date: 'Dec 3, 2024',
      readTime: '10 min',
      category: 'construction',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      title: 'Interior Design Tips for Small Spaces',
      excerpt: 'Maximize your small space with clever interior design strategies and space-saving solutions.',
      author: 'Ar. Nabila Islam',
      date: 'Nov 28, 2024',
      readTime: '4 min',
      category: 'design',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      title: 'RAJUK Approval Timeline: What to Expect',
      excerpt: 'Complete breakdown of the RAJUK approval process and realistic timeline expectations.',
      author: 'Eng. Rahman Khan',
      date: 'Nov 25, 2024',
      readTime: '8 min',
      category: 'rajuk',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif',
      overflowX: 'hidden'
    }}>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative'
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div className="hero-content" style={{ 
            maxWidth: '1400px', 
            margin: '0 auto',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px'
            }}>
              <div className="pulse-dot" style={{ width: '8px', height: '8px', backgroundColor: '#FFD700', borderRadius: '50%' }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                INSIGHTS & KNOWLEDGE
              </span>
            </div>

            <h1 className="hero-heading" style={{
              fontSize: '72px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-3px',
              maxWidth: '900px'
            }}>
              ARCHITECTURAL
              <br />
              <span className="gradient-text" style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>INSIGHTS</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              Expert articles on architecture, design trends, construction tips, 
              and RAJUK approval guidance from Bangladesh's leading architects.
            </p>
          </div>
        </div>

        {/* Glow Orb */}
        <div className="glow-orb" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}></div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="fade-in-section" style={{ padding: '60px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="featured-article" style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))',
            borderRadius: '30px',
            padding: '50px',
            border: '1px solid rgba(255,215,0,0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Featured Glow */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }}></div>

            <div className="featured-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: '2fr 1fr', 
              gap: '50px', 
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}>
              <div className="featured-content">
                <div style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  backgroundColor: 'rgba(255,215,0,0.2)',
                  borderRadius: '30px',
                  marginBottom: '20px'
                }}>
                  <span style={{ color: '#FFD700', fontSize: '12px', fontWeight: '600', letterSpacing: '2px' }}>
                    ✨ FEATURED ARTICLE
                  </span>
                </div>

                <h2 className="featured-title" style={{
                  fontSize: '36px',
                  fontWeight: '900',
                  color: 'white',
                  marginBottom: '20px',
                  lineHeight: '1.2'
                }}>
                  {featuredPost.title}
                </h2>

                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '25px',
                  lineHeight: '1.6'
                }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'center',
                  marginBottom: '25px',
                  flexWrap: 'wrap',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)'
                }}>
                  <span>By <span style={{ color: '#FFD700' }}>{featuredPost.author}</span></span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <button className="btn-glow" style={{
                  padding: '14px 30px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <span style={{ position: 'relative', zIndex: 2 }}>READ ARTICLE</span>
                  <span style={{ position: 'relative', zIndex: 2 }}>→</span>
                </button>
              </div>

              <div className="featured-visual" style={{
                width: '100%',
                height: '280px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '70px'
              }}>
                📰
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="fade-in-section" style={{ padding: '40px 5%', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="filter-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="category-btn"
                style={{
                  padding: '10px 22px',
                  background: activeCategory === cat.id 
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : 'rgba(255,255,255,0.05)',
                  border: activeCategory === cat.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '30px',
                  color: activeCategory === cat.id ? '#0A0A0A' : 'rgba(255,255,255,0.7)',
                  fontWeight: '600',
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {cat.name}
                <span style={{
                  padding: '2px 8px',
                  backgroundColor: activeCategory === cat.id ? 'rgba(0,0,0,0.2)' : 'rgba(255,215,0,0.2)',
                  borderRadius: '15px',
                  fontSize: '11px',
                  color: activeCategory === cat.id ? '#0A0A0A' : '#FFD700'
                }}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="fade-in-section" style={{ padding: '70px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="blog-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '25px' 
          }}>
            {filteredPosts.map((post, idx) => (
              <article
                key={post.id}
                className="blog-card"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer'
                }}
              >
                {/* Image */}
                <div className="card-image" style={{
                  height: '180px',
                  background: post.gradient,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '5px 12px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span style={{ 
                      color: '#FFD700', 
                      fontSize: '10px', 
                      fontWeight: '600', 
                      textTransform: 'uppercase'
                    }}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '25px' }}>
                  <h3 className="card-title" style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '15px',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>
                        {post.author}
                      </div>
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                        {post.date} • {post.readTime}
                      </div>
                    </div>

                    <div className="read-more" style={{
                      color: '#FFD700',
                      fontSize: '13px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      Read <span className="arrow">→</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="load-more-btn" style={{
              padding: '14px 35px',
              background: 'transparent',
              border: '2px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              color: '#FFD700',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              LOAD MORE ARTICLES
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="fade-in-section" style={{
        padding: '80px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.08), transparent 60%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* CTA Rings */}
        <div className="cta-ring ring-1"></div>
        <div className="cta-ring ring-2"></div>

        <div className="newsletter-content" style={{ 
          maxWidth: '600px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            borderRadius: '30px',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
              STAY UPDATED
            </span>
          </div>

          <h2 className="newsletter-heading" style={{
            fontSize: '42px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '15px'
          }}>
            Get Weekly <span className="shimmer-text" style={{ color: '#FFD700' }}>Insights</span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '35px',
            lineHeight: '1.6'
          }}>
            Subscribe to receive expert articles directly to your inbox.
          </p>

          <div className="newsletter-form" style={{
            display: 'flex',
            gap: '12px',
            maxWidth: '450px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '16px 22px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button className="btn-glow subscribe-btn" style={{
              padding: '16px 30px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '50px',
              color: '#0A0A0A',
              fontWeight: '800',
              fontSize: '14px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span style={{ position: 'relative', zIndex: 2 }}>SUBSCRIBE</span>
            </button>
          </div>

          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '15px'
          }}>
            ✓ No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        /* ========== KEYFRAME ANIMATIONS ========== */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(0, -40px) scale(1); }
          75% { transform: translate(-20px, -20px) scale(0.9); }
        }

        @keyframes ringPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.2; }
          100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.5; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.3); }
          50% { box-shadow: 0 0 40px rgba(255,215,0,0.6); }
        }

        /* ========== ELEMENT ANIMATIONS ========== */
        
        .pulse-dot {
          animation: pulse 2s infinite;
        }

        .glow-orb {
          animation: orbFloat 8s ease-in-out infinite;
        }

        .gradient-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        /* Section Animations */
        .fade-in-section {
          animation: fadeInUp 1s ease-out;
        }

        /* ========== HERO ========== */
        .hero-badge {
          animation: fadeInDown 0.8s ease-out;
        }

        .hero-heading {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-subtitle {
          animation: fadeInUp 1s ease-out;
        }

        /* ========== FEATURED ========== */
        .featured-article {
          animation: scaleIn 0.8s ease-out;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .featured-article:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,215,0,0.1);
        }

        /* ========== BUTTON GLOW ========== */
        .btn-glow {
          transition: all 0.4s ease;
          box-shadow: 0 15px 30px rgba(255,215,0,0.3);
        }

        .btn-glow:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 25px 50px rgba(255,215,0,0.5);
        }

        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.5s;
        }

        .btn-glow:hover::before {
          left: 100%;
        }

        /* ========== CATEGORY BUTTONS ========== */
        .category-btn {
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .category-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        /* ========== BLOG CARDS ========== */
        .blog-card {
          animation: scaleIn 0.6s ease-out;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .blog-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 25px rgba(255,215,0,0.1);
          border-color: rgba(255,215,0,0.4);
        }

        .card-image {
          transition: transform 0.4s ease;
        }

        .blog-card:hover .card-image {
          transform: scale(1.05);
        }

        .card-title {
          transition: color 0.3s ease;
        }

        .blog-card:hover .card-title {
          color: #FFD700;
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .blog-card:hover .arrow {
          transform: translateX(8px);
        }

        /* ========== LOAD MORE ========== */
        .load-more-btn {
          transition: all 0.4s ease;
        }

        .load-more-btn:hover {
          background-color: rgba(255,215,0,0.1);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,215,0,0.2);
          border-color: rgba(255,215,0,0.5);
        }

        /* ========== CTA RINGS ========== */
        .cta-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(255,215,0,0.1);
          border-radius: 50%;
          animation: ringPulse 4s ease-in-out infinite;
        }

        .ring-1 {
          width: 300px;
          height: 300px;
        }

        .ring-2 {
          width: 500px;
          height: 500px;
          animation-delay: 0.5s;
        }

        /* ========== NEWSLETTER ========== */
        .newsletter-input {
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          border-color: rgba(255,215,0,0.5);
          background-color: rgba(255,255,255,0.08);
          box-shadow: 0 0 20px rgba(255,215,0,0.1);
        }

        /* ========== RESPONSIVE ========== */
        body {
          overflow-x: hidden !important;
        }

        @media (max-width: 768px) {
          .hero-content {
            text-align: center !important;
          }
          
          .hero-badge {
            margin: 0 auto 20px !important;
          }
          
          .hero-heading {
            font-size: 38px !important;
          }
          
          .hero-subtitle {
            font-size: 15px !important;
            margin: 0 auto 30px !important;
          }
          
          .featured-article {
            padding: 25px !important;
          }
          
          .featured-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          
          .featured-content {
            text-align: center !important;
          }
          
          .featured-content button {
            margin: 0 auto !important;
          }
          
          .featured-title {
            font-size: 26px !important;
          }
          
          .featured-visual {
            height: 180px !important;
            font-size: 50px !important;
          }
          
          .filter-buttons {
            gap: 8px !important;
          }
          
          .filter-buttons button {
            padding: 8px 16px !important;
            font-size: 11px !important;
          }
          
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          
          .newsletter-heading {
            font-size: 30px !important;
          }
          
          .newsletter-form {
            flex-direction: column !important;
          }
          
          .newsletter-form input,
          .newsletter-form button {
            width: 100% !important;
            min-width: 100% !important;
          }

          .glow-orb {
            display: none;
          }

          .cta-ring {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 32px !important;
          }
          
          .featured-title {
            font-size: 22px !important;
          }
          
          .newsletter-heading {
            font-size: 26px !important;
          }
        }
      `}</style>
    </div>
  )
}