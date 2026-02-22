'use client'
import Link from 'next/link'

export default function FloorPlanPage() {
  const packages = [
    {
      id: 1,
      title: '1-2 Storied House',
      subtitle: 'Basic Residential',
      icon: '🏠',
      delivery: '3 Days',
      originalPrice: '4,000',
      price: '3,000',
      features: [
        'Ground Floor Plan',
        'Typical Floor Plan',
        'Accurate Measurements',
        'Print-ready PDF',
        'Up to 2 Revisions'
      ],
      color: '#667eea',
      gradient: 'linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.08))'
    },
    {
      id: 2,
      title: 'Duplex/Triplex House',
      subtitle: 'Small Family Home',
      icon: '🏘️',
      delivery: '3 Days',
      originalPrice: '5,500',
      price: '4,500',
      features: [
        'Ground Floor Plan',
        'Typical Floor Plan',
        'Dimension Details',
        'Furniture Layout',
        'Up to 3 Revisions'
      ],
      popular: true,
      color: '#FFD700',
      gradient: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.08))'
    },
    {
      id: 3,
      title: '3-5 Storied House',
      subtitle: 'Mid-size Building',
      icon: '🏢',
      delivery: '3 Days',
      originalPrice: '6,500',
      price: '5,500',
      features: [
        'Ground Floor Plan',
        'Typical Floor Plan',
        'Complete Annotations',
        'CAD Format Included',
        'Up to 3 Revisions'
      ],
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, rgba(79,172,254,0.15), rgba(0,242,254,0.08))'
    },
    {
      id: 4,
      title: '6-7 Storied House',
      subtitle: 'Apartment Complex',
      icon: '🏗️',
      delivery: '4 Days',
      originalPrice: '8,000',
      price: '6,000',
      features: [
        'Ground Floor Plan',
        'Typical Floor Plan',
        'Parking Layout',
        'Detailed Specifications',
        'Unlimited Revisions'
      ],
      color: '#43e97b',
      gradient: 'linear-gradient(135deg, rgba(67,233,123,0.15), rgba(56,249,215,0.08))'
    },
    {
      id: 5,
      title: '8-9 Storied House',
      subtitle: 'High-rise Building',
      icon: '🌆',
      delivery: '5 Days',
      originalPrice: '10,000',
      price: '8,000',
      features: [
        'Ground Floor Plan',
        'Typical Floor Plan',
        'Rooftop Plan',
        'Lift & Staircase Details',
        'Unlimited Revisions'
      ],
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, rgba(240,147,251,0.15), rgba(245,87,108,0.08))'
    },
    {
      id: 6,
      title: '10 Storied House',
      subtitle: 'Premium Tower',
      icon: '🏙️',
      delivery: '5 Days',
      originalPrice: '12,000',
      price: '9,500',
      features: [
        'Ground Floor Plan',
        'Typical Floor Plan',
        'Rooftop Plan',
        'Complete Building Layout',
        'Premium Support'
      ],
      color: '#fa709a',
      gradient: 'linear-gradient(135deg, rgba(250,112,154,0.15), rgba(254,225,64,0.08))'
    }
  ]

  const whyChoose = [
    { icon: '⚡', title: 'Fast Delivery', desc: '3-5 days turnaround' },
    { icon: '💎', title: 'Professional Quality', desc: 'CAD standard drawings' },
    { icon: '🔄', title: 'Free Revisions', desc: 'Multiple revision rounds' },
    { icon: '📱', title: '24/7 Support', desc: 'Always here to help' }
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      {/* Floating Orbs */}
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

      {/* Hero Section */}
      <section style={{ 
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ width: '100%', padding: '0 5%', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', animation: 'fadeInUp 1s ease-out' }}>
            
            {/* Badge */}
            <div style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 25px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '35px',
              animation: 'badgeGlow 3s ease-in-out infinite'
            }}>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%', 
                animation: 'pulseDot 2s ease-in-out infinite' 
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '2px', fontWeight: '600' }}>
                FLOOR PLAN ONLY PACKAGES
              </span>
            </div>

            {/* Title */}
            <h1 style={{ 
              fontSize: 'clamp(48px, 8vw, 80px)', 
              fontWeight: '900', 
              color: 'white', 
              lineHeight: '1.1',
              marginBottom: '25px',
              letterSpacing: '-2px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              PROFESSIONAL<br/>
              <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B6B, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>FLOOR PLANS</span>
            </h1>

            {/* Subtitle */}
            <p style={{ 
              fontSize: 'clamp(16px, 3vw, 20px)', 
              color: 'rgba(255,255,255,0.6)', 
              lineHeight: '1.8',
              marginBottom: '50px',
              maxWidth: '700px',
              margin: '0 auto 50px',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              High-quality 2D floor plans with accurate measurements.<br/>
              Perfect for planning, visualization & documentation.
            </p>

            {/* CTA Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
            }}>
              <a href="tel:+8801958140774" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '20px 45px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '60px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '15px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,215,0,0.3)'
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
                  <span style={{ position: 'relative', zIndex: 1 }}>📞 CALL: 01958-140774</span>
                </button>
              </a>

              <Link href="/services" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '20px 45px',
                  background: 'transparent',
                  border: '2px solid rgba(255,255,255,0.2)',
                  borderRadius: '60px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '15px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s',
                  animation: 'borderPulse 3s ease-in-out infinite'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,215,0,0.6)'
                  e.currentTarget.style.background = 'rgba(255,215,0,0.1)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  VIEW ALL PACKAGES
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div style={{ 
              display: 'flex', 
              gap: '50px', 
              marginTop: '60px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.6s ease-out 0.8s backwards'
            }}>
              {[
                { number: '530+', label: 'PROJECTS' },
                { number: '3-5', label: 'DAYS DELIVERY' },
                { number: '100%', label: 'SATISFACTION' }
              ].map((stat, idx) => (
                <div key={idx} style={{ animation: `statPop 0.6s ease-out ${1 + idx * 0.15}s backwards` }}>
                  <div style={{ 
                    fontSize: '40px', 
                    fontWeight: '900', 
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'numberGlow 2s ease-in-out infinite'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', marginTop: '5px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px', animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'textGlow 3s ease-in-out infinite'
            }}>
              PRICING PACKAGES
            </div>
            <h2 style={{ 
              fontSize: 'clamp(36px, 5vw, 52px)', 
              fontWeight: '900', 
              color: 'white', 
              letterSpacing: '-1px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              CHOOSE YOUR <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>PACKAGE</span>
            </h2>
          </div>

          {/* Package Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', 
            gap: '25px' 
          }}>
            {packages.map((pkg, idx) => (
              <div 
                key={pkg.id}
                style={{
                  background: pkg.gradient,
                  border: pkg.popular ? `2px solid ${pkg.color}` : `1px solid ${pkg.color}40`,
                  borderRadius: '25px',
                  position: 'relative',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  overflow: 'hidden',
                  animation: `cardReveal 0.8s ease-out ${idx * 0.1}s backwards`,
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px)'
                  e.currentTarget.style.boxShadow = `0 30px 80px ${pkg.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '8px 20px',
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)`,
                    borderRadius: '30px',
                    fontSize: '11px',
                    fontWeight: '800',
                    color: '#0A0A0A',
                    letterSpacing: '1px',
                    boxShadow: `0 10px 30px ${pkg.color}60`,
                    animation: 'pulseGlow 2s ease-in-out infinite',
                    zIndex: 2
                  }}>
                    ⭐ POPULAR
                  </div>
                )}

                {/* Content */}
                <div style={{ padding: '40px 35px' }}>
                  
                  {/* Icon */}
                  <div style={{ 
                    fontSize: '60px', 
                    marginBottom: '20px',
                    animation: 'iconFloat 3s ease-in-out infinite',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}>
                    {pkg.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 style={{ 
                    fontSize: '26px', 
                    fontWeight: '900', 
                    color: 'white', 
                    marginBottom: '8px'
                  }}>
                    {pkg.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'rgba(255,255,255,0.6)', 
                    marginBottom: '25px',
                    fontWeight: '500'
                  }}>
                    {pkg.subtitle} • {pkg.delivery} Delivery
                  </p>

                  {/* Price */}
                  <div style={{ 
                    marginBottom: '30px',
                    padding: '25px',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '16px',
                    border: `1px solid ${pkg.color}30`
                  }}>
                    <div style={{ 
                      fontSize: '18px', 
                      color: 'rgba(255,255,255,0.4)', 
                      textDecoration: 'line-through',
                      marginBottom: '5px'
                    }}>
                      ৳{pkg.originalPrice}
                    </div>
                    <div style={{ 
                      fontSize: '42px', 
                      fontWeight: '900', 
                      color: pkg.color,
                      textShadow: `0 0 30px ${pkg.color}`,
                      animation: 'numberGlow 2s ease-in-out infinite',
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '8px'
                    }}>
                      <span style={{ fontSize: '24px' }}>৳</span>{pkg.price}
                    </div>
                    <div style={{ 
                      fontSize: '13px', 
                      color: 'rgba(255,255,255,0.5)', 
                      fontWeight: '500',
                      marginTop: '5px'
                    }}>
                      One-time payment
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '30px' }}>
                    <div style={{ 
                      fontSize: '12px', 
                      fontWeight: '800', 
                      color: 'rgba(255,255,255,0.5)', 
                      marginBottom: '20px',
                      letterSpacing: '2px'
                    }}>
                      WHAT'S INCLUDED
                    </div>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: '14px',
                        marginBottom: '16px',
                        fontSize: '15px',
                        lineHeight: '1.5'
                      }}>
                        <span style={{ 
                          color: pkg.color, 
                          fontSize: '18px',
                          fontWeight: '700',
                          flexShrink: 0
                        }}>✓</span>
                        <span style={{ color: 'rgba(255,255,255,0.8)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a 
                    href="tel:+8801958140774"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <button style={{
                      width: '100%',
                      padding: '18px',
                      background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}cc)`,
                      border: 'none',
                      borderRadius: '14px',
                      color: pkg.popular ? '#0A0A0A' : 'white',
                      fontWeight: '800',
                      fontSize: '15px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: `0 10px 30px ${pkg.color}40`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = `0 15px 40px ${pkg.color}60`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = `0 10px 30px ${pkg.color}40`
                    }}>
                      ORDER NOW →
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0A0A0A', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '70px', animation: 'fadeInUp 0.8s ease-out' }}>
            <div style={{ 
              color: '#FFD700', 
              fontSize: '14px', 
              letterSpacing: '3px', 
              marginBottom: '20px',
              animation: 'textGlow 3s ease-in-out infinite'
            }}>
              WHY CHOOSE US
            </div>
            <h2 style={{ 
              fontSize: 'clamp(36px, 5vw, 48px)', 
              fontWeight: '900', 
              color: 'white',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              OUR <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 4s ease-in-out infinite'
              }}>ADVANTAGES</span>
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', 
            gap: '30px' 
          }}>
            {whyChoose.map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '25px',
                padding: '40px 35px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                animation: `cardReveal 0.8s ease-out ${idx * 0.1}s backwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)'
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)'
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ 
                  fontSize: '56px', 
                  marginBottom: '25px',
                  animation: `iconFloat 3s ease-in-out infinite ${idx * 0.2}s`,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ 
                  fontSize: '22px', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '10px',
                  animation: 'textGlow 3s ease-in-out infinite'
                }}>
                  {item.title}
                </h4>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'rgba(255,255,255,0.5)' 
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ 
        padding: '100px 5%', 
        background: 'linear-gradient(135deg, #0F0F0F, #1a1a1a)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Animated Rings */}
          {[500, 400, 300].map((size, idx) => (
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

          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ 
              fontSize: 'clamp(32px, 6vw, 48px)', 
              fontWeight: '900', 
              color: 'white',
              marginBottom: '25px',
              animation: 'fadeInUp 0.8s ease-out'
            }}>
              Need Help Choosing?
            </h2>

            <p style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              lineHeight: '1.7',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              Our team is ready to help you select the perfect package<br/>
              for your building design needs.
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              <a href="tel:+8801958140774" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '20px 45px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  border: 'none',
                  borderRadius: '60px',
                  color: '#0A0A0A',
                  fontWeight: '800',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 20px 50px rgba(255,215,0,0.4)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,215,0,0.4)'
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
                  <span style={{ position: 'relative', zIndex: 1 }}>📞 CALL NOW</span>
                </button>
              </a>

              <a href="https://wa.me/8801958140774" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '20px 40px',
                  background: '#25D366',
                  border: 'none',
                  borderRadius: '60px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 20px 50px rgba(37,211,102,0.3)',
                  transition: 'all 0.3s',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(37,211,102,0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(37,211,102,0.3)'
                }}>
                  💬 WHATSAPP
                </button>
              </a>
            </div>

            <p style={{ 
              marginTop: '40px', 
              color: 'rgba(255,255,255,0.4)', 
              fontSize: '14px',
              animation: 'fadeIn 1.4s ease-out 0.6s backwards'
            }}>
              Available: 01958-140770 / 01958-140774 (Phone/WhatsApp)
            </p>
          </div>
        </div>
      </section>

      {/* All Animations */}
      <style jsx>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -60px) scale(1.1); }
          66% { transform: translate(-60px, 60px) scale(0.9); }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,215,0,0.7); }
          50% { transform: scale(1.3); box-shadow: 0 0 0 15px rgba(255,215,0,0); }
        }

        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.2); }
          50% { box-shadow: 0 0 40px rgba(255,215,0,0.5), 0 0 60px rgba(255,215,0,0.3); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes statPop {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        @keyframes borderPulse {
          0%, 100% { border-color: rgba(255,255,255,0.2); }
          50% { border-color: rgba(255,215,0,0.4); }
        }

        @keyframes numberGlow {
          0%, 100% { text-shadow: 0 0 20px currentColor; transform: scale(1); }
          50% { text-shadow: 0 0 40px currentColor, 0 0 60px currentColor; transform: scale(1.05); }
        }

        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 25px rgba(255,255,255,0.5); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(255,215,0,0.3); }
          50% { box-shadow: 0 0 30px rgba(255,215,0,0.6); }
        }

        @keyframes ringsPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          h1 { font-size: 48px !important; }
          h2 { font-size: 32px !important; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 36px !important; }
          h2 { font-size: 28px !important; }
        }
      `}</style>
    </div>
  )
}