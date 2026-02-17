'use client'
import { useState } from 'react'

export default function ServicePricesPage() {
  const [activePackage, setActivePackage] = useState<number | null>(null)

  const packages = [
    {
      id: 1,
      title: 'Only Building Floor Plan Cost',
      titleBn: 'শুধুমাত্র ভবনের ফ্লোর প্ল্যান',
      icon: '📐',
      description: 'শুধুমাত্র ফ্লোর প্ল্যান ডিজাইন',
      price: 'Starting from ৳15,000',
      features: [
        '2D Floor Plan',
        'Room Layout',
        'Basic Measurements',
        'Printable Format',
        '2-3 Revisions'
      ],
      popular: false
    },
    {
      id: 2,
      title: 'Duplex/Triplex House Design Cost',
      titleBn: 'ডুপ্লেক্স/ট্রিপ্লেক্স বাড়ি ডিজাইন',
      icon: '🏠',
      description: 'ছোট আবাসিক ভবনের সম্পূর্ণ ডিজাইন',
      price: '৳80-120 per sqft',
      features: [
        'Complete Architectural Design',
        'Structural Design',
        'Electrical Layout',
        'Plumbing Layout',
        '3D Exterior View',
        'RAJUK Submission Drawing',
        'Unlimited Revisions'
      ],
      popular: true
    },
    {
      id: 3,
      title: '1st-2nd Storied Building Design Cost',
      titleBn: '১ম-২য় তলা ভবন ডিজাইন',
      icon: '🏘️',
      description: 'মাঝারি আকারের ভবন ডিজাইন',
      price: '৳70-100 per sqft',
      features: [
        'Full Architectural Plan',
        'Structural Calculation',
        'MEP Design',
        '3D Visualization',
        'RAJUK/Municipality Approval Drawing',
        'Construction Guidance',
        'Material Specification'
      ],
      popular: false
    },
    {
      id: 4,
      title: '3rd-4th Storied Building Design Cost',
      titleBn: '৩য়-৪র্থ তলা ভবন ডিজাইন',
      icon: '🏢',
      description: 'মাঝারি থেকে বড় আকারের ভবন',
      price: '৳65-90 per sqft',
      features: [
        'Complete Design Package',
        'Advanced Structural Design',
        'Fire Safety Plan',
        'Lift & Staircase Design',
        '3D Interior & Exterior',
        'RAJUK Approval Support',
        'Construction Supervision (Optional)'
      ],
      popular: false
    },
    {
      id: 5,
      title: '5th-6th Storied Building Design Cost',
      titleBn: '৫ম-৬ষ্ঠ তলা ভবন ডিজাইন',
      icon: '🏗️',
      description: 'বহুতল আবাসিক/বাণিজ্যিক ভবন',
      price: '৳60-85 per sqft',
      features: [
        'Premium Design Package',
        'Advanced Foundation Design',
        'Complete MEP Services',
        'Fire Safety & NOC',
        'Parking Layout',
        'Generator & Substation Design',
        'Full RAJUK Documentation'
      ],
      popular: false
    },
    {
      id: 6,
      title: '7th-8th Storied Building Design Cost',
      titleBn: '৭ম-৮ম তলা ভবন ডিজাইন',
      icon: '🌆',
      description: 'উচ্চ বহুতল ভবন',
      price: '৳55-80 per sqft',
      features: [
        'Enterprise Design Solution',
        'Earthquake Resistant Design',
        'High-Rise MEP Systems',
        'Advanced Fire Safety',
        'Lift, Generator, Substation',
        'Complete Approval Package',
        'Project Management Support'
      ],
      popular: false
    },
    {
      id: 7,
      title: '9th-10th Storied Building Design Cost',
      titleBn: '৯ম-১০ম তলা ভবন ডিজাইন',
      icon: '🏙️',
      description: 'সুউচ্চ বহুতল ভবন',
      price: 'Custom Quote Required',
      features: [
        'Full Turnkey Design Solution',
        'Advanced Structural Engineering',
        'Complete Building Systems',
        'Fire & Safety Compliance',
        'MEP & HVAC Design',
        'RAJUK & All Approvals',
        'End-to-End Project Support',
        'On-site Engineering Team'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      icon: '📋',
      title: 'রাজউক প্ল্যান পাস',
      price: '৳60,000 - ৳1,50,000'
    },
    {
      icon: '🏛️',
      title: 'পৌরসভা প্ল্যান পাস',
      price: '৳40,000 - ৳80,000'
    },
    {
      icon: '📏',
      title: 'ডিজিটাল জমি জরিপ',
      price: '৳8,000 - ৳15,000'
    },
    {
      icon: '🧪',
      title: 'সয়েল টেস্ট',
      price: '৳15,000 - ৳25,000'
    },
    {
      icon: '🏗️',
      title: 'পাইলিং কাজ',
      price: 'Per Pile Basis'
    },
    {
      icon: '👷',
      title: 'সাইট সুপারভিশন',
      price: 'Monthly/Project Basis'
    }
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8F6F1' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)',
        padding: '100px 20px 80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-block',
            padding: '10px 25px',
            backgroundColor: 'rgba(255,215,0,0.15)',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '30px',
            marginBottom: '30px'
          }}>
            <span style={{ color: '#FFD700', fontSize: '14px', letterSpacing: '2px', fontWeight: '600' }}>
              SERVICE PRICING
            </span>
          </div>

          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: '900', 
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            একটি বাড়ি একজন মানুষের<br/>
            <span style={{ color: '#FFD700' }}>সারাজীবনের লালিত স্বপ্ন</span>
          </h1>

          <p style={{ 
            fontSize: '20px', 
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            স্বপ্নকে সঠিক ভাবে বাস্তবায়ন করতে সঠিক প্ল্যান আবশ্যক!
          </p>

          <a href="tel:+8801958140774" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '18px 40px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            border: 'none',
            borderRadius: '50px',
            color: '#0A0A0A',
            fontWeight: '800',
            fontSize: '18px',
            textDecoration: 'none',
            boxShadow: '0 20px 40px rgba(255,215,0,0.3)'
          }}>
            📞 01958-140774
          </a>
        </div>
      </section>

      {/* Main Packages Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#0A0A0A', marginBottom: '15px' }}>
              বিল্ডিং ডিজাইন সার্ভিস, খরচ এবং প্যাকেজ সমূহ
            </h2>
            <p style={{ fontSize: '18px', color: '#666' }}>
              আপনার প্রয়োজন অনুযায়ী সঠিক প্যাকেজ নির্বাচন করুন
            </p>
          </div>

          {/* Package Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
                style={{
                  background: pkg.popular 
                    ? 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.05))' 
                    : 'white',
                  border: pkg.popular ? '2px solid #FFD700' : '1px solid #e0e0e0',
                  borderRadius: '20px',
                  padding: '40px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s',
                  boxShadow: activePackage === pkg.id ? '0 20px 60px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '30px',
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    borderRadius: '30px',
                    fontSize: '12px',
                    fontWeight: '800',
                    color: '#0A0A0A',
                    letterSpacing: '1px'
                  }}>
                    MOST POPULAR
                  </div>
                )}

                {/* Icon */}
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{pkg.icon}</div>

                {/* Title */}
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0A0A0A', marginBottom: '10px' }}>
                  {pkg.titleBn}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                  {pkg.description}
                </p>

                {/* Price */}
                <div style={{ 
                  fontSize: '28px', 
                  fontWeight: '900', 
                  color: pkg.popular ? '#FFD700' : '#0A0A0A',
                  marginBottom: '30px'
                }}>
                  {pkg.price}
                </div>

                {/* Features */}
                <div style={{ 
                  marginBottom: '25px',
                  maxHeight: activePackage === pkg.id ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'all 0.5s'
                }}>
                  <div style={{ paddingTop: '20px', borderTop: '1px solid #e0e0e0' }}>
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        marginBottom: '12px',
                        fontSize: '14px'
                      }}>
                        <span style={{ color: '#FFD700' }}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button style={{
                  width: '100%',
                  padding: '15px',
                  background: pkg.popular 
                    ? 'linear-gradient(135deg, #FFD700, #FFA500)' 
                    : '#0A0A0A',
                  border: 'none',
                  borderRadius: '10px',
                  color: pkg.popular ? '#0A0A0A' : 'white',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  {activePackage === pkg.id ? 'বিস্তারিত লুকান ↑' : 'বিস্তারিত দেখুন ↓'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section style={{ padding: '80px 20px', backgroundColor: '#F8F6F1' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#0A0A0A', marginBottom: '15px' }}>
              অতিরিক্ত সেবাসমূহ
            </h2>
            <p style={{ fontSize: '16px', color: '#666' }}>
              নিন্মের সার্ভিসের জন্য সরাসরি কথা বলুন
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {additionalServices.map((service, idx) => (
              <div key={idx} style={{
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'
              }}>
                <div style={{ fontSize: '48px', marginBottom: '15px' }}>{service.icon}</div>
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#0A0A0A', marginBottom: '10px' }}>
                  {service.title}
                </h4>
                <p style={{ fontSize: '20px', fontWeight: '800', color: '#FFD700' }}>
                  {service.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '900', textAlign: 'center', marginBottom: '50px' }}>
            প্রায়শই জিজ্ঞাসিত প্রশ্ন এবং উত্তর
          </h2>

          <div style={{ 
            backgroundColor: '#F8F6F1',
            borderRadius: '15px',
            padding: '35px',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0A0A0A', marginBottom: '15px' }}>
              আপনারা কি ঢাকার বাহিরে কাজ করেন?
            </h3>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
              হ্যাঁ, আমরা বাংলাদেশের সকল জেলায় কাজ করে থাকি। আমাদের অভিজ্ঞ টিম দেশের যেকোনো প্রান্তে আপনার প্রজেক্টে সেবা প্রদান করতে প্রস্তুত।
            </p>
          </div>

          <div style={{ 
            backgroundColor: '#F8F6F1',
            borderRadius: '15px',
            padding: '35px',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0A0A0A', marginBottom: '15px' }}>
              প্যাকেজের মূল্য কি পরিবর্তনশীল?
            </h3>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
              প্যাকেজের মূল্য প্রজেক্টের আকার, জটিলতা এবং অবস্থানের উপর নির্ভর করে পরিবর্তন হতে পারে। সঠিক মূল্য জানতে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>

          <div style={{ 
            backgroundColor: '#F8F6F1',
            borderRadius: '15px',
            padding: '35px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0A0A0A', marginBottom: '15px' }}>
              পেমেন্ট কিভাবে করতে হয়?
            </h3>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
              আমরা সাধারণত ৩ কিস্তিতে পেমেন্ট নিয়ে থাকি - প্রথম কিস্তি কাজ শুরুর সময়, দ্বিতীয় কিস্তি ড্রইং সম্পন্ন হলে এবং তৃতীয় কিস্তি রাজউক সাবমিশনের সময়।
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ 
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #0A0A0A, #1a1a1a)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '20px' }}>
            আপনার স্বপ্নের বাড়ি নির্মাণে<br/>
            <span style={{ color: '#FFD700' }}>আমরা আছি আপনার পাশে</span>
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>
            বিনামূল্যে পরামর্শ নিতে আজই যোগাযোগ করুন
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+8801958140774" style={{
              padding: '18px 40px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              border: 'none',
              borderRadius: '50px',
              color: '#0A0A0A',
              fontWeight: '800',
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              📞 কল করুন
            </a>
            <a href="https://wa.me/8801958140774" style={{
              padding: '18px 40px',
              backgroundColor: '#25D366',
              border: 'none',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '700',
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              💬 WhatsApp
            </a>
            <a href="mailto:contact@insaflimited.com" style={{
              padding: '18px 40px',
              backgroundColor: 'transparent',
              border: '2px solid white',
              borderRadius: '50px',
              color: 'white',
              fontWeight: '700',
              fontSize: '16px',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              ✉️ ইমেইল করুন
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}