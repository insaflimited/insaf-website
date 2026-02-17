'use client'
import { useState, useEffect } from 'react'
import { blogs } from '@/lib/data/blogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogs.find(b => b.slug === params.slug)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!post) notFound()

  return (
    <div style={{ 
      backgroundColor: '#0A0A0A', 
      minHeight: '100vh',
      overflowX: 'hidden' 
    }}>

      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      {/* Article Header */}
      <header className="article-header" style={{ 
        paddingTop: '80px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        textAlign: 'center', 
        background: 'radial-gradient(circle at 20% 50%, rgba(255,215,0,0.1) 0%, transparent 50%)',
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out'
        }}>
          {/* Back Button */}
          <Link href="/blog" className="back-btn" style={{
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
            marginBottom: '30px'
          }}>
            <span style={{ fontSize: '16px' }}>←</span>
            BACK TO BLOG
          </Link>

          {/* Category Badge */}
          <div className="category-badge" style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(255,215,0,0.2)',
            borderRadius: '30px',
            marginBottom: '25px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.1s'
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
            marginBottom: '30px',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.2s'
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
            flexWrap: 'wrap',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease-out 0.4s'
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
      <div className="featured-image-container" style={{
        padding: '0 5%',
        marginBottom: '60px',
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
        transition: 'all 1s ease-out 0.5s'
      }}>
        <div className="featured-image" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,165,0,0.1))',
          borderRadius: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '80px',
          border: '1px solid rgba(255,215,0,0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated glow */}
          <div className="image-glow"></div>
          <span style={{ position: 'relative', zIndex: 2 }}>📰</span>
        </div>
      </div>

      {/* Main Content */}
      <article className="article-content fade-in-section" style={{ 
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
          <div className="blog-content slide-in-up" style={{ 
            whiteSpace: 'pre-line',
            marginBottom: '60px'
          }}>
            {post.content}
          </div>

          {/* Share Buttons */}
          <div className="share-section slide-in-up" style={{
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
                <button key={idx} className="share-btn" style={{
                  padding: '12px 25px',
                  backgroundColor: 'rgba(255,215,0,0.1)',
                  border: '1px solid rgba(255,215,0,0.3)',
                  borderRadius: '30px',
                  color: '#FFD700',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  animationDelay: `${idx * 0.1}s`
                }}>
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Expert Callout Box */}
          <div className="expert-callout slide-in-up" style={{ 
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
            {/* Animated Glow Effect */}
            <div className="callout-glow"></div>

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="icon-bounce" style={{ fontSize: '48px', marginBottom: '20px' }}>💡</div>
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
                <a href="tel:+8801958140774" className="btn-glow" style={{
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
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <span style={{ position: 'relative', zIndex: 2 }}>📞 ফ্রি পরামর্শ নিন</span>
                </a>
                <a href="https://wa.me/8801958140774" className="btn-whatsapp" style={{
                  padding: '18px 40px',
                  background: '#25D366',
                  color: 'white',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  💬 WhatsApp করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="related-section fade-in-section" style={{
        padding: '80px 5%',
        backgroundColor: '#0A0A0A',
        position: 'relative'
      }}>
        {/* Animated rings */}
        <div className="section-ring ring-1"></div>
        <div className="section-ring ring-2"></div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 className="section-heading" style={{
            fontSize: '36px',
            fontWeight: '900',
            color: 'white',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            আরও <span className="gradient-text" style={{ color: '#FFD700' }}>পড়ুন</span>
          </h2>
          <div className="related-posts" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {blogs.slice(0, 3).map((relatedPost, idx) => (
              <Link 
                key={relatedPost.slug} 
                href={`/blog/${relatedPost.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div className="related-card" style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  animationDelay: `${idx * 0.15}s`
                }}>
                  <div className="card-badge" style={{
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
                  <h3 className="card-title" style={{
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
                  <div className="card-date" style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span>📅</span>
                    {relatedPost.date}
                  </div>
                  
                  {/* Read more arrow */}
                  <div className="read-more" style={{
                    marginTop: '20px',
                    color: '#FFD700',
                    fontSize: '14px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    Read More <span className="arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        /* ========== KEYFRAME ANIMATIONS ========== */
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255,215,0,0.3); 
            opacity: 0.5;
          }
          50% { 
            box-shadow: 0 0 60px rgba(255,215,0,0.6), 0 0 100px rgba(255,215,0,0.3); 
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes ringPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1; }
          100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
        }

        @keyframes borderGlow {
          0%, 100% { border-color: rgba(255,215,0,0.2); }
          50% { border-color: rgba(255,215,0,0.5); }
        }

        @keyframes floatGlow {
          0%, 100% { 
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% { 
            transform: translate(30px, -30px);
            opacity: 0.6;
          }
        }

        /* ========== PARTICLES ========== */
        .particles {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: hidden;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255,215,0,0.4);
          border-radius: 50%;
          animation: particleFloat 20s linear infinite;
        }

        /* ========== BACK BUTTON ========== */
        .back-btn {
          transition: all 0.3s ease;
        }
        .back-btn:hover {
          background-color: rgba(255,215,0,0.2);
          transform: translateX(-5px);
          box-shadow: 0 10px 30px rgba(255,215,0,0.2);
        }

        /* ========== CATEGORY BADGE ========== */
        .category-badge {
          animation: fadeInDown 0.8s ease-out;
        }

        /* ========== FEATURED IMAGE ========== */
        .featured-image {
          transition: all 0.5s ease;
        }
        .featured-image:hover {
          transform: scale(1.02);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(255,215,0,0.1);
        }
        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255,215,0,0.3), transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: glow 4s ease-in-out infinite;
          filter: blur(40px);
        }

        /* ========== CONTENT ANIMATIONS ========== */
        .fade-in-section {
          animation: fadeInUp 1s ease-out;
        }

        .slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .blog-content {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        /* ========== SHARE BUTTONS ========== */
        .share-section {
          animation-delay: 0.3s;
          opacity: 0;
          animation-fill-mode: forwards;
          animation: borderGlow 3s infinite, slideInUp 0.8s ease-out forwards;
        }

        .share-btn {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: scaleIn 0.5s ease-out forwards;
          opacity: 0;
        }
        .share-btn:hover {
          background-color: rgba(255,215,0,0.2);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 30px rgba(255,215,0,0.2);
        }

        /* ========== EXPERT CALLOUT ========== */
        .expert-callout {
          animation-delay: 0.4s;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .callout-glow {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,215,0,0.3), transparent);
          border-radius: 50%;
          filter: blur(40px);
          animation: floatGlow 6s ease-in-out infinite;
        }

        .icon-bounce {
          animation: iconBounce 2s ease-in-out infinite;
        }

        /* ========== CTA BUTTONS ========== */
        .btn-glow {
          transition: all 0.4s ease;
          box-shadow: 0 20px 40px rgba(255,215,0,0.3);
        }
        .btn-glow:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 30px 60px rgba(255,215,0,0.5);
        }
        .btn-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.5s;
        }
        .btn-glow:hover::before {
          left: 100%;
        }

        .btn-whatsapp {
          transition: all 0.4s ease;
          box-shadow: 0 15px 30px rgba(37,211,102,0.3);
        }
        .btn-whatsapp:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 25px 50px rgba(37,211,102,0.4);
        }

        /* ========== SECTION RINGS ========== */
        .section-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(255,215,0,0.1);
          border-radius: 50%;
          animation: ringPulse 4s ease-in-out infinite;
          pointer-events: none;
        }
        .ring-1 {
          width: 400px;
          height: 400px;
        }
        .ring-2 {
          width: 600px;
          height: 600px;
          animation-delay: 0.5s;
        }

        /* ========== RELATED CARDS ========== */
        .related-card {
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .related-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: rgba(255,215,0,0.4);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 30px rgba(255,215,0,0.1);
        }

        .card-badge {
          transition: all 0.3s ease;
        }
        .related-card:hover .card-badge {
          background-color: rgba(255,215,0,0.3);
        }

        .card-title {
          transition: all 0.3s ease;
        }
        .related-card:hover .card-title {
          color: #FFD700;
        }

        .read-more {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }
        .related-card:hover .read-more {
          opacity: 1;
          transform: translateX(0);
        }

        .arrow {
          transition: transform 0.3s ease;
        }
        .related-card:hover .arrow {
          transform: translateX(5px);
        }

        /* ========== GRADIENT TEXT ========== */
        .gradient-text {
          background: linear-gradient(135deg, #FFD700, #FFA500);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }

        /* ========== SECTION HEADING ========== */
        .section-heading {
          animation: fadeInUp 1s ease-out;
        }

        /* ========== RESPONSIVE ========== */
        body {
          overflow-x: hidden !important;
        }

        @media (max-width: 768px) {
          .article-header {
            padding-top: 60px !important;
            padding-bottom: 40px !important;
          }
          
          .article-title {
            font-size: 32px !important;
          }
          
          .article-meta {
            font-size: 13px !important;
            gap: 15px !important;
          }
          
          .article-content {
            padding: 40px 15px !important;
          }
          
          .blog-content {
            font-size: 16px !important;
          }
          
          .related-posts {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .particles {
            display: none;
          }

          .section-ring {
            display: none;
          }

          .featured-image {
            height: 300px !important;
          }

          .expert-callout {
            padding: 30px 20px !important;
          }

          .expert-callout h3 {
            font-size: 22px !important;
          }
        }

        @media (max-width: 480px) {
          .article-title {
            font-size: 28px !important;
          }
          
          .article-meta span {
            font-size: 12px !important;
          }

          .featured-image {
            height: 250px !important;
            font-size: 50px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .article-title {
            font-size: 42px !important;
          }
          
          .related-posts {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}