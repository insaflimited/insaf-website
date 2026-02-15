'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [menuOpen, setMenuOpen] = useState(false)

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
      
      {/* FLOATING NAVBAR - Mobile Responsive */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '15px 30px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '45px',
              height: '45px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(255,215,0,0.5)'
            }}>
              <span style={{ color: '#0A0A0A', fontWeight: 'bold', fontSize: '24px' }}>I</span>
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '900', color: 'white', letterSpacing: '2px' }}>INSAF</div>
              <div style={{ fontSize: '10px', color: '#FFD700', letterSpacing: '3px', marginTop: '-2px' }}>ARCHITECTS</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '35px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>HOME</Link>
            <Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>ABOUT</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>SERVICES</Link>
            <Link href="/portfolio" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>PORTFOLIO</Link>
            <Link href="/blog" style={{ color: '#FFD700', textDecoration: 'none' }}>BLOG</Link>
          </div>

          {/* Desktop CTA */}
          <Link href="/contact" className="desktop-cta">
            <button style={{
              padding: '12px 25px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '30px',
              color: '#0A0A0A',
              fontWeight: '700',
              fontSize: '13px',
              letterSpacing: '1px',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(255,215,0,0.3)'
            }}>
              CONTACT US →
            </button>
          </Link>

          {/* Mobile Hamburger Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              zIndex: 200
            }}
          >
            <div style={{ width: '28px', height: '20px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                width: '28px',
                height: '3px',
                backgroundColor: '#FFD700',
                borderRadius: '3px',
                transition: 'all 0.3s',
                top: menuOpen ? '8px' : '0',
                transform: menuOpen ? 'rotate(45deg)' : 'none'
              }}></div>
              <div style={{
                position: 'absolute',
                width: '28px',
                height: '3px',
                backgroundColor: '#FFD700',
                borderRadius: '3px',
                transition: 'all 0.3s',
                top: '8px',
                opacity: menuOpen ? 0 : 1
              }}></div>
              <div style={{
                position: 'absolute',
                width: '28px',
                height: '3px',
                backgroundColor: '#FFD700',
                borderRadius: '3px',
                transition: 'all 0.3s',
                top: menuOpen ? '8px' : '16px',
                transform: menuOpen ? 'rotate(-45deg)' : 'none'
              }}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingTop: '30px',
            paddingBottom: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            marginTop: '20px'
          }}>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>HOME</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>ABOUT</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>SERVICES</Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>PORTFOLIO</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} style={{ color: '#FFD700', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}>BLOG</Link>
            
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none' }}>
              <button style={{
                marginTop: '10px',
                padding: '15px 30px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '30px',
                color: '#0A0A0A',
                fontWeight: '700',
                fontSize: '14px',
                letterSpacing: '1px',
                cursor: 'pointer',
                width: '100%'
              }}>
                CONTACT US →
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '140px',
        paddingBottom: '60px'
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div className="hero-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
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
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FFD700', borderRadius: '50%' }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                INSIGHTS & KNOWLEDGE
              </span>
            </div>

            <h1 className="hero-heading" style={{
              fontSize: '80px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-3px',
              maxWidth: '900px'
            }}>
              ARCHITECTURAL
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>INSIGHTS</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '50px',
              maxWidth: '700px',
              lineHeight: '1.6'
            }}>
              Expert articles on architecture, design trends, construction tips, 
              and RAJUK approval guidance from Bangladesh's leading architects.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section style={{ padding: '60px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="featured-article" style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))',
            borderRadius: '30px',
            padding: '60px',
            border: '1px solid rgba(255,215,0,0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Glow Effect */}
            <div style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
              borderRadius: '50%',
              filter: 'blur(60px)'
            }}></div>

            <div className="featured-grid" style={{ 
              position: 'relative', 
              zIndex: 2, 
              display: 'grid', 
              gridTemplateColumns: '2fr 1fr', 
              gap: '60px', 
              alignItems: 'center' 
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
                  fontSize: '42px',
                  fontWeight: '900',
                  color: 'white',
                  marginBottom: '20px',
                  lineHeight: '1.2',
                  letterSpacing: '-1px'
                }}>
                  {featuredPost.title}
                </h2>

                <p style={{
                  fontSize: '18px',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'center',
                  marginBottom: '30px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                    By <span style={{ color: '#FFD700' }}>{featuredPost.author}</span>
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                    {featuredPost.date}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                    {featuredPost.readTime}
                  </span>
                </div>

                <button style={{
                  padding: '16px 35px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 20px 40px rgba(255,215,0,0.3)'
                }}>
                  READ ARTICLE
                  <span style={{ fontSize: '18px' }}>→</span>
                </button>
              </div>

              <div className="featured-visual" style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '80px'
              }}>
                📰
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section style={{ padding: '40px 5%', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="filter-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '12px 25px',
                  background: activeCategory === cat.id 
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : 'rgba(255,255,255,0.05)',
                  border: activeCategory === cat.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '30px',
                  color: activeCategory === cat.id ? '#0A0A0A' : 'rgba(255,255,255,0.7)',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
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
      <section style={{ padding: '80px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="blog-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
            gap: '30px' 
          }}>
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '25px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image Placeholder */}
                <div style={{
                  height: '200px',
                  background: post.gradient,
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    padding: '6px 15px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <span style={{ 
                      color: '#FFD700', 
                      fontSize: '11px', 
                      fontWeight: '600', 
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '30px' }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: 'white',
                    marginBottom: '15px',
                    lineHeight: '1.3',
                    letterSpacing: '-0.5px'
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '25px',
                    lineHeight: '1.6'
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '3px' }}>
                        {post.author}
                      </div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                        {post.date} • {post.readTime}
                      </div>
                    </div>

                    <div style={{
                      color: '#FFD700',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      Read
                      <span style={{ fontSize: '18px' }}>→</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button style={{
              padding: '16px 40px',
              background: 'transparent',
              border: '2px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              color: '#FFD700',
              fontWeight: '700',
              fontSize: '14px',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              LOAD MORE ARTICLES
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section style={{
        padding: '100px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1), transparent 70%)'
      }}>
        <div className="newsletter-content" style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            borderRadius: '30px',
            marginBottom: '25px'
          }}>
            <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
              STAY UPDATED
            </span>
          </div>

          <h2 className="newsletter-heading" style={{
            fontSize: '48px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '20px',
            letterSpacing: '-1px'
          }}>
            Get Weekly <span style={{ color: '#FFD700' }}>Insights</span>
          </h2>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Subscribe to receive expert articles on architecture, design trends, and construction tips directly to your inbox.
          </p>

          <div className="newsletter-form" style={{
            display: 'flex',
            gap: '15px',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '18px 25px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50px',
                color: 'white',
                fontSize: '15px',
                outline: 'none'
              }}
            />
            <button style={{
              padding: '18px 35px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '50px',
              color: '#0A0A0A',
              fontWeight: '800',
              fontSize: '14px',
              letterSpacing: '1px',
              cursor: 'pointer',
              boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
              whiteSpace: 'nowrap'
            }}>
              SUBSCRIBE
            </button>
          </div>

          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            marginTop: '20px'
          }}>
            ✓ No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ 
        padding: '80px 5%', 
        backgroundColor: '#000',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
            {/* Brand Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ color: '#000', fontWeight: 'bold', fontSize: '28px' }}>I</span>
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '900', color: 'white' }}>INSAF</div>
                  <div style={{ fontSize: '11px', color: '#FFD700', letterSpacing: '3px' }}>ARCHITECTS</div>
                </div>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.8', marginBottom: '30px' }}>
                Defining Bangladesh's skyline with architectural excellence and structural precision since 2018.
              </p>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                {['facebook', 'instagram', 'linkedin', 'youtube'].map((social, idx) => (
                  <div key={idx} style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
                      {social[0].toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>SERVICES</h4>
              {['Architecture', 'Structure', 'RAJUK Approval', 'Interior', 'Landscape'].map((item, idx) => (
                <p key={idx} style={{ 
                  color: 'rgba(255,255,255,0.5)', 
                  fontSize: '14px', 
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}>
                  {item}
                </p>
              ))}
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>QUICK LINKS</h4>
              {[
                { name: 'About Us', link: '/about' },
                { name: 'Portfolio', link: '/portfolio' },
                { name: 'Services', link: '/services' },
                { name: 'Blog', link: '/blog' },
                { name: 'Contact', link: '/contact' }
              ].map((item, idx) => (
                <Link key={idx} href={item.link} style={{ textDecoration: 'none', display: 'block' }}>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.5)', 
                    fontSize: '14px', 
                    marginBottom: '12px',
                    cursor: 'pointer',
                    transition: '0.3s'
                  }}>
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>CONTACT</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>
                📞 +880 1958-140774
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>
                ✉️ contact@insaflimited.com
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '20px' }}>
                📍 Kazlar par, Jatrabari, Dhaka 1204
              </p>
              <button onClick={() => window.open('https://maps.app.goo.gl/6KuYrT1nowS4nao46', '_blank')} style={{
                padding: '12px 25px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '30px',
                color: '#000',
                fontWeight: '700',
                fontSize: '12px',
                letterSpacing: '1px',
                cursor: 'pointer'
              }}>
                GET DIRECTIONS
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ 
            marginTop: '80px', 
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
              © 2024 INSAF LIMITED. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', textDecoration: 'none' }}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations + Mobile Responsive */}
      <style>{`
        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden !important;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #FFD700 #0A0A0A;
        }

        *::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }

        *::-webkit-scrollbar-track {
          background: #0A0A0A;
        }

        *::-webkit-scrollbar-thumb {
          background-color: #FFD700;
          border-radius: 20px;
        }

        /* Hide mobile menu button by default */
        .mobile-menu-btn {
          display: none !important;
        }

        /* Mobile Devices (768px and below) */
        @media (max-width: 768px) {
          
          /* Navigation */
          nav {
            width: 95% !important;
            padding: 12px 20px !important;
            top: 10px !important;
          }
          
          .desktop-menu {
            display: none !important;
          }
          
          .desktop-cta {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          /* Hero Section */
          .hero-content {
            text-align: center !important;
          }
          
          .hero-badge {
            margin: 0 auto 20px !important;
          }
          
          .hero-heading {
            font-size: 42px !important;
            letter-spacing: -1px !important;
            text-align: center !important;
          }
          
          .hero-subtitle {
            font-size: 16px !important;
            text-align: center !important;
            margin: 0 auto !important;
          }
          
          /* Featured Article */
          .featured-article {
            padding: 30px 20px !important;
          }
          
          .featured-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          
          .featured-content {
            text-align: center !important;
          }
          
          .featured-content > div:first-child {
            margin: 0 auto 20px !important;
          }
          
          .featured-content button {
            margin: 0 auto !important;
          }
          
          .featured-title {
            font-size: 28px !important;
          }
          
          .featured-visual {
            height: 200px !important;
            font-size: 60px !important;
          }
          
          /* Filter Buttons */
          .filter-buttons {
            gap: 10px !important;
          }
          
          .filter-buttons button {
            padding: 10px 20px !important;
            font-size: 11px !important;
          }
          
          /* Blog Grid */
          .blog-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .blog-card h3 {
            font-size: 20px !important;
          }
          
          /* Newsletter */
          .newsletter-content {
            padding: 0 10px !important;
          }
          
          .newsletter-heading {
            font-size: 32px !important;
          }
          
          .newsletter-form {
            flex-direction: column !important;
            gap: 10px !important;
          }
          
          .newsletter-form input,
          .newsletter-form button {
            width: 100% !important;
            min-width: 100% !important;
          }
          
          /* Footer */
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          
          .footer-grid > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
        }

        /* Small Mobile (480px and below) */
        @media (max-width: 480px) {
          .hero-heading {
            font-size: 32px !important;
          }
          
          .hero-subtitle {
            font-size: 14px !important;
          }
          
          .featured-title {
            font-size: 24px !important;
          }
          
          .newsletter-heading {
            font-size: 28px !important;
          }
          
          .blog-card {
            font-size: 14px !important;
          }
          
          .filter-buttons button {
            padding: 8px 16px !important;
            font-size: 10px !important;
          }
        }

        /* Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-heading {
            font-size: 56px !important;
          }
          
          .featured-title {
            font-size: 36px !important;
          }
          
          .blog-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px !important;
          }
          
          .blog-card:active {
            transform: translateY(-5px) !important;
          }
        }
      `}</style>
    </div>
  )
}