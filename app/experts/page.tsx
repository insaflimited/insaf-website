'use client'
import { useState } from 'react'

export default function ExpertsPage() {
  const engineeringTeam = [
    { name: 'Engr. Md. Shoriful Islam', role: 'Senior Design Engineer', degree: 'B.Sc Engr. (Civil), M.Sc Engr. (Cont.)', extra: 'Safety Management Certificate (BUIT)' },
    { name: 'Engr. Md. Kamruzzaman Kiron', role: 'Design Engineer', degree: 'B.Sc Engr. (Civil)' },
    { name: 'Engr. Sheikh Rakibul Hasan', role: 'Design Engineer', degree: 'B.Sc Engr. (Civil)' },
    { name: 'Engr. Md. Rakib Hosen', role: 'Design Engineer', degree: 'B.Sc Engr. (Civil)' },
    { name: 'Engr. Jamil Ahmed', role: 'Chemical Engineer', degree: 'M.Sc Engineer (Chemical)' },
    { name: 'Engr. Md. Ohidul Islam', role: 'Engineer', degree: 'B.Sc Engr. (Civil)' },
    { name: 'Engr. Md. Azharul Hoque Asif', role: 'Engineer', degree: 'B.Sc Engr. (Civil)' },
    { name: 'Engr. Syed Towsikur Rahman', role: 'Engineer', degree: 'B.Sc Engr. (Civil)' },
  ]

  const architectTeam = [
    { name: 'Architect Md. Sahabuddin Mahmud', role: 'Architect', degree: 'B.Sc Architect' },
    { name: 'Architect Md. Owasi Uddin Salim', role: 'Architect', degree: 'B.Sc Architect' },
    { name: 'Architect Md. Sha-Alom Hridoy', role: 'Architect', degree: 'B.Sc Architect' },
    { name: 'Architect Md. Robiul Islam', role: 'Architect', degree: 'B.Sc Architect' },
  ]

  const specialistTeam = [
    { name: 'Engr. Md. Ujjol Hossain', role: 'Electrical Engineer', degree: 'B.Sc Engr. (EEE)' },
    { name: 'Engr. Md. Moniruzzaman', role: 'Electrical Engineer', degree: 'B.Sc Engr. (EEE)' },
    { name: 'Engr. Md. Johirul Islam', role: 'Plumbing Engineer', degree: 'Expert in Sanitation' },
    { name: 'Engr. Md. Totul Ahmed', role: 'Plumbing Engineer', degree: 'Expert in Sanitation' },
  ]

  const managementTeam = [
    { name: 'Asifur Rahman Fahim', role: 'General Manager', degree: 'Corporate Strategy' },
    { name: 'Md. Mahdi Hasan', role: 'General Manager (Real Estate)', degree: 'Real Estate Expert' },
    { name: 'Md. Ruhul Amin', role: 'Project Co-ordinator', degree: 'On-site Execution' },
    { name: 'Md. Talha', role: 'Marketing Manager', degree: 'Client Relations' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* HERO SECTION */}
      <section style={{ 
        padding: '120px 5% 80px', 
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 50%, rgba(255,215,0,0.1) 0%, transparent 70%)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'rgba(255,215,0,0.1)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '50px',
            color: '#FFD700',
            fontSize: '14px',
            letterSpacing: '2px',
            marginBottom: '30px'
          }}>
            THE MASTERMINDS
          </div>
          <h1 style={{ fontSize: '64px', fontWeight: '900', marginBottom: '20px', lineHeight: 1.1 }}>
            Expert Engineering & <br/>
            <span style={{ color: '#FFD700' }}>Architect Team</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}>
            Meet the visionaries behind Insaf Limited. A powerhouse of certified engineers and creative architects dedicated to your safety and luxury.
          </p>
        </div>
      </section>

      {/* CORE ENGINEERING SECTION */}
      <TeamSection title="Structural & Design Engineers" data={engineeringTeam} theme="gold" />

      {/* ARCHITECTS SECTION */}
      <TeamSection title="Architectural Design Team" data={architectTeam} theme="white" />

      {/* SPECIALIST SECTION */}
      <TeamSection title="EEE & Plumbing Specialists" data={specialistTeam} theme="gold" />

      {/* MANAGEMENT & SURVEY SECTION */}
      <TeamSection title="Management & Survey Team" data={managementTeam} theme="white" />

      {/* EXPERT CONTACT FORM - DARK GLASS MODE */}
      <section style={{ padding: '100px 5%', backgroundColor: '#0F0F0F' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '80px',
          alignItems: 'center' 
        }}>
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '30px' }}>
              Want to speak with <br/>
              <span style={{ color: '#FFD700' }}>Our Experts?</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '40px' }}>
              আপনার জমির ধরণ বা ভবনের নকশা নিয়ে কনফিউশনে আছেন? আমাদের এক্সপার্ট ইঞ্জিনিয়ারদের সাথে সরাসরি কথা বলে সমাধান নিন।
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#FFD700', fontWeight: 'bold' }}>Phone</div>
                <div style={{ fontSize: '18px' }}>01958-140774</div>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#FFD700', fontWeight: 'bold' }}>Email</div>
                <div style={{ fontSize: '18px' }}>contact@insaflimited.com</div>
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            padding: '50px', 
            borderRadius: '30px', 
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Enter Name *" style={inputStyle} />
              <input type="tel" placeholder="Mobile Number *" style={inputStyle} />
              <input type="email" placeholder="Enter Email *" style={inputStyle} />
              <textarea placeholder="Your Message *" rows={4} style={inputStyle}></textarea>
              <button style={{
                padding: '18px',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                border: 'none',
                borderRadius: '12px',
                color: '#000',
                fontWeight: '800',
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(255,215,0,0.3)'
              }}>SUBMIT REQUEST</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

// Sub-component for Team sections
function TeamSection({ title, data, theme }: { title: string, data: any[], theme: 'gold' | 'white' }) {
  return (
    <section style={{ padding: '60px 5%' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: '800', 
          marginBottom: '50px', 
          borderLeft: `6px solid ${theme === 'gold' ? '#FFD700' : 'white'}`,
          paddingLeft: '20px'
        }}>
          {title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {data.map((member, idx) => (
            <div key={idx} className="expert-card" style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                backgroundColor: theme === 'gold' ? 'rgba(255,215,0,0.1)' : 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '20px',
                color: theme === 'gold' ? '#FFD700' : 'white'
              }}>
                👤
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: theme === 'gold' ? '#FFD700' : 'white' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.8)', marginBottom: '12px' }}>
                {member.role}
              </p>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
                {member.degree}
                {member.extra && <div style={{ marginTop: '10px', color: '#FFD700', fontSize: '12px' }}>✦ {member.extra}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .expert-card:hover {
          background-color: rgba(255,255,255,0.07);
          transform: translateY(-10px);
          border-color: #FFD700;
        }
      `}</style>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '15px',
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '10px',
  color: 'white',
  fontSize: '15px',
  outline: 'none'
}