import { blogs } from '@/lib/data/blogs'
import { notFound } from 'next/navigation'

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogs.find(b => b.slug === params.slug)

  if (!post) notFound()

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Article Header */}
      <header style={{ padding: '120px 20px 60px', textAlign: 'center', backgroundColor: '#F8F6F1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ color: '#FFD700', fontWeight: '700', letterSpacing: '2px' }}>{post.category.toUpperCase()}</span>
          <h1 style={{ fontSize: '42px', fontWeight: '900', marginTop: '20px', lineHeight: '1.3' }}>{post.title}</h1>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', color: '#666' }}>
            <span>📅 {post.date}</span>
            <span>👤 By Insaf Expert Team</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <article style={{ padding: '60px 20px' }}>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          fontSize: '18px', 
          lineHeight: '1.8', 
          color: '#333' 
        }}>
          {/* এই অংশটি আপনার দেওয়া টেক্সট ফরম্যাট করবে */}
          <div style={{ whiteSpace: 'pre-line' }}>
            {post.content}
          </div>

          {/* Expert Callout Box */}
          <div style={{ 
            marginTop: '60px', 
            padding: '40px', 
            backgroundColor: '#0A0A0A', 
            borderRadius: '24px', 
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#FFD700', fontSize: '24px', marginBottom: '15px' }}>আপনার কি বিশেষজ্ঞের পরামর্শ প্রয়োজন?</h3>
            <p style={{ opacity: 0.8, marginBottom: '30px' }}>সঠিক নিয়মে ভবন নির্মাণে আমরাই দিচ্ছি সেরা সল্যুশন। আজই আমাদের সাথে কথা বলুন।</p>
            <a href="tel:+8801958140774" style={{
              padding: '15px 35px',
              backgroundColor: '#FFD700',
              color: '#0A0A0A',
              borderRadius: '50px',
              fontWeight: '800',
              textDecoration: 'none'
            }}>ফ্রি পরামর্শ নিন</a>
          </div>
        </div>
      </article>
    </div>
  )
}