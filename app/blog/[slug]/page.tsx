import { blogs } from '@/lib/data/blogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogs.find(b => b.slug === params.slug)

  if (!post) notFound()

  return (
    <div style={{ 
      backgroundColor: '#0A0A0A', 
      minHeight: '100vh',
      overflowX: 'hidden' 
    }}>
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
            <Link href="/blog" style={{ color: '#FFD700', textDecoration: 'none' }}>BLOG</Link>
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

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '10px'
          }}>
            <div style={{ width: '28px', height: '20px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                width: '28px',
                height: '3px',
                backgroundColor: '#FFD700',
                borderRadius: '3px',
                top: '0'
              }}></div>
              <div style={{
                position: 'absolute',
                width: '28px',
                height: '3px',
                backgroundColor: '#FFD700',
                borderRadius: '3px',
                top: '8px'
              }}></div>
              <div style={{
                position: 'absolute',
                width: '28px',
                height: '3px',
                backgroundColor: '#FFD700',
                borderRadius: '3px',
                top: '16px'
              }}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Article Header */}
      <header className="article-header" style={{ 
        paddingTop: '140px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'center', 
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Back Button */}
          <Link href="/blog" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '50px',
            color: '#FFD700',
            fontSize: '13px',
            fontWeight: '600',
            textDecoration: 'none',
            marginBottom: '30px',
            transition: 'all 0.3s'
          }}>
            <span style={{ fontSize: '16px' }}>←</span>
            BACK TO BLOG
          </Link>

          {/* Category Badge */}
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(255,215,0,0.2)',
            borderRadius: '30px',
            marginBottom: '25px'
          }}>
            <span style={{ 
              color: '#FFD700', 
              fontWeight: '700', 
              letterSpacing: '2px',
              fontSize: '12px'
            }}>
              {post.category.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h1 className="article-title" style={{ 
            fontSize: '56px', 
            fontWeight: '900', 
            marginTop: '20px', 
            lineHeight: '1.2',
            color: 'white',
            letterSpacing: '-1px',
            marginBottom: '30px'
          }}>
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="article-meta" style={{ 
            marginTop: '30px', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '30px', 
            color: 'rgba(255,255,255,0.6)',
            fontSize: '15px',
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>📅</span>
              {post.date}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>👤</span>
              By Insaf Expert Team
            </span>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>⏱️</span>
              5 min read
            </span>
          </div>
        </div>
      </header>

      {/* Featured Image Placeholder */}
      <div style={{
        padding: '0 5%',
        marginBottom: '60px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.1))',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '80px',
          border: '1px solid rgba(255,215,0,0.2)'
        }}>
          📰
        </div>
      </div>

      {/* Main Content */}
      <article className="article-content" style={{ 
        padding: '60px 20px',
        backgroundColor: '#0F0F0F'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          fontSize: '18px', 
          lineHeight: '1.8', 
          color: 'rgba(255,255,255,0.8)'
        }}>
          {/* Content */}
          <div className="blog-content" style={{ 
            whiteSpace: 'pre-line',
            marginBottom: '60px'
          }}>
            {post.content}
          </div>

          {/* Share Buttons */}
          <div style={{
            padding: '30px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '60px'
          }}>
            <h3 style={{ 
              color: 'white', 
              fontSize: '18px', 
              fontWeight: '700', 
              marginBottom: '20px' 
            }}>
              Share This Article
            </h3>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {['Facebook', 'Twitter', 'LinkedIn', 'WhatsApp'].map((platform, idx) => (
                <button key={idx} style={{
                  padding: '12px 25px',
                  backgroundColor: 'rgba(255,215,0,0.1)',
                  border: '1px solid rgba(255,215,0,0.3)',
                  borderRadius: '30px',
                  color: '#FFD700',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Expert Callout Box */}
          <div style={{ 
            marginTop: '60px', 
            padding: '50px 40px', 
            background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,165,0,0.1))',
            borderRadius: '24px', 
            border: '2px solid rgba(255,215,0,0.3)',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Glow Effect */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.2), transparent)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }}></div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>💡</div>
              <h3 style={{ 
                color: '#FFD700', 
                fontSize: '28px', 
                marginBottom: '15px',
                fontWeight: '900'
              }}>
                আপনার কি বিশেষজ্ঞের পরামর্শ প্রয়োজন?
              </h3>
              <p style={{ 
                fontSize: '16px',
                color: 'rgba(255,255,255,0.8)', 
                marginBottom: '30px',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto 30px'
              }}>
                সঠিক নিয়মে ভবন নির্মাণে আমরাই দিচ্ছি সেরা সল্যুশন। RAJUK approval থেকে শুরু করে সম্পূর্ণ নির্মাণ - সব কিছুতেই আমরা আছি আপনার পাশে।
              </p>
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+8801958140774" style={{
                  padding: '18px 40px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  color: '#0A0A0A',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 20px 40px rgba(255,215,0,0.3)',
                  transition: 'all 0.3s'
                }}>
                  📞 ফ্রি পরামর্শ নিন
                </a>
                <a href="https://wa.me/8801958140774" style={{
                  padding: '18px 40px',
                  background: '#25D366',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s'
                }}>
                  💬 WhatsApp করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section style={{
        padding: '80px 5%',
        backgroundColor: '#0A0A0A'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            আরও <span style={{ color: '#FFD700' }}>পড়ুন</span>
          </h2>
          <div className="related-posts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {blogs.slice(0, 3).map((relatedPost) => (
              <Link 
                key={relatedPost.slug} 
                href={`/blog/${relatedPost.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  <div style={{
                    padding: '6px 15px',
                    backgroundColor: 'rgba(255,215,0,0.2)',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '15px'
                  }}>
                    <span style={{ 
                      color: '#FFD700', 
                      fontSize: '11px', 
                      fontWeight: '600',
                      textTransform: 'uppercase'
                    }}>
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '10px',
                    lineHeight: '1.3'
                  }}>
                    {relatedPost.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.6',
                    marginBottom: '15px'
                  }}>
                    {relatedPost.excerpt}
                  </p>
                  <div style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)'
                  }}>
                    {relatedPost.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '80px 5%', 
        backgroundColor: '#000',
        borderTop: '1px solid rgba(255,255,255,0.1)'
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
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: '1.8' }}>
                Defining Bangladesh's skyline with architectural excellence since 2018.
              </p>
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>SERVICES</h4>
              {['Architecture', 'Structure', 'RAJUK Approval', 'Interior'].map((item, idx) => (
                <p key={idx} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '12px' }}>
                  {item}
                </p>
              ))}
            </div>

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>QUICK LINKS</h4>
              {[
                { name: 'About', link: '/about' },
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

            <div>
              <h4 style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', marginBottom: '25px' }}>CONTACT</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '12px' }}>
                📞 +880 1958-140774
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                📍 Jatrabari, Dhaka
              </p>
            </div>
          </div>

          <div style={{ 
            marginTop: '60px', 
            paddingTop: '30px', 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            textAlign: 'center' 
          }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>
              © 2024 INSAF LIMITED. All rights reserved.
            </p>
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
          
          /* Article Header */
          .article-header {
            padding-top: 120px !important;
            padding-bottom: 40px !important;
          }
          
          .article-title {
            font-size: 32px !important;
          }
          
          .article-meta {
            font-size: 13px !important;
            gap: 15px !important;
          }
          
          /* Article Content */
          .article-content {
            padding: 40px 15px !important;
          }
          
          .blog-content {
            font-size: 16px !important;
          }
          
          /* Related Posts */
          .related-posts {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
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
          .article-title {
            font-size: 28px !important;
          }
          
          .article-meta span {
            font-size: 12px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .article-title {
            font-size: 42px !important;
          }
          
          .related-posts {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}