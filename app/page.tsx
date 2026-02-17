'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const sparklePositions = [
    { top: '25%', left: '15%' },
    { top: '65%', left: '85%' },
    { top: '45%', left: '75%' },
    { top: '80%', left: '35%' },
    { top: '35%', left: '55%' },
    { top: '70%', left: '25%' },
    { top: '50%', left: '65%' },
    { top: '60%', left: '45%' }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif', 
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* FLOATING GLOW ORBS */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        animation: 'floatOrb 15s ease-in-out infinite',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
      
      <div style={{
        position: 'fixed',
        bottom: '10%',
        left: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(102,126,234,0.12), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        animation: 'floatOrb 18s ease-in-out infinite reverse',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      {/* ========== HERO SECTION ========== */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="hero-grid" style={{ 
          width: '100%', 
          padding: '0 5%', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          
          <div className="hero-content" style={{ 
            paddingLeft: '5%',
            animation: 'fadeInLeft 1s ease-out'
          }}>
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 20px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px',
              animation: 'fadeInDown 0.8s ease-out'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%', 
                animation: 'pulseDot 2s ease-in-out infinite' 
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>
                RAJUK PANEL LISTED
              </span>
            </div>

            <h1 style={{ 
              fontSize: '72px', 
              fontWeight: '900', 
              color: 'white', 
              lineHeight: '1',
              marginBottom: '20px',
              letterSpacing: '-2px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              DESIGN<br/>
              <span style={{ 
                color: 'transparent', 
                WebkitTextStroke: '2px #FFD700',
                animation: 'strokeGlow 3s ease-in-out infinite'
              }}>BEYOND</span><br/>
              <span style={{ 
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>LUXURY</span>
            </h1>

            <p style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.6)', 
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '450px',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Where architectural excellence meets structural precision. 
              Creating spaces that define Bangladesh's skyline since 2018.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '40px', 
              marginBottom: '40px', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              {[
                { number: '530+', label: 'PROJECTS' },
                { number: '8+', label: 'YEARS' },
                { number: '100%', label: 'SUCCESS' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  animation: `statPop 0.6s ease-out ${0.8 + idx * 0.15}s backwards`
                }}>
                  <div style={{ 
                    fontSize: '36px', 
                    fontWeight: '900', 
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(255,215,0,0.3)'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.6s ease-out 0.8s backwards'
            }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button className="cta-btn-primary" style={{
                  padding: '18px 35px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '60px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'btnShine 3s ease-in-out infinite'
                  }}></div>
                  <span style={{ position: 'relative', zIndex: 1 }}>BOOK CONSULTATION</span>
                  <span style={{ fontSize: '20px', position: 'relative', zIndex: 1 }}>→</span>
                </button>
              </Link>
              
              <Link href="/portfolio" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '18px 35px',
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: '60px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s'
                }}>
                  VIEW PORTFOLIO
                </button>
              </Link>
            </div>
          </div>

          <div className="hero-visual" style={{ position: 'relative', height: '600px' }}>
            <div style={{
              position: 'absolute',
              top: '50px',
              right: '100px',
              width: '300px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))',
              borderRadius: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,215,0,0.3)',
              padding: '30px',
              transform: 'rotate(-5deg)',
              animation: 'cardFloat1 6s ease-in-out infinite',
              boxShadow: '0 30px 80px rgba(255,215,0,0.3)'
            }}>
              <div style={{ 
                color: '#FFD700', 
                fontSize: '24px', 
                fontWeight: '900', 
                marginBottom: '20px',
                animation: 'numberGlow 2s ease-in-out infinite'
              }}>01</div>
              <div style={{ color: 'white', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
                Architectural Design
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6' }}>
                Modern aesthetics with timeless appeal. Every line drawn with purpose.
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '150px',
              right: '0px',
              width: '300px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              borderRadius: '30px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '30px',
              transform: 'rotate(5deg)',
              animation: 'cardFloat2 6s ease-in-out infinite 1s',
              boxShadow: '0 30px 80px rgba(102,126,234,0.3)'
            }}>
              <div style={{ 
                color: '#667eea', 
                fontSize: '24px', 
                fontWeight: '900', 
                marginBottom: '20px',
                animation: 'numberGlow 2s ease-in-out infinite 0.5s'
              }}>02</div>
              <div style={{ color: 'white', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
                Structural Safety
              </div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6' }}>
                In-house engineers ensuring your investment stands the test of time.
              </div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '50px',
              right: '150px',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.4), transparent)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animation: 'orbPulse 4s ease-in-out infinite'
            }}></div>

            {sparklePositions.map((pos, i) => (
              <div 
                key={i}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#FFD700',
                  borderRadius: '50%',
                  top: pos.top,
                  left: pos.left,
                  animation: `sparkle 2s ease-in-out ${i * 0.3}s infinite`,
                  boxShadow: '0 0 10px #FFD700'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERTISE SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px'
            }}>
              OUR EXPERTISE
            </div>
            <h2 style={{ 
              fontSize: '48px', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px'
            }}>
              CRAFTING <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>EXCELLENCE</span>
            </h2>
          </div>

          {/* Row 1 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(255,215,0,0.3)',
              transition: 'all 0.4s'
            }}>
              <div style={{ fontSize: '45px', marginBottom: '15px' }}>🏛️</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
                RAJUK Approval
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '20px' }}>
                530+ successful approvals with 100% success rate. Fast-track processing.
              </p>
              <span style={{ 
                padding: '8px 18px', 
                backgroundColor: 'rgba(255,215,0,0.2)', 
                borderRadius: '20px',
                color: '#FFD700',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid rgba(255,215,0,0.3)'
              }}>
                4-Month Average
              </span>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(102,126,234,0.2)',
              transition: 'all 0.4s'
            }}>
              <div style={{ fontSize: '45px', marginBottom: '15px' }}>🏠</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
                Architectural Design
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                Modern aesthetics with functional excellence. Unique designs for every project.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(255,142,83,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(255,107,107,0.2)',
              transition: 'all 0.4s'
            }}>
              <div style={{ fontSize: '45px', marginBottom: '15px' }}>🏗️</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
                Structural Design
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                BNBC compliant engineering with in-house structural engineers.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            {[
              { icon: '📐', title: 'DAP Analysis', desc: 'Feasibility & zoning check' },
              { icon: '🧪', title: 'Soil Test', desc: 'Foundation safety analysis' },
              { icon: '📡', title: 'Digital Survey', desc: 'GPS land measurement' },
              { icon: '📊', title: 'Estimate & BOQ', desc: 'Detailed cost planning' }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{service.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                  {service.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            {[
              { icon: '⚡', title: 'Electrical Design', desc: 'Wiring & load calculation' },
              { icon: '🚿', title: 'Plumbing Design', desc: 'Water & drainage system' },
              { icon: '🔥', title: 'Fire Safety', desc: 'Safety system design' },
              { icon: '🛋️', title: 'Interior Design', desc: 'Luxury space planning' }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{service.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                  {service.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '20px', 
            marginBottom: '20px' 
          }}>
            {[
              { icon: '🥽', title: '3D Visualization & VR Walkthrough', desc: 'Experience your space before it\'s built' },
              { icon: '👷', title: 'Construction Supervision', desc: 'On-site quality control & management' }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.3s'
              }}>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'white', marginBottom: '8px' }}>
                    {service.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                    {service.desc}
                  </p>
                </div>
                <div style={{ fontSize: '50px' }}>{service.icon}</div>
              </div>
            ))}
          </div>

          {/* Row 5 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px' 
          }}>
            {[
              { icon: '🌳', title: 'Landscape Design', desc: 'Beautiful outdoor spaces' },
              { icon: '🏢', title: 'Project Development', desc: 'End-to-end solutions' },
              { icon: '📋', title: 'Legal Documentation', desc: 'Complete paperwork support' }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '40px' }}>{service.icon}</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '5px' }}>
                    {service.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ 
              fontSize: '42px', 
              fontWeight: '900', 
              color: 'white', 
              marginBottom: '10px'
            }}>
              Featured <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Projects</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>
              Defining Bangladesh's architectural landscape
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '25px'
          }}>
            {[
              { 
                name: 'Muktar Plaza', 
                type: 'Luxury Residence', 
                location: 'Rayerbag, Jatrabari',
                size: '8,500 sqft',
                year: '2023',
                color: '#667eea'
              },
              { 
                name: 'Badsha Villa', 
                type: 'Residential Building', 
                location: 'Kazlar par Jatrabari',
                size: '3,000 sqft',
                year: '2025',
                color: '#f093fb'
              },
              { 
                name: 'City Square', 
                type: 'Residential & Commercial', 
                location: 'Saddam Market, Matuail',
                size: '6,500 sqft',
                year: '2025',
                color: '#4facfe'
              },
              { 
                name: 'Khan Monzil', 
                type: 'Minimalist Home', 
                location: 'Fatullah, Narayangonj',
                size: '4,500 sqft',
                year: '2023',
                color: '#43e97b'
              }
            ].map((project, idx) => (
              <div 
                key={idx}
                style={{
                  minHeight: '450px',
                  borderRadius: '20px',
                  background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s',
                  border: `1px solid ${project.color}30`
                }}>
                
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '30px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
                  zIndex: 2
                }}>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '6px 12px', 
                    backgroundColor: `${project.color}40`,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    marginBottom: '15px',
                    border: `1px solid ${project.color}60`
                  }}>
                    <span style={{ color: project.color, fontSize: '12px', fontWeight: '600' }}>
                      {project.year}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '10px' }}>
                    {project.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '5px' }}>
                    {project.type} • {project.size}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
                    📍 {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>
              TESTIMONIALS
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: '900', color: 'white' }}>
              Client <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Stories</span>
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {[
              {
                name: 'Ahmed Hassan',
                role: 'CEO, Hassan Group',
                text: 'INSAF transformed our vision into an architectural masterpiece. Their attention to detail and RAJUK expertise saved us months.',
                rating: 5
              },
              {
                name: 'Tahmina Rahman',
                role: 'Homeowner',
                text: 'From concept to completion, the team exceeded every expectation. Our dream home is now a reality thanks to their dedication.',
                rating: 5
              },
              {
                name: 'Rafiq Industries',
                role: 'Commercial Developer',
                text: '530+ projects speak volumes. They delivered our complex on time with zero RAJUK issues. Highly recommended!',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                padding: '35px',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
                transition: 'all 0.3s'
              }}>
                <div style={{ 
                  fontSize: '40px', 
                  color: '#FFD700', 
                  opacity: 0.3,
                  position: 'absolute',
                  top: '20px',
                  right: '30px'
                }}>"</div>
                
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD700', fontSize: '18px' }}>★</span>
                  ))}
                </div>

                <p style={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  fontSize: '15px', 
                  lineHeight: '1.8',
                  marginBottom: '25px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>
                    {testimonial.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '3px' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>
              THE PROCESS
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: '900', color: 'white' }}>
              From Vision to <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Reality</span>
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '3px',
              background: 'linear-gradient(to bottom, #FFD700, #FFA500)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 20px rgba(255,215,0,0.5)'
            }}></div>

            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements', time: 'Week 1', color: '#667eea' },
              { step: '02', title: 'Feasibility Study', desc: 'DAP check, site analysis, and budget planning', time: 'Week 2-3', color: '#f093fb' },
              { step: '03', title: 'Design Development', desc: '3D visualization and architectural planning', time: 'Week 4-8', color: '#4facfe' },
              { step: '04', title: 'RAJUK Submission', desc: 'Complete documentation and approval process', time: 'Month 3-6', color: '#43e97b' },
              { step: '05', title: 'Construction Support', desc: 'Site supervision and quality assurance', time: 'Ongoing', color: '#fa709a' }
            ].map((process, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '60px',
                justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
                paddingLeft: idx % 2 === 0 ? '0' : '52%',
                paddingRight: idx % 2 === 0 ? '52%' : '0'
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: `2px solid ${process.color}40`,
                  position: 'relative',
                  textAlign: idx % 2 === 0 ? 'right' : 'left',
                  transition: 'all 0.3s'
                }}>
                  <div style={{ 
                    color: process.color, 
                    fontSize: '24px', 
                    fontWeight: '900',
                    marginBottom: '10px',
                    textShadow: `0 0 20px ${process.color}`
                  }}>{process.step}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>
                    {process.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>
                    {process.desc}
                  </p>
                  <span style={{ 
                    fontSize: '12px', 
                    color: process.color,
                    padding: '4px 12px',
                    backgroundColor: `${process.color}20`,
                    borderRadius: '15px',
                    display: 'inline-block',
                    border: `1px solid ${process.color}40`
                  }}>
                    {process.time}
                  </span>
                  
                  <div style={{
                    position: 'absolute',
                    [idx % 2 === 0 ? 'right' : 'left']: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '24px',
                    height: '24px',
                    background: `linear-gradient(135deg, ${process.color}, ${process.color}cc)`,
                    borderRadius: '50%',
                    boxShadow: `0 0 30px ${process.color}`
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA SECTION ========== */}
      <section style={{ 
        minHeight: '80vh', 
        background: 'linear-gradient(135deg, #0A0A0A, #1a1a1a)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 5%',
        zIndex: 1
      }}>
        {[700, 600, 500].map((size, idx) => (
          <div key={idx} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: '2px solid rgba(255,215,0,0.1)',
            animation: `ringsPulse 4s ease-out ${idx * 0.5}s infinite`,
            zIndex: 0
          }}></div>
        ))}

        <div style={{ 
          width: '100%', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 2,
          padding: '0 5%'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px' }}>
              <span style={{
                padding: '10px 25px',
                backgroundColor: 'rgba(255,215,0,0.1)',
                border: '1px solid rgba(255,215,0,0.3)',
                borderRadius: '30px',
                color: '#FFD700',
                fontSize: '13px',
                letterSpacing: '2px',
                fontWeight: '600'
              }}>
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
              Ready to Build Your<br/>
              <span style={{ 
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FFD700)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 3s ease-in-out infinite'
              }}>Architectural Legacy?</span>
            </h2>

            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '50px',
              maxWidth: '600px',
              margin: '0 auto 50px'
            }}>
              Join 530+ satisfied clients who trusted us with their vision. 
              Free consultation for the first 10 inquiries this month.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
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
                  gap: '10px',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'btnShine 3s ease-in-out infinite'
                  }}></div>
                  <span style={{ position: 'relative', zIndex: 1 }}>START YOUR PROJECT</span>
                  <span style={{ fontSize: '24px', position: 'relative', zIndex: 1 }}>→</span>
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
                gap: '10px',
                boxShadow: '0 20px 50px rgba(37,211,102,0.3)',
                transition: 'all 0.3s'
              }}>
                <span style={{ fontSize: '20px' }}>💬</span>
                WHATSAPP NOW
              </a>
            </div>

            <div style={{ 
              marginTop: '50px', 
              color: 'rgba(255,255,255,0.4)', 
              fontSize: '14px'
            }}>
              <span style={{ color: '#FFD700' }}>✓</span> No obligation consultation 
              <span style={{ margin: '0 20px' }}>•</span>
              <span style={{ color: '#FFD700' }}>✓</span> 100% RAJUK success rate
              <span style={{ margin: '0 20px' }}>•</span>
              <span style={{ color: '#FFD700' }}>✓</span> In-house engineers
            </div>
          </div>
        </div>
      </section>

      {/* ========== ALL ANIMATIONS ========== */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden !important;
        }

        .cta-btn-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 30px 60px rgba(255,215,0,0.5);
        }

        button:hover {
          transform: translateY(-3px);
          border-color: rgba(255,215,0,0.5);
          background: rgba(255,215,0,0.1);
        }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -60px) scale(1.1); }
          66% { transform: translate(-60px, 60px) scale(0.9); }
        }

        @keyframes pulseDot {
          0%, 100% { 
            transform: scale(1); 
            box-shadow: 0 0 0 0 rgba(255,215,0,0.7);
          }
          50% { 
            transform: scale(1.3); 
            box-shadow: 0 0 0 15px rgba(255,215,0,0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes strokeGlow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,215,0,0.5)); }
          50% { filter: drop-shadow(0 0 30px rgba(255,215,0,0.8)); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes statPop {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes cardFloat1 {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }

        @keyframes cardFloat2 {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes orbPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        @keyframes numberGlow {
          0%, 100% { text-shadow: 0 0 20px currentColor; }
          50% { text-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg);
          }
        }

        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        @keyframes ringsPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          50% { opacity: 0.4; }
          100% {
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
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
          
          h1 {
            font-size: 48px !important;
          }

          h2 {
            font-size: 32px !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 36px !important;
          }

          h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </div>
  )
}