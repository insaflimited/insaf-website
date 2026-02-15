'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      icon: '🏛️',
      title: 'Architectural Design',
      tagline: 'Vision to Reality',
      description: 'From conceptual sketches to detailed construction drawings, we craft spaces that inspire. Our designs blend aesthetic excellence with functional brilliance.',
      features: ['Conceptual Design', '3D Visualization', 'Working Drawings', 'Material Selection', 'Design Consultation'],
      price: 'Custom Quote'
    },
    {
      id: 2,
      icon: '🏗️',
      title: 'Structural Engineering',
      tagline: 'Built to Last',
      description: 'In-house structural engineers ensuring your building stands the test of time. BNBC compliant calculations and earthquake-resistant design.',
      features: ['Load Calculations', 'Foundation Design', 'Structural Analysis', 'BNBC Compliance', 'Site Supervision'],
      price: 'From ₹50,000'
    },
    {
      id: 3,
      icon: '📋',
      title: 'RAJUK Approval',
      tagline: '100% Success Rate',
      description: '530+ successful approvals. We handle the entire process from documentation to final approval. Average approval time: 4-6 months.',
      features: ['Document Preparation', 'DAP Analysis', 'Application Submission', 'Follow-up', 'Approval Collection'],
      price: 'From ₹75,000'
    },
    {
      id: 4,
      icon: '🎨',
      title: 'Interior Design',
      tagline: 'Luxury Within',
      description: 'Transform your interiors into masterpieces. Our designers create spaces that reflect your personality while maximizing functionality.',
      features: ['Space Planning', '3D Renders', 'Furniture Design', 'Material Selection', 'Execution Support'],
      price: 'From ₹40,000'
    },
    {
      id: 5,
      icon: '🥽',
      title: '3D Visualization & VR',
      tagline: 'See Before You Build',
      description: 'Photorealistic 3D renders and immersive VR walkthroughs. Experience your space before construction begins.',
      features: ['Exterior Renders', 'Interior Renders', 'VR Walkthrough', '360° Views', 'Animation Videos'],
      price: 'From ₹30,000'
    },
    {
      id: 6,
      icon: '👷',
      title: 'Construction Management',
      tagline: 'Quality Assured',
      description: 'End-to-end project supervision ensuring your vision is executed perfectly. Regular site visits and progress reporting.',
      features: ['Site Supervision', 'Quality Control', 'Contractor Coordination', 'Progress Tracking', 'Problem Resolution'],
      price: '5% of Project Value'
    }
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>
      
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
            <Link href="/services" style={{ color: '#FFD700', textDecoration: 'none' }}>SERVICES</Link>
            <Link href="/portfolio" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>PORTFOLIO</Link>
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
              GET QUOTE →
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '120px',
        paddingBottom: '60px'
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
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
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>PREMIUM SERVICES</span>
            </div>

            <h1 style={{
              fontSize: '80px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-3px'
            }}>
              SERVICES THAT
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>TRANSFORM</span>
            </h1>

            <p style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '50px',
              maxWidth: '700px',
              margin: '0 auto 50px',
              lineHeight: '1.6'
            }}>
              From architectural brilliance to structural precision, we deliver 
              comprehensive solutions that exceed expectations.
            </p>

            <div style={{
              display: 'flex',
              gap: '60px',
              justifyContent: 'center',
              padding: '40px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <div>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFD700' }}>6</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>CORE SERVICES</div>
              </div>
              <div>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFD700' }}>100%</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>SUCCESS RATE</div>
              </div>
              <div>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFD700' }}>24/7</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>OUR EXPERTISE</div>
            <h2 style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              COMPLETE <span style={{ color: '#FFD700' }}>SOLUTIONS</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {services.map((service, idx) => (
              <div
                key={service.id}
                onClick={() => setActiveService(idx)}
                style={{
                  background: activeService === idx 
                    ? 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))' 
                    : 'rgba(255,255,255,0.03)',
                  borderRadius: '25px',
                  padding: '40px',
                  border: activeService === idx 
                    ? '2px solid rgba(255,215,0,0.3)' 
                    : '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {activeService === idx && (
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
                    borderRadius: '50%',
                    filter: 'blur(40px)'
                  }}></div>
                )}

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '50px', marginBottom: '20px' }}>{service.icon}</div>
                  
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(255,215,0,0.15)',
                    borderRadius: '20px',
                    marginBottom: '15px'
                  }}>
                    <span style={{ color: '#FFD700', fontSize: '11px', fontWeight: '600', letterSpacing: '1px' }}>
                      {service.tagline}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '800',
                    color: 'white',
                    marginBottom: '15px'
                  }}>{service.title}</h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                  }}>{service.description}</p>

                  <div style={{
                    padding: '15px 20px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '15px',
                    marginBottom: '20px'
                  }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>
                      STARTING FROM
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#FFD700' }}>
                      {service.price}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '14px',
                    color: activeService === idx ? '#FFD700' : 'rgba(255,255,255,0.7)',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    VIEW DETAILS
                    <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DETAIL SECTION */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                backgroundColor: 'rgba(255,215,0,0.1)',
                borderRadius: '30px',
                marginBottom: '25px'
              }}>
                <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                  FEATURED SERVICE
                </span>
              </div>

              <h2 style={{
                fontSize: '48px',
                fontWeight: '900',
                color: 'white',
                marginBottom: '25px',
                lineHeight: '1.1'
              }}>{services[activeService].title}</h2>

              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.8',
                marginBottom: '35px'
              }}>{services[activeService].description}</p>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'white',
                marginBottom: '20px'
              }}>What's Included:</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      color: '#0A0A0A',
                      fontWeight: 'bold'
                    }}>✓</div>
                    <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button style={{
                  padding: '18px 40px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '50px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '15px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  GET QUOTE
                  <span style={{ fontSize: '20px' }}>→</span>
                </button>
              </Link>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.05))',
              borderRadius: '30px',
              padding: '60px',
              border: '1px solid rgba(255,215,0,0.2)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
                borderRadius: '50%',
                filter: 'blur(60px)'
              }}></div>

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '120px', marginBottom: '30px' }}>
                  {services[activeService].icon}
                </div>
                <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
                  STARTING FROM
                </div>
                <div style={{ fontSize: '48px', fontWeight: '900', color: '#FFD700', marginBottom: '20px' }}>
                  {services[activeService].price}
                </div>
                <div style={{
                  padding: '12px 25px',
                  backgroundColor: 'rgba(255,215,0,0.15)',
                  borderRadius: '30px',
                  display: 'inline-block'
                }}>
                  <span style={{ color: '#FFD700', fontSize: '13px', fontWeight: '600' }}>
                    CUSTOM PACKAGES AVAILABLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>
              HOW WE WORK
            </div>
            <h2 style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              OUR <span style={{ color: '#FFD700' }}>PROCESS</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision', time: 'Day 1' },
              { step: '02', title: 'Planning', desc: 'Detailed strategy & timeline', time: 'Week 1' },
              { step: '03', title: 'Execution', desc: 'Bringing design to life', time: 'Month 1-3' },
              { step: '04', title: 'Delivery', desc: 'Perfect handover', time: 'Final' }
            ].map((process, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '24px',
                  fontWeight: '900',
                  color: '#0A0A0A'
                }}>{process.step}</div>

                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>
                  {process.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '15px' }}>
                  {process.desc}
                </p>
                <div style={{
                  padding: '6px 15px',
                  backgroundColor: 'rgba(255,215,0,0.1)',
                  borderRadius: '15px',
                  display: 'inline-block'
                }}>
                  <span style={{ fontSize: '11px', color: '#FFD700', fontWeight: '600' }}>
                    {process.time}
                  </span>
                </div>

                {idx < 3 && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-15px',
                    transform: 'translateY(-50%)',
                    fontSize: '24px',
                    color: '#FFD700',
                    zIndex: 10
                  }}>→</div>
                )}
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
          <div style={{
            display: 'inline-block',
            padding: '10px 25px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '30px',
            marginBottom: '30px'
          }}>
            <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '2px', fontWeight: '600' }}>
              LIMITED SLOTS AVAILABLE
            </span>
          </div>

          <h2 style={{
            fontSize: '64px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.1'
          }}>
            Ready to Start Your
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Dream Project?</span>
          </h2>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Free consultation for the first 10 inquiries this month.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
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
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                GET FREE QUOTE
                <span style={{ fontSize: '24px' }}>→</span>
              </button>
            </Link>
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
              {['About Us', 'Portfolio', 'Process', 'Testimonials', 'Contact'].map((item, idx) => (
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
            </div>
          </div>

          <div style={{ 
            marginTop: '80px', 
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
              © 2026 INSAF LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}