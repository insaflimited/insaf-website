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
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* FLOATING NAVBAR */}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              <Link href="/" style={{ textDecoration: 'none' }}>
                <div style={{ fontSize: '22px', fontWeight: '900', color: 'white', letterSpacing: '2px' }}>INSAF</div>
                <div style={{ fontSize: '10px', color: '#FFD700', letterSpacing: '3px', marginTop: '-2px' }}>ARCHITECTS</div>
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '35px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>HOME</Link>
            <Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>ABOUT</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>SERVICES</Link>
            <Link href="/portfolio" style={{ color: '#FFD700', textDecoration: 'none' }}>PORTFOLIO</Link>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>BLOG</Link>
          </div>

          <Link href="/contact">
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
        </div>
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
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{
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

            <h1 style={{
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

            <p style={{
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
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '30px' }}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  borderRadius: '25px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: '550px',
                  background: project.gradient,
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            {[
              { number: '530+', label: 'PROJECTS DELIVERED' },
              { number: '100%', label: 'RAJUK SUCCESS' },
              { number: '12+', label: 'YEARS EXPERIENCE' },
              { number: '25+', label: 'TEAM MEMBERS' }
            ].map((stat, idx) => (
              <div key={idx} style={{
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
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
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
        </div>
      </section>

      {/* FOOTER - COMPLETE */}
      <footer style={{ 
        padding: '80px 5%', 
        backgroundColor: '#000',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px' }}>
            
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
                {['F', 'I', 'L', 'Y'].map((social, idx) => (
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
                    {social}
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
              {['About Us', 'Portfolio', 'Blog', 'Contact'].map((item, idx) => (
                <p key={idx} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '12px', cursor: 'pointer' }}>
                  {item}
                </p>
              ))}
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>CONTACT</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>📞 +880 1958-140774</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>✉️ contact@insaflimited.com</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>📍 Jatrabari, Dhaka</p>
            </div>
          </div>

          <div style={{ marginTop: '80px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>© 2026 INSAF LIMITED. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}