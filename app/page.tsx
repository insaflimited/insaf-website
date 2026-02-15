'use client'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif', 
      overflow: 'hidden',
      overflowX: 'hidden' 
    }}>
      
      {/* FLOATING NAVBAR - GLASS MORPHISM */}
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
          {/* Logo with Animation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '45px',
              height: '45px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(255,215,0,0.5)',
              animation: 'pulse 2s infinite'
            }}>
              <span style={{ color: '#0A0A0A', fontWeight: 'bold', fontSize: '24px' }}>I</span>
            </div>
            <div>
              <div style={{ fontSize: '22px', fontWeight: '900', color: 'white', letterSpacing: '2px' }}>INSAF BUILDING</div>
              <div style={{ fontSize: '10px', color: '#FFD700', letterSpacing: '3px', marginTop: '-2px' }}>DESIGN & CONSULTANT LTD</div>
            </div>
          </div>

          {/* Center Menu - Desktop */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '35px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
            <a href="/" style={{ color: '#FFD700', textDecoration: 'none' }}>HOME</a>
            <a href="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.3s' }}>ABOUT</a>
            <a href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.3s' }}>SERVICES</a>
            <a href="/portfolio" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.3s' }}>PORTFOLIO</a>
            <a href="/blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: '0.3s' }}>BLOG</a>
          </div>

          {/* Premium CTA - Desktop */}
          <button className="desktop-cta" style={{
            padding: '12px 25px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            border: 'none',
            borderRadius: '30px',
            color: '#0A0A0A',
            fontWeight: '700',
            fontSize: '13px',
            letterSpacing: '1px',
            cursor: 'pointer',
            boxShadow: '0 0 30px rgba(255,215,0,0.3)',
            transition: 'all 0.3s'
          }}>
            START PROJECT →
          </button>

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
            <a href="/" onClick={() => setMenuOpen(false)} style={{ color: '#FFD700', textDecoration: 'none', fontSize: '18px', fontWeight: '600' }}>HOME</a>
            <a href="/about" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>ABOUT</a>
            <a href="/services" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>SERVICES</a>
            <a href="/portfolio" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>PORTFOLIO</a>
            <a href="/blog" onClick={() => setMenuOpen(false)} style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '18px', fontWeight: '500' }}>BLOG</a>
            
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
          </div>
        )}
      </nav>

      {/* HERO - SPLIT SCREEN DESIGN */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '60px',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)'
      }}>
        <div className="hero-grid" style={{ 
          width: '100%', 
          padding: '0 5%', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          
          {/* Left - Content */}
          <div className="hero-content" style={{ paddingLeft: '5%', animation: 'slideIn 1s ease-out' }}>
            {/* Premium Badge */}
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
              <div style={{ width: '8px', height: '8px', backgroundColor: '#FFD700', borderRadius: '50%', animation: 'pulse 1s infinite' }}></div>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>RAJUK PANEL LISTED</span>
            </div>

            {/* Main Heading - Typography Focus */}
            <h1 className="hero-heading" style={{ 
              fontSize: '72px', 
              fontWeight: '900', 
              color: 'white', 
              lineHeight: '1',
              marginBottom: '20px',
              letterSpacing: '-2px'
            }}>
              DESIGN<br/>
              <span style={{ color: 'transparent', WebkitTextStroke: '2px #FFD700' }}>BEYOND</span><br/>
              <span style={{ 
                background: 'linear-gradient(135deg, #FFD700, #FFA500)', 
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>LUXURY</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle" style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.6)', 
              lineHeight: '1.8',
              marginBottom: '40px',
              maxWidth: '450px'
            }}>
              Where architectural excellence meets structural precision. 
              Creating spaces that define Bangladesh's skyline since 2018.
            </p>

            {/* Stats Row */}
            <div className="stats-row" style={{ display: 'flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
              <div className="stat-item">
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFD700' }}>530+</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>PROJECTS</div>
              </div>
              <div className="stat-item">
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFD700' }}>8+</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>YEARS</div>
              </div>
              <div className="stat-item">
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#FFD700' }}>100%</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>SUCCESS</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button style={{
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
                boxShadow: '0 20px 40px rgba(255,215,0,0.3)'
              }}>
                BOOK CONSULTATION
                <span style={{ fontSize: '20px' }}>→</span>
              </button>
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
                backdropFilter: 'blur(10px)'
              }}>
                VIEW PORTFOLIO
              </button>
            </div>
          </div>

          {/* Right - Visual Element */}
          <div className="hero-visual" style={{ position: 'relative', height: '600px' }}>
            {/* Floating Cards */}
            <div style={{
              position: 'absolute',
              top: '50px',
              right: '100px',
              width: '300px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.1))',
              borderRadius: '30px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,215,0,0.2)',
              padding: '30px',
              transform: 'rotate(-5deg)',
              animation: 'float 6s ease-in-out infinite'
            }}>
              <div style={{ color: '#FFD700', fontSize: '24px', fontWeight: '900', marginBottom: '20px' }}>01</div>
              <div style={{ color: 'white', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>Architectural Design</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6' }}>
                Modern aesthetics with timeless appeal. Every line drawn with purpose.
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '150px',
              right: '0px',
              width: '300px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
              borderRadius: '30px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '30px',
              transform: 'rotate(5deg)',
              animation: 'float 6s ease-in-out infinite 1s'
            }}>
              <div style={{ color: '#FFD700', fontSize: '24px', fontWeight: '900', marginBottom: '20px' }}>02</div>
              <div style={{ color: 'white', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>Structural Safety</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.6' }}>
                In-house engineers ensuring your investment stands the test of time.
              </div>
            </div>

            {/* Glowing Orb */}
            <div style={{
              position: 'absolute',
              bottom: '50px',
              right: '150px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.3), transparent)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION - BENTO GRID */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>OUR EXPERTISE</div>
            <h2 className="section-heading" style={{ fontSize: '48px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              CRAFTING <span style={{ color: '#FFD700' }}>EXCELLENCE</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', marginTop: '15px', maxWidth: '600px', margin: '15px auto 0' }}>
              Complete building solutions under one roof - from concept to completion
            </p>
          </div>

          {/* Row 1 - Main Services */}
          <div className="expertise-grid-row-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
            
            {/* RAJUK Approval - Featured Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(255,215,0,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
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
                  fontWeight: '600'
                }}>
                  4-Month Average
                </span>
              </div>
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
                borderRadius: '50%',
                filter: 'blur(30px)'
              }}></div>
            </div>

            {/* Architectural Design */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(102,126,234,0.2)'
            }}>
              <div style={{ fontSize: '45px', marginBottom: '15px' }}>🏠</div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
                Architectural Design
              </h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7' }}>
                Modern aesthetics with functional excellence. Unique designs for every project.
              </p>
            </div>

            {/* Structural Design */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,107,107,0.1), rgba(255,142,83,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(255,107,107,0.2)'
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

          {/* Row 2 - Technical Services */}
          <div className="expertise-grid-row-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
            
            {/* DAP Analysis */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📐</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                DAP Analysis
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                Feasibility & zoning check
              </p>
            </div>

            {/* Soil Test */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(139,69,19,0.1), rgba(160,82,45,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(139,69,19,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🧪</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                Soil Test
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                Foundation safety analysis
              </p>
            </div>

            {/* Digital Survey */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,255,127,0.1), rgba(46,139,87,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(0,255,127,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📡</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                Digital Survey
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                GPS land measurement
              </p>
            </div>

            {/* Estimate & BOQ */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📊</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                Estimate & BOQ
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                Detailed cost planning
              </p>
            </div>
          </div>

          {/* Row 3 - MEP Services */}
          <div className="expertise-grid-row-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px' }}>
            
            {/* Electrical Design */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,193,7,0.1), rgba(255,152,0,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(255,193,7,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>⚡</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                Electrical Design
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                Wiring & load calculation
              </p>
            </div>

            {/* Plumbing Design */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0,191,255,0.1), rgba(30,144,255,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(0,191,255,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🚿</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                Plumbing Design
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                Water & drainage system
              </p>
            </div>

            {/* Fire Safety */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,0,0,0.1), rgba(178,34,34,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(255,0,0,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔥</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                Fire Safety
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                Safety system design
              </p>
            </div>

            {/* Interior Design */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,105,180,0.1), rgba(219,112,147,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(255,105,180,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🛋️</div>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                Interior Design
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5' }}>
                Luxury space planning
              </p>
            </div>
          </div>

          {/* Row 4 - Wide Cards */}
          <div className="expertise-grid-row-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
            
            {/* 3D Visualization */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(138,43,226,0.1), rgba(75,0,130,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(138,43,226,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'white', marginBottom: '8px' }}>
                  3D Visualization & VR Walkthrough
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                  Experience your space before it's built
                </p>
              </div>
              <div style={{ fontSize: '50px' }}>🥽</div>
            </div>

            {/* Construction Supervision */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(255,69,0,0.05))',
              borderRadius: '25px',
              padding: '35px',
              border: '1px solid rgba(255,140,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'white', marginBottom: '8px' }}>
                  Construction Supervision
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
                  On-site quality control & management
                </p>
              </div>
              <div style={{ fontSize: '50px' }}>👷</div>
            </div>
          </div>

          {/* Row 5 - Bottom Small Cards */}
          <div className="expertise-grid-row-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            
            {/* Landscape */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(34,139,34,0.1), rgba(0,100,0,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(34,139,34,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{ fontSize: '40px' }}>🌳</div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '5px' }}>
                  Landscape Design
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                  Beautiful outdoor spaces
                </p>
              </div>
            </div>

            {/* Project Development */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(70,130,180,0.1), rgba(100,149,237,0.05))',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(70,130,180,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{ fontSize: '40px' }}>🏢</div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '5px' }}>
                  Project Development
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                  End-to-end solutions
                </p>
              </div>
            </div>

            {/* Legal Documentation */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '25px',
              padding: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{ fontSize: '40px' }}>📋</div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'white', marginBottom: '5px' }}>
                  Legal Documentation
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                  Complete paperwork support
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PORTFOLIO SECTION - NETFLIX STYLE */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '50px' }}>
            <h2 className="section-heading" style={{ fontSize: '42px', fontWeight: '900', color: 'white', marginBottom: '10px' }}>
              Featured <span style={{ color: '#FFD700' }}>Projects</span>
            </h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px' }}>
              Defining Bangladesh's architectural landscape
            </p>
          </div>

          {/* Project Showcase - Horizontal Scroll */}
          <div className="portfolio-scroll" style={{ display: 'flex', gap: '25px', overflowX: 'auto', paddingBottom: '20px' }}>
            {[
              { 
                name: 'Muktar Plaza', 
                type: 'Luxury Residence', 
                location: 'Rayerbag, Jatrabari',
                size: '8,500 sqft',
                year: '2023',
                image: '/images/featured/project1.jpg'
              },
              { 
                name: 'Badsha Villa', 
                type: 'Residencial Building', 
                location: 'Kazlar par Jartabari',
                size: '3,000 sqft',
                year: '2025',
                image: '/images/featured/project2.jpg'
              },
              { 
                name: 'City Square', 
                type: 'Residencial & Commercial', 
                location: 'Saddam Market, Matuail',
                size: '6,500 sqft',
                year: '2025',
                image: '/images/featured/project3.jpg'
              },
              { 
                name: 'Khan Monzil', 
                type: 'Minimalist Home', 
                location: 'Fatullah, Narayangonj',
                size: '4,500 sqft',
                year: '2023',
                image: '/images/featured/project4.jpg'
              }
            ].map((project, idx) => (
              <div 
                key={idx}
                className="portfolio-card"
                style={{
                  minWidth: '400px',
                  height: '500px',
                  borderRadius: '20px',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#1a1a1a',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  flexShrink: 0
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {/* Dark Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
                }}></div>

                {/* Content */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '30px',
                  zIndex: 2
                }}>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '6px 12px', 
                    backgroundColor: 'rgba(255,215,0,0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    marginBottom: '15px'
                  }}>
                    <span style={{ color: '#FFD700', fontSize: '12px', fontWeight: '600' }}>
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

      {/* CLIENT TESTIMONIALS - CARDS STYLE */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>TESTIMONIALS</div>
            <h2 className="section-heading" style={{ fontSize: '48px', fontWeight: '900', color: 'white' }}>
              Client <span style={{ color: '#FFD700' }}>Stories</span>
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="testimonial-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
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
                position: 'relative'
              }}>
                {/* Quote Icon */}
                <div style={{ 
                  fontSize: '40px', 
                  color: '#FFD700', 
                  opacity: 0.3,
                  position: 'absolute',
                  top: '20px',
                  right: '30px'
                }}>"</div>
                
                {/* Stars */}
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FFD700', fontSize: '18px' }}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p style={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  fontSize: '15px', 
                  lineHeight: '1.8',
                  marginBottom: '25px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '3px' }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - TIMELINE */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '3px', marginBottom: '20px' }}>THE PROCESS</div>
            <h2 className="section-heading" style={{ fontSize: '48px', fontWeight: '900', color: 'white' }}>
              From Vision to <span style={{ color: '#FFD700' }}>Reality</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="process-timeline" style={{ position: 'relative' }}>
            {/* Vertical Line */}
            <div className="timeline-line" style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, #FFD700, #FFA500)',
              transform: 'translateX(-50%)'
            }}></div>

            {/* Process Steps */}
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and requirements', time: 'Week 1' },
              { step: '02', title: 'Feasibility Study', desc: 'DAP check, site analysis, and budget planning', time: 'Week 2-3' },
              { step: '03', title: 'Design Development', desc: '3D visualization and architectural planning', time: 'Week 4-8' },
              { step: '04', title: 'RAJUK Submission', desc: 'Complete documentation and approval process', time: 'Month 3-6' },
              { step: '05', title: 'Construction Support', desc: 'Site supervision and quality assurance', time: 'Ongoing' }
            ].map((process, idx) => (
              <div key={idx} className="process-step" style={{
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
                  border: '1px solid rgba(255,215,0,0.2)',
                  position: 'relative',
                  textAlign: idx % 2 === 0 ? 'right' : 'left'
                }}>
                  <div style={{ 
                    color: '#FFD700', 
                    fontSize: '24px', 
                    fontWeight: '900',
                    marginBottom: '10px'
                  }}>{process.step}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>
                    {process.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '10px' }}>
                    {process.desc}
                  </p>
                  <span style={{ 
                    fontSize: '12px', 
                    color: '#FFD700',
                    padding: '4px 12px',
                    backgroundColor: 'rgba(255,215,0,0.1)',
                    borderRadius: '15px',
                    display: 'inline-block'
                  }}>
                    {process.time}
                  </span>
                  
                  {/* Connector Dot */}
                  <div style={{
                    position: 'absolute',
                    [idx % 2 === 0 ? 'right' : 'left']: '-60px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    borderRadius: '50%',
                    boxShadow: '0 0 30px rgba(255,215,0,0.5)'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - FULLSCREEN */}
      <section style={{ 
        minHeight: '80vh', 
        background: 'linear-gradient(135deg, #0A0A0A, #1a1a1a)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 5%'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.1), transparent)',
          filter: 'blur(100px)'
        }}></div>

        <div className="cta-content" style={{ 
          width: '100%', 
          textAlign: 'center', 
          position: 'relative', 
          zIndex: 2,
          padding: '0 5%'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {/* Badge */}
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

            {/* Main CTA */}
            <h2 className="cta-heading" style={{ 
              fontSize: '64px', 
              fontWeight: '900', 
              color: 'white',
              marginBottom: '25px',
              lineHeight: '1.1'
            }}>
              Ready to Build Your<br/>
              <span style={{ 
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
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

            {/* CTA Buttons */}
            <div className="cta-buttons-final" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
                START YOUR PROJECT
                <span style={{ fontSize: '24px' }}>→</span>
              </button>

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

            {/* Trust Line */}
            <div style={{ marginTop: '50px', color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
              <span style={{ color: '#FFD700' }}>✓</span> No obligation consultation 
              <span style={{ margin: '0 20px' }}>•</span>
              <span style={{ color: '#FFD700' }}>✓</span> 100% RAJUK success rate
              <span style={{ margin: '0 20px' }}>•</span>
              <span style={{ color: '#FFD700' }}>✓</span> In-house engineers
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - MINIMAL */}
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
              {/* Social Icons */}
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
              {['About Us', 'Portfolio', 'Process', 'Testimonials', 'Contact'].map((item, idx) => (
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
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden !important;
        }

        /* Custom Scrollbar */
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

        /* ===== MOBILE RESPONSIVE STYLES ===== */

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
            font-size: 48px !important;
            text-align: center !important;
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
          
          .cta-buttons {
            flex-direction: column !important;
            align-items: center !important;
            gap: 15px !important;
          }
          
          .cta-buttons button {
            width: 100% !important;
            max-width: 300px !important;
            justify-content: center !important;
          }
          
          /* Expertise Grid */
          .expertise-grid-row-1,
          .expertise-grid-row-2,
          .expertise-grid-row-3,
          .expertise-grid-row-4,
          .expertise-grid-row-5 {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          /* Section Headings */
          .section-heading {
            font-size: 32px !important;
            text-align: center !important;
          }
          
          .section-subtitle {
            text-align: center !important;
            padding: 0 20px !important;
          }
          
          /* Portfolio Cards */
          .portfolio-scroll {
            padding: 0 20px !important;
          }
          
          .portfolio-card {
            min-width: 300px !important;
          }
          
          /* Testimonials */
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          /* Process Timeline */
          .timeline-line {
            left: 30px !important;
            transform: none !important;
          }
          
          .process-step {
            padding-left: 80px !important;
            padding-right: 0 !important;
            justify-content: flex-start !important;
          }
          
          .process-step > div {
            text-align: left !important;
          }
          
          .process-step > div > div[style*="right"] {
            left: -60px !important;
            right: auto !important;
          }
          
          /* Final CTA */
          .cta-content {
            padding: 40px 20px !important;
          }
          
          .cta-heading {
            font-size: 36px !important;
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
            font-size: 36px !important;
          }
          
          .hero-subtitle {
            font-size: 14px !important;
          }
          
          .stats-row {
            flex-direction: row !important;
            gap: 20px !important;
          }
          
          .stat-item div:first-child {
            font-size: 28px !important;
          }
          
          .section-heading {
            font-size: 28px !important;
          }
          
          .cta-heading {
            font-size: 28px !important;
          }
          
          .portfolio-card {
            min-width: 280px !important;
          }
        }

        /* Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          
          .hero-heading {
            font-size: 56px !important;
          }
          
          .expertise-grid-row-1,
          .expertise-grid-row-2,
          .expertise-grid-row-3 {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .expertise-grid-row-4 {
            grid-template-columns: 1fr !important;
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