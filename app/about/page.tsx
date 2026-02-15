'use client'
import Link from 'next/link'

export default function About() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', fontFamily: 'system-ui, sans-serif', overflow: 'hidden' }}>
      
      {/* FLOATING NAVBAR - Same as Home */}
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
            <Link href="/about" style={{ color: '#FFD700', textDecoration: 'none' }}>ABOUT</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>SERVICES</Link>
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
              CONTACT US →
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        paddingTop: '100px'
      }}>
        <div style={{ width: '100%', padding: '0 5%' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div>
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
                <span style={{ color: '#FFD700', fontSize: '12px', letterSpacing: '2px', fontWeight: '600' }}>EST. 2013</span>
              </div>

              <h1 style={{
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
                SINCE 2013
              </h1>

              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: '1.8',
                marginBottom: '40px',
                maxWidth: '500px'
              }}>
                From a vision to redefine architectural standards to becoming Bangladesh's 
                most trusted name in luxury design and structural excellence.
              </p>

              <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
                <div>
                  <div style={{ fontSize: '42px', fontWeight: '900', color: '#FFD700' }}>530+</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>PROJECTS</div>
                </div>
                <div>
                  <div style={{ fontSize: '42px', fontWeight: '900', color: '#FFD700' }}>12+</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>YEARS</div>
                </div>
                <div>
                  <div style={{ fontSize: '42px', fontWeight: '900', color: '#FFD700' }}>25+</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px' }}>TEAM</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div style={{ position: 'relative', height: '600px' }}>
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
                <div style={{ color: '#FFD700', fontSize: '80px', fontWeight: '900', marginBottom: '20px' }}>12</div>
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
            <h2 style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              THE <span style={{ color: '#FFD700' }}>JOURNEY</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
            <div>
              <h3 style={{ fontSize: '32px', fontWeight: '800', color: 'white', marginBottom: '30px' }}>
                From Vision to Reality
              </h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '25px' }}>
                Founded by Architect Mohammad Insaf in 2013, our studio emerged from a singular vision: 
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
                { year: '2013', title: 'Studio Founded', desc: 'Started our journey with a vision' },
                { year: '2015', title: 'RAJUK Panel Listed', desc: 'Official recognition achieved' },
                { year: '2018', title: '100 Projects', desc: 'First major milestone reached' },
                { year: '2020', title: 'Team Expansion', desc: 'Grew to 25+ professionals' },
                { year: '2023', title: '500+ Projects', desc: 'Became industry leader' }
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
            <h2 style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              MEET THE <span style={{ color: '#FFD700' }}>EXPERTS</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { name: 'Ar. Mohammad Insaf', role: 'Principal Architect', exp: '15+ years', specialty: 'Luxury Residential' },
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
            <h2 style={{ fontSize: '56px', fontWeight: '900', color: 'white', letterSpacing: '-1px' }}>
              WHAT WE <span style={{ color: '#FFD700' }}>STAND FOR</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
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
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
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
                boxShadow: '0 30px 60px rgba(255,215,0,0.4)'
              }}>
                START YOUR PROJECT →
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