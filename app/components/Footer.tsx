'use client'

export default function Footer() {
  return (
    <>
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
              © 2026 INSAF LIMITED. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', textDecoration: 'none' }}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  )
}