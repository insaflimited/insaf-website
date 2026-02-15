import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
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
        
        {/* Logo with Image */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image 
              src="/logo.png" 
              alt="INSAF Logo" 
              width={45} 
              height={45}
              style={{
                borderRadius: '12px',
                objectFit: 'contain'
              }}
            />
            <div>
              <div style={{ fontSize: '22px', fontWeight: '900', color: 'white', letterSpacing: '2px' }}>INSAF</div>
              <div style={{ fontSize: '10px', color: '#FFD700', letterSpacing: '3px', marginTop: '-2px' }}>ARCHITECTS</div>
            </div>
          </div>
        </Link>

        {/* Menu */}
        <div style={{ display: 'flex', gap: '35px', fontSize: '14px', fontWeight: '500' }}>
          <Link href="/" style={{ color: '#FFD700', textDecoration: 'none' }}>
            HOME
          </Link>
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            ABOUT
          </Link>
          <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            SERVICES
          </Link>
          <Link href="/portfolio" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            PORTFOLIO
          </Link>
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
            BLOG
          </Link>
        </div>

        {/* Button */}
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
  )
}