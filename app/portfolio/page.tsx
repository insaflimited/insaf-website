'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [menuOpen, setMenuOpen] = useState(false)

  const filters = ['all', 'residential', 'commercial', 'interior', 'luxury']

  const projects = [
    {
      id: 1,
      name: 'Villa Serenity',
      category: 'residential',
      type: 'Luxury Residence',
      location: 'Bashundhara R/A',
      year: '2024',
      size: '8,500 sqft',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tags: ['RAJUK Approved', '3D Designed', 'Luxury']
    },
    {
      id: 2,
      name: 'Apex Tower',
      category: 'commercial',
      type: 'Commercial Complex',
      location: 'Gulshan Avenue',
      year: '2023',
      size: '45,000 sqft',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tags: ['G+12', 'LEED Certified', 'Commercial']
    },
    {
      id: 3,
      name: 'Modern Oasis',
      category: 'residential',
      type: 'Minimalist Home',
      location: 'Dhanmondi',
      year: '2024',
      size: '4,200 sqft',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      tags: ['Modern', 'Eco-Friendly', 'Award Winner']
    },
    {
      id: 4,
      name: 'Luxury Penthouse',
      category: 'interior',
      type: 'Interior Design',
      location: 'Banani',
      year: '2023',
      size: '6,000 sqft',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      tags: ['Luxury', 'Smart Home', 'Interior']
    },
    {
      id: 5,
      name: 'Green Valley Resort',
      category: 'commercial',
      type: 'Hospitality',
      location: 'Gazipur',
      year: '2024',
      size: '25,000 sqft',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      tags: ['Resort', 'Landscape', 'Luxury']
    },
    {
      id: 6,
      name: 'Executive Mansion',
      category: 'luxury',
      type: 'Ultra Luxury Villa',
      location: 'Gulshan',
      year: '2023',
      size: '12,000 sqft',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      tags: ['Ultra Luxury', 'Pool', 'Smart Villa']
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

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
            <Link href="/portfolio" style={{ color: '#FFD700', textDecoration: 'none' }}>PORTFOLIO</Link>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>BLOG</Link>
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
              START PROJECT →
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
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} style={{ color: '#FFD700', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}>PORTFOLIO</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>BLOG</Link>
            
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
                START PROJECT →
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '80vh',
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
                530+ PROJECTS COMPLETED
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
              PORTFOLIO OF
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>EXCELLENCE</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '50px',
              maxWidth: '700px',
              lineHeight: '1.6'
            }}>
              Explore our collection of architectural masterpieces that define 
              Bangladesh's luxury landscape.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section style={{ padding: '40px 5%', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="filter-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '12px 30px',
                  background: activeFilter === filter 
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : 'rgba(255,255,255,0.05)',
                  border: activeFilter === filter ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '30px',
                  color: activeFilter === filter ? '#0A0A0A' : 'rgba(255,255,255,0.7)',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={{ padding: '80px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="projects-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '30px' 
          }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                style={{
                  borderRadius: '25px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: '550px',
                  background: project.gradient,
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '6px 15px',
                          backgroundColor: 'rgba(255,215,0,0.2)',
                          borderRadius: '20px',
                          fontSize: '11px',
                          color: '#FFD700',
                          fontWeight: '600',
                          letterSpacing: '1px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(255,215,0,0.15)',
                    borderRadius: '20px',
                    marginBottom: '15px',
                    width: 'fit-content'
                  }}>
                    <span style={{ color: '#FFD700', fontSize: '12px', fontWeight: '600', letterSpacing: '1px' }}>
                      {project.year}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: '900',
                    color: 'white',
                    marginBottom: '12px',
                    letterSpacing: '-1px'
                  }}>
                    {project.name}
                  </h3>

                  <p style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '16px',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    {project.type} • {project.size}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '14px'
                  }}>
                    <span style={{ fontSize: '16px' }}>📍</span>
                    {project.location}
                  </div>

                  <div style={{
                    marginTop: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 25px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    borderRadius: '30px',
                    color: '#0A0A0A',
                    fontWeight: '700',
                    fontSize: '13px',
                    letterSpacing: '1px',
                    width: 'fit-content'
                  }}>
                    VIEW PROJECT
                    <span style={{ fontSize: '16px' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            {[
              { number: '530+', label: 'PROJECTS DELIVERED' },
              { number: '100%', label: 'RAJUK SUCCESS' },
              { number: '8+', label: 'YEARS EXPERIENCE' },
              { number: '25+', label: 'TEAM MEMBERS' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-card" style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#FFD700',
                  marginBottom: '10px',
                  letterSpacing: '-2px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '2px',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '120px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.15), transparent 70%)'
      }}>
        <div className="cta-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="cta-heading" style={{
            fontSize: '64px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.1'
          }}>
            Let's Create Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Masterpiece</span>
          </h2>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px'
          }}>
            Join our portfolio of excellence. Start your project today.
          </p>

          <div className="cta-buttons-final" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <button style={{
                padding: '20px 50px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '60px',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)'
              }}>
                START YOUR PROJECT →
              </button>
            </Link>
            <a href="https://wa.me/8801958140774" style={{
              padding: '20px 40px',
              background: '#25D366',
              border: 'none',
              borderRadius: '60px',
              color: 'white',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ 
        padding: '80px 5%', 
        backgroundColor: '#000',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
            
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
                Defining Bangladesh's skyline with architectural excellence since 2018.
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
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '12px'
                  }}>
                    {social[0].toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>SERVICES</h4>
              {['Architecture', 'Structure', 'RAJUK Approval', 'Interior', 'Landscape'].map((item, idx) => (
                <p key={idx} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '12px', cursor: 'pointer' }}>
                  {item}
                </p>
              ))}
            </div>

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
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '12px', cursor: 'pointer' }}>
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>CONTACT</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>📞 +880 1958-140774</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>✉️ contact@insaflimited.com</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '20px' }}>📍 Kazlar par, Jatrabari, Dhaka 1204</p>
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
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations + Mobile Responsive Styles */}
      <style>{`
        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden !important;
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
            margin: 0 auto 40px !important;
          }
          
          /* Filter Buttons */
          .filter-buttons {
            gap: 10px !important;
          }
          
          .filter-buttons button {
            padding: 10px 20px !important;
            font-size: 11px !important;
          }
          
          /* Projects Grid */
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .project-card {
            height: 450px !important;
          }
          
          .project-card h3 {
            font-size: 24px !important;
          }
          
          .project-card > div {
            padding: 25px !important;
          }
          
          /* Stats Grid */
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
          
          .stat-card {
            padding: 30px 20px !important;
          }
          
          .stat-card > div:first-child {
            font-size: 36px !important;
          }
          
          /* CTA Section */
          .cta-content {
            padding: 40px 20px !important;
          }
          
          .cta-heading {
            font-size: 36px !important;
            line-height: 1.2 !important;
          }
          
          .cta-buttons-final {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .cta-buttons-final button,
          .cta-buttons-final a {
            width: 100% !important;
            max-width: 300px !important;
            justify-content: center !important;
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
          
          .cta-heading {
            font-size: 28px !important;
          }
          
          .project-card {
            height: 400px !important;
          }
          
          .project-card h3 {
            font-size: 22px !important;
          }
          
          /* Stats - 1 column on very small */
          .stats-grid {
            grid-template-columns: 1fr !important;
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
          
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .project-card {
            height: 480px !important;
          }
          
          .stats-grid {
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
          
          .project-card:active {
            transform: scale(0.98) !important;
          }
        }
      `}</style>
    </div>
  )
}