'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you! We will contact you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        message: ''
      })
    }, 2000)
  }

  const inputStyle = {
    width: '100%',
    padding: '18px 25px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '15px',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s'
  }

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
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>BLOG</Link>
          </div>

          {/* Desktop CTA Badge */}
          <div className="desktop-cta" style={{
            padding: '12px 25px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            borderRadius: '30px',
            color: '#0A0A0A',
            fontWeight: '700',
            fontSize: '13px',
            letterSpacing: '1px'
          }}>
            CONTACT
          </div>

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
            <Link href="/blog" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>BLOG</Link>
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
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
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
                  <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                    FREE CONSULTATION
                  </span>
                </div>

                <h1 className="hero-heading" style={{
                  fontSize: '72px',
                  fontWeight: '900',
                  color: 'white',
                  lineHeight: '1',
                  marginBottom: '30px',
                  letterSpacing: '-3px'
                }}>
                  LET'S BUILD
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>TOGETHER</span>
                </h1>

                <p className="hero-subtitle" style={{
                  fontSize: '20px',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '40px',
                  lineHeight: '1.6',
                  maxWidth: '500px'
                }}>
                  Ready to start your project? Get in touch with our team for a 
                  free consultation and let us bring your vision to life.
                </p>

                {/* Quick Contact Options */}
                <div className="quick-contacts" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <a
                    href="https://wa.me/8801958140774"
                    target="_blank"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px 30px',
                      backgroundColor: '#25D366',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '16px',
                      transition: 'all 0.3s',
                      width: 'fit-content'
                    }}
                  >
                    <span style={{ fontSize: '24px' }}>💬</span>
                    WHATSAPP NOW
                    <span style={{ marginLeft: 'auto', fontSize: '18px' }}>→</span>
                  </a>

                  <a
                    href="tel:+8801958140774"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px 30px',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '16px',
                      width: 'fit-content'
                    }}
                  >
                    <span style={{ fontSize: '24px' }}>📞</span>
                    +880 1958-140774
                  </a>
                </div>
              </div>

              {/* Right - Stats */}
              <div className="why-choose" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '30px',
                padding: '50px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '40px',
                  textAlign: 'center'
                }}>
                  Why Choose <span style={{ color: '#FFD700' }}>Us?</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                  {[
                    { icon: '⚡', title: '24-Hour Response', desc: 'We respond within 24 hours' },
                    { icon: '🏆', title: '100% Success Rate', desc: '530+ approved projects' },
                    { icon: '🔒', title: 'No Obligation', desc: 'Free consultation, no pressure' },
                    { icon: '👨‍💼', title: 'Expert Team', desc: 'Licensed architects & engineers' }
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '20px',
                      backgroundColor: 'rgba(255,215,0,0.05)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255,215,0,0.1)'
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        flexShrink: 0,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.1))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px'
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '3px' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            {/* Left - Form */}
            <div className="form-section">
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                backgroundColor: 'rgba(255,215,0,0.1)',
                borderRadius: '30px',
                marginBottom: '25px'
              }}>
                <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                  PROJECT INQUIRY
                </span>
              </div>

              <h2 className="form-heading" style={{
                fontSize: '48px',
                fontWeight: '900',
                color: 'white',
                marginBottom: '20px',
                letterSpacing: '-1px'
              }}>
                Tell Us About
                <br />
                <span style={{ color: '#FFD700' }}>Your Project</span>
              </h2>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '40px',
                lineHeight: '1.6'
              }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      color: formData.projectType ? 'white' : 'rgba(255,255,255,0.5)',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#0F0F0F' }}>Project Type</option>
                    <option value="residential" style={{ backgroundColor: '#0F0F0F' }}>Residential</option>
                    <option value="commercial" style={{ backgroundColor: '#0F0F0F' }}>Commercial</option>
                    <option value="interior" style={{ backgroundColor: '#0F0F0F' }}>Interior Design</option>
                    <option value="renovation" style={{ backgroundColor: '#0F0F0F' }}>Renovation</option>
                    <option value="consultation" style={{ backgroundColor: '#0F0F0F' }}>Consultation Only</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      color: formData.budget ? 'white' : 'rgba(255,255,255,0.5)',
                      appearance: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#0F0F0F' }}>Estimated Budget</option>
                    <option value="below-50" style={{ backgroundColor: '#0F0F0F' }}>Below ৳50 Lac</option>
                    <option value="50-1cr" style={{ backgroundColor: '#0F0F0F' }}>৳50 Lac - 1 Cr</option>
                    <option value="1cr-5cr" style={{ backgroundColor: '#0F0F0F' }}>৳1 Cr - 5 Cr</option>
                    <option value="above-5cr" style={{ backgroundColor: '#0F0F0F' }}>Above ৳5 Cr</option>
                  </select>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project... (location, size, requirements)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    style={{
                      ...inputStyle,
                      resize: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FFD700'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '20px',
                    background: isSubmitting 
                      ? 'rgba(255,215,0,0.5)' 
                      : 'linear-gradient(135deg, #FFD700, #FFA500)',
                    border: 'none',
                    borderRadius: '15px',
                    color: '#0A0A0A',
                    fontWeight: '800',
                    fontSize: '16px',
                    letterSpacing: '1px',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  {!isSubmitting && <span style={{ fontSize: '20px' }}>→</span>}
                </button>

                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.4)',
                  textAlign: 'center',
                  marginTop: '20px'
                }}>
                  ✓ Free consultation • ✓ No obligation • ✓ Response within 24 hours
                </p>
              </form>
            </div>

            {/* Right - Contact Info */}
            <div className="info-section">
              <div style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.05))',
                borderRadius: '30px',
                padding: '50px',
                border: '1px solid rgba(255,215,0,0.2)',
                marginBottom: '30px'
              }}>
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '30px' }}>
                  Contact <span style={{ color: '#FFD700' }}>Information</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '15px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0
                    }}>
                      📍
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                        Office Address
                      </div>
                      <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                        Kazlar par, Jatrabari<br />
                        Dhaka 1204<br />
                        Bangladesh
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '15px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0
                    }}>
                      📞
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                        Phone
                      </div>
                      <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                        +880 1958-140774<br />
                        +880 2-9876543
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '15px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0
                    }}>
                      ✉️
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                        Email
                      </div>
                      <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                        contact@insaflimited.com<br />
                        projects@insaflimited.com
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '15px',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0
                    }}>
                      🕐
                    </div>
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                        Office Hours
                      </div>
                      <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                        Saturday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '20px' }}>
                  Follow Us
                </h4>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  {['facebook', 'instagram', 'linkedin', 'youtube'].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(255,215,0,0.1)',
                        border: '1px solid rgba(255,215,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFD700',
                        fontSize: '14px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                      }}
                    >
                      {social[0].toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / CTA SECTION */}
      <section style={{
        padding: '100px 5%',
        backgroundColor: '#0A0A0A',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1), transparent 70%)'
      }}>
        <div className="final-cta" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="cta-heading" style={{
            fontSize: '48px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            letterSpacing: '-1px'
          }}>
            Ready to Start?
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px'
          }}>
            Join 530+ satisfied clients who trusted us with their vision.
          </p>

          <div className="cta-buttons-final" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/8801958140774"
              target="_blank"
              style={{
                padding: '20px 40px',
                backgroundColor: '#25D366',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '800',
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              💬 WHATSAPP NOW
            </a>
            <a
              href="tel:+8801958140774"
              style={{
                padding: '20px 40px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                borderRadius: '50px',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 20px 40px rgba(255,215,0,0.3)'
              }}
            >
              📞 CALL NOW
            </a>
          </div>

          <div style={{ marginTop: '40px', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
            <span style={{ color: '#FFD700' }}>✓</span> No obligation 
            <span style={{ margin: '0 15px' }}>•</span>
            <span style={{ color: '#FFD700' }}>✓</span> 100% RAJUK success rate
            <span style={{ margin: '0 15px' }}>•</span>
            <span style={{ color: '#FFD700' }}>✓</span> In-house engineers
          </div>
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
            {/* Brand */}
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
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.8' }}>
                Defining Bangladesh's skyline with architectural excellence since 2018.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>SERVICES</h4>
              {['Architecture', 'Structure', 'RAJUK Approval', 'Interior', 'Landscape'].map((item, idx) => (
                <p key={idx} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '12px' }}>
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
                { name: 'Blog', link: '/blog' },
                { name: 'Contact', link: '/contact' }
              ].map((item, idx) => (
                <Link key={idx} href={item.link} style={{ textDecoration: 'none', display: 'block' }}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '12px' }}>
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
                📍 Jatrabari, Dhaka 1204
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
            marginTop: '60px',
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

      {/* Mobile Responsive CSS */}
      <style>{`
        body {
          overflow-x: hidden !important;
        }

        .mobile-menu-btn {
          display: none !important;
        }

        @media (max-width: 768px) {
          /* Navigation */
          nav {
            width: 95% !important;
            padding: 12px 20px !important;
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
          
          /* Hero Grid */
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .hero-content {
            text-align: center !important;
          }
          
          .hero-badge {
            margin: 0 auto 20px !important;
          }
          
          .hero-heading {
            font-size: 42px !important;
            letter-spacing: -1px !important;
          }
          
          .hero-subtitle {
            margin: 0 auto 30px !important;
            font-size: 16px !important;
          }
          
          .quick-contacts {
            align-items: center !important;
          }
          
          .quick-contacts a {
            width: 100% !important;
            max-width: 350px !important;
          }
          
          .why-choose {
            padding: 30px 20px !important;
          }
          
          /* Contact Grid */
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .form-heading {
            font-size: 32px !important;
            text-align: center !important;
          }
          
          .form-section > div:first-child {
            margin: 0 auto 20px !important;
          }
          
          .form-row {
            grid-template-columns: 1fr !important;
          }
          
          .info-section > div:first-child {
            padding: 30px 20px !important;
          }
          
          /* Final CTA */
          .final-cta {
            padding: 0 10px !important;
          }
          
          .cta-heading {
            font-size: 32px !important;
          }
          
          .cta-buttons-final {
            flex-direction: column !important;
            align-items: center !important;
          }
          
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

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 32px !important;
          }
          
          .form-heading {
            font-size: 28px !important;
          }
          
          .cta-heading {
            font-size: 28px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-heading {
            font-size: 56px !important;
          }
          
          .contact-grid {
            gap: 50px !important;
          }
          
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px !important;
          }
        }
      `}</style>
    </div>
  )
}