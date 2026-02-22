'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// ✅ TYPE DEFINITIONS
interface Project {
  id: number
  name: string
  category: string
  type: string
  location: string
  year: string
  size: string
  budget: string
  gradient: string
  image: string
  tags: string[]
  description: string
  features: string[]
}

interface Filter {
  key: string
  label: string
  icon: string
}

interface Stat {
  number: number
  suffix: string
  label: string
  icon: string
}

interface AnimatedStats {
  [key: number]: number
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>({})
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const statsRef = useRef<HTMLElement>(null)
  const [statsInView, setStatsInView] = useState<boolean>(false)

  const filters: Filter[] = [
    { key: 'all', label: 'All Projects', icon: '🏛️' },
    { key: 'residential', label: 'Residential', icon: '🏠' },
    { key: 'commercial', label: 'Commercial', icon: '🏢' },
    { key: 'interior', label: 'Interior', icon: '🛋️' },
    { key: 'luxury', label: 'Luxury', icon: '👑' }
  ]

  // ✅ PROJECTS WITH PROPER TYPING
  const projects: Project[] = [
    {
      id: 1,
      name: 'Villa Serenity',
      category: 'residential',
      type: 'Luxury Residence',
      location: 'Bashundhara R/A',
      year: '2024',
      size: '8,500 sqft',
      budget: '৳2.5 Cr',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: '/images/Featured/project1.jpg',
      tags: ['RAJUK Approved', '3D Designed', 'Luxury'],
      description: 'A stunning contemporary villa with panoramic views and state-of-the-art amenities.',
      features: ['Swimming Pool', 'Home Theater', 'Smart Home', 'Rooftop Garden']
    },
    {
      id: 2,
      name: 'Apex Tower',
      category: 'commercial',
      type: 'Commercial Complex',
      location: 'Gulshan Avenue',
      year: '2023',
      size: '45,000 sqft',
      budget: '৳15 Cr',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      image: '/images/Featured/project2.jpg',
      tags: ['G+12', 'LEED Certified', 'Commercial'],
      description: 'A landmark commercial tower with cutting-edge sustainable design.',
      features: ['Green Building', 'High-Speed Elevators', 'Parking Facility', 'Conference Center']
    },
    {
      id: 3,
      name: 'Modern Oasis',
      category: 'residential',
      type: 'Minimalist Home',
      location: 'Dhanmondi',
      year: '2024',
      size: '4,200 sqft',
      budget: '৳1.8 Cr',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      image: '/images/Featured/project3.jpg',
      tags: ['Modern', 'Eco-Friendly', 'Award Winner'],
      description: 'Award-winning minimalist design that harmonizes with nature.',
      features: ['Solar Panels', 'Rainwater Harvesting', 'Open Floor Plan', 'Natural Lighting']
    },
    {
      id: 4,
      name: 'Luxury Penthouse',
      category: 'interior',
      type: 'Interior Design',
      location: 'Banani',
      year: '2023',
      size: '6,000 sqft',
      budget: '৳3.2 Cr',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      image: '/images/Featured/project4.jpg',
      tags: ['Luxury', 'Smart Home', 'Interior'],
      description: 'Exquisite penthouse interior with premium finishes and smart automation.',
      features: ['Italian Marble', 'Custom Furniture', 'Wine Cellar', 'Sky Lounge']
    },
    {
      id: 5,
      name: 'Green Valley Resort',
      category: 'commercial',
      type: 'Hospitality',
      location: 'Gazipur',
      year: '2024',
      size: '25,000 sqft',
      budget: '৳8 Cr',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      image: '/images/Featured/project5.jpg',
      tags: ['Resort', 'Landscape', 'Luxury'],
      description: 'A serene resort destination blending luxury with natural beauty.',
      features: ['Infinity Pool', 'Spa Center', 'Restaurant', 'Event Venue']
    },
    {
      id: 6,
      name: 'Executive Mansion',
      category: 'luxury',
      type: 'Ultra Luxury Villa',
      location: 'Gulshan',
      year: '2023',
      size: '12,000 sqft',
      budget: '৳5 Cr',
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      image: '/images/Featured/project6.jpg',
      tags: ['Ultra Luxury', 'Pool', 'Smart Villa'],
      description: 'The epitome of luxury living with every imaginable amenity.',
      features: ['Private Cinema', 'Indoor Pool', 'Elevator', 'Staff Quarters']
    },
    {
      id: 7,
      name: 'Riverside Heights',
      category: 'residential',
      type: 'Apartment Complex',
      location: 'Uttara',
      year: '2024',
      size: '65,000 sqft',
      budget: '৳22 Cr',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      image: '/images/Featured/project7.jpg',
      tags: ['G+15', 'River View', 'Premium'],
      description: 'Premium apartments with stunning river views and world-class amenities.',
      features: ['Gym', 'Clubhouse', 'Playground', 'Security System']
    },
    {
      id: 8,
      name: 'Corporate Hub',
      category: 'commercial',
      type: 'Office Building',
      location: 'Motijheel',
      year: '2023',
      size: '35,000 sqft',
      budget: '৳12 Cr',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      image: '/images/Featured/project8.jpg',
      tags: ['Grade A', 'Central Location', 'Modern'],
      description: 'Grade A office space in the heart of the business district.',
      features: ['24/7 Power', 'Fire Safety', 'Cafeteria', 'Helipad']
    }
  ]

