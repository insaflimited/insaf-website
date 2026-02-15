'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif', 
      overflow: 'hidden',
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
            <Link href="/about" style={{ color: '#FFD700', textDecoration: 'none' }}>ABOUT</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>SERVICES</Link>
            <Link href="/portfolio" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>PORTFOLIO</Link>
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
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: '#FFD700', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}>ABOUT</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>SERVICES</Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>PORTFOLIO</Link>
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
                CONTACT US →
              </button>
            </Link>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '120px',
        paddingBottom: '60px'
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div className="hero-grid" style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '80px', 
            alignItems: 'center' 
          }}>
            
            {/* Left Content */}
            <div className="hero-content">
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
                <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>EST. 2018</span>
              </div>

              <h1 className="hero-heading" style={{
                fontSize: '72px',
                fontWeight: '900',
                color: 'white',
                lineHeight: '1',
                marginBottom: '30px',
                letterSpacing: '-2px'
              }}>
                CRAFTING
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>EXCELLENCE</span>
                <br />
                SINCE 2018
              </h1>

              <p className="hero-subtitle" style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.8',
                marginBottom: '40px',
                maxWidth: '500px'
              }}>
                From a vision to redefine architectural standards to becoming Bangladesh's 
                most trusted name in luxury design and structural excellence.
              </p>

              <div className="stats-row" style={{ display: 'flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
                <div className="stat-item">
                  <div style={{ fontSize: '42px', fontWeight: '900', color: '#FFD700' }}>530+</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>PROJECTS</div>
                </div>
                <div className="stat-item">
                  <div style={{ fontSize: '42px', fontWeight: '900', color: '#FFD700' }}>8+</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>YEARS</div>
                </div>
                <div className="stat-item">
                  <div style={{ fontSize: '42px', fontWeight: '900', color: '#FFD700' }}>25+</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>TEAM</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Hidden on Mobile */}
            <div className="hero-visual" style={{ position: 'relative', height: '600px' }}>
              <div style={{
                position: 'absolute',
                top: '50px',
                right: '100px',
                width: '350px',
                height: '450px',
                background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.1))',
                borderRadius: '30px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,215,0,0.2)',
                padding: '40px',
                transform: 'rotate(-5deg)'
              }}>
                <div style={{ color: '#FFD700', fontSize: '80px', fontWeight: '900', marginBottom: '20px' }}>8</div>
                <div style={{ color: 'white', fontSize: '24px', fontWeight: '700', marginBottom: '15px' }}>Years of Excellence</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: '1.6' }}>
                  Leading Bangladesh's architectural revolution with innovative design and unwavering commitment to quality.
                </div>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '50px',
                right: '150px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,215,0,0.3), transparent)',
                borderRadius: '50%',
                filter: 'blur(40px)'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section style={{ padding: '120px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>OUR STORY</div>
            <h2 className="section-heading" style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              THE <span style={{ color: '#FFD700' }}>JOURNEY</span>
            </h2>
          </div>

          <div className="story-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'white', marginBottom: '30px' }}>
                From Vision to Reality
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '25px' }}>
                Founded by Architect Mohammad Insaf in 2018, our studio emerged from a singular vision: 
                to redefine architectural excellence in Bangladesh by merging international design standards 
                with local expertise.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '25px' }}>
                What started as a two-person operation has grown into a full-service architectural firm 
                with 25+ professionals, including licensed architects, structural engineers, and interior designers.
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                Today, we've successfully completed 530+ projects, maintaining a 100% RAJUK approval success 
                rate and establishing ourselves as Bangladesh's premier architectural consultancy.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(255,165,0,0.02))',
              borderRadius: '30px',
              padding: '50px',
              border: '1px solid rgba(255,215,0,0.1)'
            }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '30px' }}>
                Our Achievements
              </h3>
              {[
                { year: '2018', title: 'Studio Founded', desc: 'Started our journey with a vision' },
                { year: '2019', title: 'RAJUK Panel Listed', desc: 'Official recognition achieved' },
                { year: '2020', title: '100 Projects', desc: 'First major milestone reached' },
                { year: '2022', title: 'Team Expansion', desc: 'Grew to 25+ professionals' },
                { year: '2024', title: '500+ Projects', desc: 'Became industry leader' }
              ].map((achievement, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '25px',
                  paddingBottom: '25px',
                  borderBottom: idx < 4 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                }}>
                  <div style={{
                    width: '60px',
                    flexShrink: 0,
                    color: '#FFD700',
                    fontSize: '16px',
                    fontWeight: '700'
                  }}>{achievement.year}</div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '5px' }}>
                      {achievement.title}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                      {achievement.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section style={{ padding: '120px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>THE TEAM</div>
            <h2 className="section-heading" style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              MEET THE <span style={{ color: '#FFD700' }}>EXPERTS</span>
            </h2>
          </div>

          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { name: 'Ar. Mohammad Insaf', role: 'Principal Architect', exp: '10+ years', specialty: 'Luxury Residential' },
              { name: 'Eng. Rahman Khan', role: 'Structural Engineer', exp: '12+ years', specialty: 'BNBC Compliance' },
              { name: 'Ar. Sarah Ahmed', role: 'Senior Architect', exp: '8+ years', specialty: 'Commercial Design' },
              { name: 'Ar. Nabila Islam', role: 'Interior Designer', exp: '6+ years', specialty: 'Spatial Planning' }
            ].map((member, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.1))',
                  margin: '0 auto 25px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(255,215,0,0.3)',
                  fontSize: '48px'
                }}>
                  👤
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: '14px', color: '#FFD700', marginBottom: '5px' }}>{member.role}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>{member.exp}</div>
                <div style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.4)',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(255,215,0,0.1)',
                  borderRadius: '15px',
                  display: 'inline-block'
                }}>
                  {member.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION - BENTO GRID */}
      <section style={{ padding: '120px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>OUR VALUES</div>
            <h2 className="section-heading" style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              WHAT WE <span style={{ color: '#FFD700' }}>STAND FOR</span>
            </h2>
          </div>

          <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {[
              { icon: '⭐', title: 'Excellence', desc: 'Uncompromising quality in every detail', color: 'rgba(255,215,0,0.1)' },
              { icon: '💡', title: 'Innovation', desc: 'Pushing boundaries of design', color: 'rgba(255,165,0,0.1)' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparent and honest approach', color: 'rgba(255,215,0,0.05)' },
              { icon: '🎯', title: 'Precision', desc: 'Meticulous attention to detail', color: 'rgba(255,165,0,0.05)' },
              { icon: '🏆', title: 'Leadership', desc: 'Setting industry standards', color: 'rgba(255,215,0,0.08)' },
              { icon: '🌱', title: 'Sustainability', desc: 'Eco-conscious design solutions', color: 'rgba(255,165,0,0.08)' }
            ].map((value, idx) => (
              <div key={idx} style={{
                background: value.color,
                borderRadius: '25px',
                padding: '50px',
                border: '1px solid rgba(255,215,0,0.2)',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '60px', marginBottom: '25px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '15px' }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '120px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1), transparent 70%)'
      }}>
        <div className="cta-content" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="cta-heading" style={{
            fontSize: '56px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '30px',
            lineHeight: '1.1'
          }}>
            Ready to Build Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Dream Project?</span>
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Join 530+ satisfied clients who trusted us with their vision.
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

      {/* FOOTER - COMPLETE */}
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
                    cursor: 'pointer'
                  }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
                      {social[0].toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>SERVICES</h4>
              {['Architecture', 'Structure', 'RAJUK Approval', 'Interior', 'Landscape'].map((item, idx) => (
                <p key={idx} style={{ 
                  color: 'rgba(255,255,255,0.5)', 
                  fontSize: '14px', 
                  marginBottom: '12px',
                  cursor: 'pointer'
                }}>
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
                  <p style={{ 
                    color: 'rgba(255,255,255,0.5)', 
                    fontSize: '14px', 
                    marginBottom: '12px',
                    cursor: 'pointer'
                  }}>
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>

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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }

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
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding: 0 20px !important;
          }
          
          .hero-visual {
            display: none !important;
          }
          
          .hero-content {
            padding-left: 0 !important;
            text-align: center !important;
          }
          
          .hero-badge {
            margin: 0 auto 20px !important;
          }
          
          .hero-heading {
            font-size: 42px !important;
            text-align: center !important;
            line-height: 1.1 !important;
          }
          
          .hero-subtitle {
            font-size: 16px !important;
            margin: 0 auto 30px !important;
            text-align: center !important;
          }
          
          .stats-row {
            justify-content: center !important;
            gap: 30px !important;
          }
          
          .stat-item {
            text-align: center !important;
          }
          
          /* Story Grid */
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          /* Section Headings */
          .section-heading {
            font-size: 32px !important;
            text-align: center !important;
          }
          
          /* Team Grid */
          .team-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
          
          /* Values Grid */
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
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
          
          .stat-item div:first-child {
            font-size: 32px !important;
          }
          
          .section-heading {
            font-size: 28px !important;
          }
          
          .cta-heading {
            font-size: 28px !important;
          }
          
          /* Team Grid - 1 column on very small screens */
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-heading {
            font-size: 56px !important;
          }
          
          .team-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .values-grid {
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
        }
      `}</style>
    </div>
  )
}