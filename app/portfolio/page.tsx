'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

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
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* ✅ FLOATING GLOW ORB */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'floatOrb 8s ease-in-out infinite',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative'
      }}>
        <div style={{ width: '100%', padding: '0 5%', position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            
            {/* ✅ BADGE WITH PULSE DOT */}
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%',
                animation: 'pulseDot 2s ease-in-out infinite'
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                530+ PROJECTS COMPLETED
              </span>
            </div>

            {/* ✅ GRADIENT TEXT SHIMMER */}
            <h1 className="hero-heading" style={{
              fontSize: '80px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-3px',
              maxWidth: '900px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              PORTFOLIO OF
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s ease-in-out infinite'
              }}>EXCELLENCE</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '50px',
              maxWidth: '700px',
              lineHeight: '1.6',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Explore our collection of architectural masterpieces that define 
              Bangladesh's luxury landscape.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section style={{ 
        padding: '40px 5%', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="filter-buttons" style={{ 
            display: 'flex', 
            gap: '15px', 
            flexWrap: 'wrap', 
            justifyContent: 'center' 
          }}>
            {filters.map((filter, idx) => (
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
                  transition: 'all 0.3s',
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`,
                  boxShadow: activeFilter === filter ? '0 10px 30px rgba(255,215,0,0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={{ padding: '80px 5%', backgroundColor: '#0A0A0A', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="projects-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '30px' 
          }}>
            {filteredProjects.map((project, idx) => (
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
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s backwards`,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(255,215,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)'
                }}
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
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        style={{
                          padding: '6px 15px',
                          backgroundColor: 'rgba(255,215,0,0.2)',
                          borderRadius: '20px',
                          fontSize: '11px',
                          color: '#FFD700',
                          fontWeight: '600',
                          letterSpacing: '1px',
                          animation: `fadeIn 0.6s ease-out ${tagIdx * 0.1}s backwards`
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

                  {/* ✅ BUTTON SHINE EFFECT */}
                  <div className="view-btn" style={{
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
                    width: 'fit-content',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s'
                  }}>
                    <div className="btn-shine" style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      animation: 'btnShine 3s ease-in-out infinite'
                    }}></div>
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
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="stats-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '40px', 
            textAlign: 'center' 
          }}>
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
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s',
                animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s backwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,215,0,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
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

      {/* ✅ CTA SECTION WITH RINGS PULSE */}
      <section style={{
        padding: '120px 5%',
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {/* ✅ PULSING RINGS */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.1)',
          animation: 'ringsPulse 3s ease-out infinite',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.1)',
          animation: 'ringsPulse 3s ease-out 0.5s infinite',
          zIndex: 0
        }}></div>

        <div className="cta-content" style={{ 
          maxWidth: '900px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 className="cta-heading" style={{
            fontSize: '64px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.1',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            Let's Create Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 3s ease-in-out infinite'
            }}>Masterpiece</span>
          </h2>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            animation: 'fadeInUp 1s ease-out 0.2s backwards'
          }}>
            Join our portfolio of excellence. Start your project today.
          </p>

          <div className="cta-buttons-final" style={{ 
            display: 'flex', 
            gap: '20px', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
          }}>
            <Link href="/contact">
              <button className="cta-btn-main" style={{
                padding: '20px 50px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '60px',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(255,215,0,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.4)'
              }}>
                START YOUR PROJECT →
              </button>
            </Link>
            
            <a href="https://wa.me/8801958140774" className="whatsapp-btn" style={{
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
              gap: '10px',
              transition: 'all 0.3s',
              boxShadow: '0 20px 40px rgba(37,211,102,0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(37,211,102,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(37,211,102,0.3)'
            }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>

      {/* ✅ CSS ANIMATIONS - ALL EFFECTS KEPT */}
      <style>{`
        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden !important;
        }

        /* ✅ FLOATING ORB ANIMATION */
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        /* ✅ PULSE DOT */
        @keyframes pulseDot {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 0 0 rgba(255,215,0,0.7);
          }
          50% { 
            transform: scale(1.2); 
            box-shadow: 0 0 0 10px rgba(255,215,0,0);
          }
        }

        /* ✅ GRADIENT SHIMMER */
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* ✅ FADE IN UP */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ✅ FADE IN */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ✅ BUTTON SHINE */
        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        /* ✅ RINGS PULSE */
        @keyframes ringsPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }

        /* Mobile Devices (768px and below) */
        @media (max-width: 768px) {
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