  const stats: Stat[] = [
    { number: 530, suffix: '+', label: 'PROJECTS DELIVERED', icon: '🏗️' },
    { number: 100, suffix: '%', label: 'RAJUK SUCCESS', icon: '✅' },
    { number: 8, suffix: '+', label: 'YEARS EXPERIENCE', icon: '📅' },
    { number: 25, suffix: '+', label: 'TEAM MEMBERS', icon: '👥' }
  ]

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Stats animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsInView) {
            setStatsInView(true)
            animateStatsFunc()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [statsInView])

  const animateStatsFunc = () => {
    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.number / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(timer)
        }
        setAnimatedStats((prev) => ({
          ...prev,
          [index]: Math.floor(current)
        }))
      }, 30)
    })
  }

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  // Loading Screen
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '30px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          border: '4px solid rgba(255,215,0,0.2)',
          borderTopColor: '#FFD700',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <div style={{
          color: '#FFD700',
          fontSize: '18px',
          fontWeight: '600',
          letterSpacing: '3px'
        }}>
          LOADING PORTFOLIO
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0A0A0A', 
      fontFamily: 'system-ui, sans-serif',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      
      {/* ✅ CURSOR GLOW EFFECT */}
      <div style={{
        position: 'fixed',
        top: mousePosition.y - 200,
        left: mousePosition.x - 200,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,215,0,0.08), transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0,
        transition: 'top 0.3s ease-out, left 0.3s ease-out'
      }}></div>

      {/* ✅ FLOATING PARTICLES */}
      <div className="particles-container" style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: 'rgba(255,215,0,0.3)',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* ✅ GRID BACKGROUND */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,215,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,215,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative'
      }}>
        <div style={{ width: '100%', padding: '0 5%', position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            
            {/* ✅ ANIMATED BADGE */}
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 25px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              border: '1px solid rgba(255,215,0,0.3)',
              borderRadius: '50px',
              marginBottom: '30px',
              animation: 'fadeInUp 0.8s ease-out',
              backdropFilter: 'blur(10px)'
            }}>
              <div className="live-dot" style={{ 
                width: '10px', 
                height: '10px', 
                backgroundColor: '#FFD700', 
                borderRadius: '50%',
                animation: 'pulseDot 2s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(255,215,0,0.5)'
              }}></div>
              <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '3px', fontWeight: '700' }}>
                530+ PROJECTS COMPLETED
              </span>
            </div>

            {/* ✅ MAIN HEADING */}
            <h1 className="hero-heading" style={{
              fontSize: '90px',
              fontWeight: '900',
              color: 'white',
              lineHeight: '1',
              marginBottom: '30px',
              letterSpacing: '-4px',
              maxWidth: '1000px',
              animation: 'fadeInUp 1s ease-out 0.2s backwards'
            }}>
              PORTFOLIO OF
              <br />
              <span className="gradient-text" style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B35, #FFD700)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 4s ease-in-out infinite'
              }}>EXCELLENCE</span>
            </h1>

            <p className="hero-subtitle" style={{
              fontSize: '22px',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '40px',
              maxWidth: '700px',
              lineHeight: '1.8',
              animation: 'fadeInUp 1.2s ease-out 0.4s backwards'
            }}>
              Explore our collection of architectural masterpieces that define 
              Bangladesh&apos;s luxury landscape. Every project tells a story of innovation.
            </p>

            {/* ✅ QUICK STATS ROW */}
            <div className="quick-stats" style={{
              display: 'flex',
              gap: '40px',
              animation: 'fadeInUp 1.4s ease-out 0.6s backwards',
              flexWrap: 'wrap'
            }}>
              {[
                { value: '530+', label: 'Projects' },
                { value: '8+', label: 'Years' },
                { value: '100%', label: 'Success Rate' }
              ].map((stat, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '900',
                    color: '#FFD700'
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: '500',
                    letterSpacing: '1px'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* ✅ SCROLL INDICATOR */}
            <div className="scroll-indicator" style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              animation: 'fadeInUp 1.6s ease-out 0.8s backwards'
            }}>
              <span style={{ 
                color: 'rgba(255,255,255,0.4)', 
                fontSize: '12px', 
                letterSpacing: '3px' 
              }}>SCROLL DOWN</span>
              <div style={{
                width: '2px',
                height: '40px',
                background: 'linear-gradient(to bottom, #FFD700, transparent)',
                animation: 'scrollLine 2s ease-in-out infinite'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section style={{ 
        padding: '50px 5%', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Filter Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: 'white',
                marginBottom: '5px'
              }}>Filter Projects</h2>
              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '14px'
              }}>Showing {filteredProjects.length} projects</p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="filter-buttons" style={{ 
            display: 'flex', 
            gap: '15px', 
            flexWrap: 'wrap'
          }}>
            {filters.map((filter, idx) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className="filter-btn"
                style={{
                  padding: '14px 28px',
                  background: activeFilter === filter.key 
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : 'rgba(255,255,255,0.05)',
                  border: activeFilter === filter.key ? 'none' : '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '50px',
                  color: activeFilter === filter.key ? '#0A0A0A' : 'rgba(255,255,255,0.8)',
                  fontWeight: '700',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`,
                  boxShadow: activeFilter === filter.key ? '0 15px 40px rgba(255,215,0,0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (activeFilter !== filter.key) {
                    e.currentTarget.style.background = 'rgba(255,215,0,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(255,215,0,0.4)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (activeFilter !== filter.key) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }
                }}
              >
                <span style={{ fontSize: '16px' }}>{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ PROJECTS GRID WITH IMAGES */}
      <section style={{ padding: '80px 5%', backgroundColor: '#0A0A0A', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="projects-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', 
            gap: '35px' 
          }}>
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{
                  borderRadius: '30px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: '580px',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s backwards`,
                  boxShadow: '0 15px 50px rgba(0,0,0,0.4)'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(255,215,0,0.25)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0,0,0,0.4)'
                }}
              >
                {/* ✅ BACKGROUND IMAGE */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: project.gradient,
                  zIndex: 0
                }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    style={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Project Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '25px',
                  left: '25px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: '900',
                  color: '#FFD700',
                  border: '2px solid rgba(255,215,0,0.3)',
                  zIndex: 2
                }}>
                  {String(project.id).padStart(2, '0')}
                </div>

                {/* Quick View Badge */}
                <div className="quick-view-badge" style={{
                  position: 'absolute',
                  top: '25px',
                  right: '25px',
                  padding: '10px 20px',
                  backgroundColor: 'rgba(255,215,0,0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: 0,
                  transform: 'translateY(-10px)',
                  transition: 'all 0.3s ease',
                  zIndex: 2
                }}>
                  <span style={{ fontSize: '12px', color: '#FFD700', fontWeight: '600' }}>QUICK VIEW</span>
                  <span>👁️</span>
                </div>

                {/* Content Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)',
                  padding: '35px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  zIndex: 1
                }}>
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    {project.tags.map((tag: string, tagIdx: number) => (
                      <span
                        key={tagIdx}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: 'rgba(255,215,0,0.15)',
                          borderRadius: '25px',
                          fontSize: '11px',
                          color: '#FFD700',
                          fontWeight: '700',
                          letterSpacing: '1px',
                          border: '1px solid rgba(255,215,0,0.3)',
                          backdropFilter: 'blur(5px)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Category & Year */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '12px'
                  }}>
                    <span style={{
                      padding: '6px 14px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.8)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      backdropFilter: 'blur(5px)'
                    }}>
                      {project.category}
                    </span>
                    <span style={{
                      padding: '6px 14px',
                      backgroundColor: 'rgba(255,215,0,0.2)',
                      borderRadius: '20px',
                      fontSize: '11px',
                      color: '#FFD700',
                      fontWeight: '700'
                    }}>
                      {project.year}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h3 style={{
                    fontSize: '34px',
                    fontWeight: '900',
                    color: 'white',
                    marginBottom: '10px',
                    letterSpacing: '-1px',
                    lineHeight: '1.2',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}>
                    {project.name}
                  </h3>

                  {/* Project Type & Size */}
                  <p style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '16px',
                    marginBottom: '8px',
                    fontWeight: '500'
                  }}>
                    {project.type} • {project.size}
                  </p>

                  {/* Location */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '14px',
                    marginBottom: '15px'
                  }}>
                    <span style={{ fontSize: '18px' }}>📍</span>
                    {project.location}
                  </div>

                  {/* Budget Badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    backgroundColor: 'rgba(255,215,0,0.1)',
                    borderRadius: '25px',
                    marginBottom: '20px',
                    width: 'fit-content',
                    border: '1px solid rgba(255,215,0,0.2)',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <span style={{ fontSize: '16px' }}>💰</span>
                    <span style={{ 
                      color: '#FFD700', 
                      fontSize: '14px', 
                      fontWeight: '700',
                      letterSpacing: '0.5px'
                    }}>
                      {project.budget}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="view-btn" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    borderRadius: '50px',
                    color: '#0A0A0A',
                    fontWeight: '800',
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
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                      animation: 'btnShine 3s ease-in-out infinite'
                    }}></div>
                    VIEW PROJECT
                    <span style={{ 
                      fontSize: '18px',
                      transition: 'transform 0.3s'
                    }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ STATS SECTION */}
      <section ref={statsRef} style={{ 
        padding: '120px 5%', 
        backgroundColor: '#0F0F0F',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}>
        {/* Background Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(255,215,0,0.1), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '10px 25px',
              backgroundColor: 'rgba(255,215,0,0.1)',
              borderRadius: '50px',
              marginBottom: '20px',
              border: '1px solid rgba(255,215,0,0.2)'
            }}>
              <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '3px', fontWeight: '700' }}>
                OUR ACHIEVEMENTS
              </span>
            </div>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '900',
              color: 'white',
              letterSpacing: '-2px'
            }}>
              Numbers That <span style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Speak</span>
            </h2>
          </div>

          <div className="stats-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '30px', 
            textAlign: 'center' 
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card" style={{
                padding: '50px 30px',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '25px',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: `fadeInUp 0.8s ease-out ${idx * 0.15}s backwards`,
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.background = 'rgba(255,215,0,0.08)'
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)'
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,215,0,0.15)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                {/* Icon */}
                <div style={{
                  fontSize: '40px',
                  marginBottom: '20px'
                }}>
                  {stat.icon}
                </div>
                
                {/* Animated Number */}
                <div style={{
                  fontSize: '56px',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '15px',
                  letterSpacing: '-3px',
                  lineHeight: '1'
                }}>
                  {statsInView ? (animatedStats[idx] || 0) : 0}{stat.suffix}
                </div>
                
                {/* Label */}
                <div style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '2px',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>

                {/* Decorative line */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIAL SECTION */}
      <section style={{
        padding: '80px 5%',
        backgroundColor: '#0A0A0A',
        position: 'relative',
        zIndex: 1
      }}>
          <div style={{
            fontSize: '60px',
            marginBottom: '30px',
            opacity: 0.3
          }}>
        
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section style={{
        padding: '140px 5%',
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1
      }}>
        {/* ✅ ANIMATED RINGS */}
        {[0, 0.5, 1].map((delay, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${500 + i * 100}px`,
            height: `${500 + i * 100}px`,
            borderRadius: '50%',
            border: '2px solid rgba(255,215,0,0.1)',
            animation: `ringsPulse 4s ease-out ${delay}s infinite`,
            zIndex: 0
          }}></div>
        ))}

        {/* Gradient Glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}></div>

        <div className="cta-content" style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            borderRadius: '50px',
            marginBottom: '30px',
            border: '1px solid rgba(255,215,0,0.3)'
          }}>
            <span style={{ color: '#FFD700', fontSize: '13px', letterSpacing: '3px', fontWeight: '700' }}>
              🚀 START YOUR JOURNEY
            </span>
          </div>

          <h2 className="cta-heading" style={{
            fontSize: '72px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '25px',
            lineHeight: '1.1',
            letterSpacing: '-3px',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            Let&apos;s Create Your
            <br />
            <span className="gradient-text" style={{
              background: 'linear-gradient(135deg, #FFD700, #FFA500, #FF6B35, #FFD700)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 4s ease-in-out infinite'
            }}>Masterpiece</span>
          </h2>

          <p style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px',
            lineHeight: '1.7'
          }}>
            Join 530+ satisfied clients who trusted us with their dream projects. 
            Your vision, our expertise – the perfect partnership.
          </p>

          <div className="cta-buttons-final" style={{ 
            display: 'flex', 
            gap: '25px', 
            justifyContent: 'center', 
            flexWrap: 'wrap'
          }}>
            <Link href="/contact">
              <button className="cta-btn-main" style={{
                padding: '22px 55px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '60px',
                color: '#0A0A0A',
                fontWeight: '800',
                fontSize: '16px',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(255,215,0,0.5)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,215,0,0.4)'
              }}>
                START YOUR PROJECT →
              </button>
            </Link>
            
            <a href="https://wa.me/8801958140774" className="whatsapp-btn" style={{
              padding: '22px 45px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              border: 'none',
              borderRadius: '60px',
              color: 'white',
              fontWeight: '700',
              fontSize: '16px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 20px 40px rgba(37,211,102,0.3)'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
              e.currentTarget.style.boxShadow = '0 30px 60px rgba(37,211,102,0.4)'
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(37,211,102,0.3)'
            }}>
              <span style={{ fontSize: '22px' }}>💬</span>
              WHATSAPP NOW
            </a>
          </div>

          {/* Trust Indicators */}
          <div style={{
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap'
          }}>
            {['⚡ Fast Response', '🔒 100% Secure', '✅ RAJUK Approved', '🏆 Award Winning'].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ PROJECT MODAL WITH IMAGE */}
      {selectedProject && (
        <div 
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="project-modal"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            style={{
              background: '#111',
              borderRadius: '30px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              border: '1px solid rgba(255,215,0,0.2)',
              animation: 'modalSlideIn 0.4s ease-out'
            }}
          >
            {/* ✅ Modal Header with Real Image */}
            <div style={{
              height: '300px',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '30px'
            }}>
              {/* Background Image */}
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                style={{ objectFit: 'cover' }}
              />
              
              {/* Gradient Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))',
                zIndex: 1
              }}></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  zIndex: 3,
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,215,0,0.3)'
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.5)'
                }}
              >
                ✕
              </button>

              {/* Project Title */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '15px',
                  flexWrap: 'wrap'
                }}>
                  {selectedProject.tags.map((tag: string, i: number) => (
                    <span key={i} style={{
                      padding: '6px 14px',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: '20px',
                      fontSize: '11px',
                      color: 'white',
                      fontWeight: '600',
                      backdropFilter: 'blur(5px)'
                    }}>{tag}</span>
                  ))}
                </div>
                <h2 style={{
                  fontSize: '42px',
                  fontWeight: '900',
                  color: 'white',
                  textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}>{selectedProject.name}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '40px' }}>
              {/* Project Info Grid */}
              <div className="modal-info-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                marginBottom: '40px'
              }}>
                {[
                  { label: 'Type', value: selectedProject.type, icon: '🏗️' },
                  { label: 'Location', value: selectedProject.location, icon: '📍' },
                  { label: 'Size', value: selectedProject.size, icon: '📐' },
                  { label: 'Budget', value: selectedProject.budget, icon: '💰' }
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '20px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '15px',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px' }}>{item.icon}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginBottom: '5px' }}>{item.label}</div>
                    <div style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#FFD700', fontSize: '18px', marginBottom: '15px', fontWeight: '700' }}>
                  About This Project
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '16px' }}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ color: '#FFD700', fontSize: '18px', marginBottom: '15px', fontWeight: '700' }}>
                  Key Features
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedProject.features.map((feature: string, i: number) => (
                    <span key={i} style={{
                      padding: '10px 20px',
                      backgroundColor: 'rgba(255,215,0,0.1)',
                      borderRadius: '25px',
                      color: '#FFD700',
                      fontSize: '13px',
                      fontWeight: '600',
                      border: '1px solid rgba(255,215,0,0.2)'
                    }}>
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="modal-cta" style={{ display: 'flex', gap: '15px' }}>
                <Link href="/contact" style={{ flex: 1 }}>
                  <button style={{
                    width: '100%',
                    padding: '18px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    border: 'none',
                    borderRadius: '15px',
                    color: '#0A0A0A',
                    fontWeight: '800',
                    fontSize: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}>
                    Start Similar Project →
                  </button>
                </Link>
                <a href="https://wa.me/8801958140774" style={{ flex: 1, textDecoration: 'none' }}>
                  <button style={{
                    width: '100%',
                    padding: '18px',
                    background: '#25D366',
                    border: 'none',
                    borderRadius: '15px',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '15px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'all 0.3s'
                  }}>
                    💬 Discuss on WhatsApp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ CSS ANIMATIONS */}
      <style>{`
        body {
          overflow-x: hidden !important;
        }

        /* Floating Particles */
        @keyframes floatParticle {
          0% { 
            transform: translateY(100vh) rotate(0deg); 
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100vh) rotate(720deg); 
            opacity: 0;
          }
        }

        /* Pulse Dot */
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

        /* Gradient Shimmer */
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        /* Fade In Up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Fade In */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Button Shine */
        @keyframes btnShine {
          0% { left: -100%; }
          20%, 100% { left: 100%; }
        }

        /* Rings Pulse */
        @keyframes ringsPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }

        /* Scroll Line */
        @keyframes scrollLine {
          0%, 100% {
            transform: scaleY(1);
            opacity: 1;
          }
          50% {
            transform: scaleY(0.5);
            opacity: 0.5;
          }
        }

        /* Modal Slide In */
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Card Hover Effect */
        .project-card:hover .quick-view-badge {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .project-card:hover .view-btn span:last-child {
          transform: translateX(5px);
        }

        .project-card:hover img {
          transform: scale(1.1) !important;
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0A0A0A;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255,215,0,0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255,215,0,0.5);
        }

        /* Mobile Devices (768px and below) */
        @media (max-width: 768px) {
          .hero-content {
            text-align: center !important;
          }
          
          .hero-badge {
            margin: 0 auto 20px !important;
          }
          
          .hero-heading {
            font-size: 48px !important;
            letter-spacing: -2px !important;
            text-align: center !important;
          }
          
          .hero-subtitle {
            font-size: 16px !important;
            text-align: center !important;
            margin: 0 auto 40px !important;
          }
          
          .quick-stats {
            justify-content: center !important;
          }
          
          .filter-buttons {
            gap: 10px !important;
            justify-content: center !important;
          }
          
          .filter-btn {
            padding: 10px 18px !important;
            font-size: 11px !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
          
          .project-card {
            height: 480px !important;
          }
          
          .project-card h3 {
            font-size: 26px !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 20px !important;
          }
          
          .stat-card {
            padding: 35px 20px !important;
          }
          
          .cta-heading {
            font-size: 40px !important;
            line-height: 1.2 !important;
          }
          
          .cta-buttons-final {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .cta-buttons-final button,
          .cta-buttons-final a {
            width: 100% !important;
            max-width: 320px !important;
            justify-content: center !important;
          }

          .project-modal {
            margin: 10px !important;
            max-height: 95vh !important;
          }

          .modal-info-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .modal-cta {
            flex-direction: column !important;
          }

          .scroll-indicator {
            display: none !important;
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
          
          .cta-heading {
            font-size: 32px !important;
          }
          
          .project-card {
            height: 420px !important;
          }
          
          .project-card h3 {
            font-size: 22px !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          
          .filter-btn {
            padding: 8px 14px !important;
            font-size: 10px !important;
          }

          .quick-stats > div {
            flex-direction: column !important;
            gap: 5px !important;
          }

          .modal-info-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Tablet (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-heading {
            font-size: 64px !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .project-card {
            height: 520px !important;
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

          .quick-view-badge {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </div>
  )
}