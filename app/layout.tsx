import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Script from 'next/script'

// ===== FONT CONFIGURATION =====
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
})

// ===== VIEWPORT CONFIGURATION =====
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#FFD700' },
  ],
}

// ===== METADATA CONFIGURATION =====
export const metadata: Metadata = {
  metadataBase: new URL('https://insaflimited.com'),
  
  title: {
    default: 'INSAF Building Design & Consultant Ltd - RAJUK Approved Architects',
    template: '%s | INSAF Architects',
  },
  
  description: 'Leading architectural firm in Bangladesh. RAJUK approved panel architects specializing in residential, commercial, and industrial design with 530+ successful projects since 2018.',
  
  keywords: [
    'RAJUK approved architects',
    'Bangladesh architects',
    'Dhaka architects',
    'building design Bangladesh',
    'structural design',
    'interior design',
    'architectural consultant',
    'INSAF architects',
    'residential design',
    'commercial design',
    'architectural firm Dhaka',
    'building permit Bangladesh',
    'construction design',
  ],
  
  authors: [
    { name: 'INSAF Limited', url: 'https://insaflimited.com' }
  ],
  
  creator: 'INSAF Building Design & Consultant Ltd',
  publisher: 'INSAF Limited',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://insaflimited.com',
    siteName: 'INSAF Architects',
    title: 'INSAF Building Design & Consultant Ltd',
    description: 'RAJUK Panel Listed Architects - Creating architectural excellence since 2018. 530+ projects delivered across Bangladesh.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INSAF Architects - RAJUK Approved Building Design',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'INSAF Limited Logo',
        type: 'image/jpeg',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@insaflimited',
    creator: '@insaflimited',
    title: 'INSAF Building Design & Consultant Ltd',
    description: 'RAJUK Panel Listed Architects - 530+ Projects Delivered',
    images: {
      url: '/og-image.jpg',
      alt: 'INSAF Architects',
    },
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  
  // Alternates
  alternates: {
    canonical: 'https://insaflimited.com',
    languages: {
      'en-US': 'https://insaflimited.com',
    },
  },
  
  // Category
  category: 'Architecture & Construction',
  
  // Additional metadata
  other: {
    'contact:phone_number': '+880 1958-140774',
    'contact:email': 'contact@insaflimited.com',
    'contact:address': 'Kazlar par, Jatrabari, Dhaka 1204, Bangladesh',
  },
}

// ===== STRUCTURED DATA (JSON-LD) =====
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ArchitecturalOrganization',
  name: 'INSAF Building Design & Consultant Ltd',
  alternateName: 'INSAF Architects',
  url: 'https://insaflimited.com',
  logo: 'https://insaflimited.com/logo.png',
  image: 'https://insaflimited.com/og-image.jpg',
  description: 'RAJUK approved panel architects specializing in residential, commercial, and industrial design in Bangladesh.',
  
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kazlar par, Jatrabari',
    addressLocality: 'Dhaka',
    postalCode: '1204',
    addressCountry: 'BD',
  },
  
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880-1958-140774',
    contactType: 'Customer Service',
    email: 'contact@insaflimited.com',
    areaServed: 'BD',
    availableLanguage: ['en', 'bn'],
  },
  
  sameAs: [
    'https://facebook.com/insaflimited',
    'https://instagram.com/insaflimited',
    'https://linkedin.com/company/insaflimited',
  ],
  
  foundingDate: '2018',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 25,
  },
  
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '530',
  },
  
  priceRange: '৳৳৳',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://insaflimited.com',
  name: 'INSAF Building Design & Consultant Ltd',
  image: 'https://insaflimited.com/og-image.jpg',
  telephone: '+880-1958-140774',
  email: 'contact@insaflimited.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kazlar par, Jatrabari',
    addressLocality: 'Dhaka',
    postalCode: '1204',
    addressCountry: 'BD',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.7104,
    longitude: 90.4310,
  },
  url: 'https://insaflimited.com',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '09:00',
    closes: '18:00',
  },
}

// ===== ROOT LAYOUT COMPONENT =====
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* ✅ Custom Styles for Animations & Effects */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* ===== GLOBAL ANIMATIONS ===== */
          
          /* Smooth Page Transitions */
          @keyframes pageEnter {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Floating Animation */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          /* Pulse Glow */
          @keyframes pulseGlow {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
            }
            50% { 
              box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);
            }
          }

          /* Gradient Shift */
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Rotate */
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          /* Scale Pulse */
          @keyframes scalePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          /* ===== SCROLL PROGRESS BAR ===== */
          .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #FFD700, #FFA500, #FF6B6B);
            z-index: 9999;
            transition: width 0.1s ease-out;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
          }

          /* ===== FLOATING WHATSAPP BUTTON ===== */
          .whatsapp-float {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #25D366, #128C7E);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            cursor: pointer;
            z-index: 999;
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: float 3s ease-in-out infinite;
            text-decoration: none;
          }

          .whatsapp-float:hover {
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 20px 50px rgba(37, 211, 102, 0.6);
          }

          .whatsapp-float::before {
            content: '';
            position: absolute;
            inset: -5px;
            border-radius: 50%;
            border: 2px solid rgba(37, 211, 102, 0.3);
            animation: pulseGlow 2s ease-in-out infinite;
          }

          /* WhatsApp Tooltip */
          .whatsapp-tooltip {
            position: absolute;
            right: 70px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 13px;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s ease;
            pointer-events: none;
          }

          .whatsapp-float:hover .whatsapp-tooltip {
            opacity: 1;
            transform: translateX(0);
          }

          /* ===== PRELOADER ===== */
          .preloader {
            position: fixed;
            inset: 0;
            background: #0A0A0A;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            transition: opacity 0.2s ease, visibility 0.2s ease;

          }

          .preloader.loaded {
            opacity: 0;
            visibility: hidden;
          }

          .preloader-logo {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #FFD700, #FFA500);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            font-weight: 900;
            color: #0A0A0A;
            animation: scalePulse 1s ease-in-out infinite;
            box-shadow: 0 0 60px rgba(255, 215, 0, 0.5);
          }

          .preloader-ring {
            position: absolute;
            width: 120px;
            height: 120px;
            border: 3px solid transparent;
            border-top-color: #FFD700;
            border-right-color: #FFA500;
            border-radius: 50%;
            animation: rotate 1s linear infinite;
          }

          /* ===== CUSTOM SCROLLBAR ===== */
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }

          ::-webkit-scrollbar-track {
            background: #0A0A0A;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #FFD700, #FFA500);
            border-radius: 10px;
            border: 2px solid #0A0A0A;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(135deg, #FFA500, #FFD700);
          }

          /* Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: #FFD700 #0A0A0A;
          }

          /* ===== SELECTION HIGHLIGHT ===== */
          ::selection {
            background: rgba(255, 215, 0, 0.3);
            color: white;
          }

          ::-moz-selection {
            background: rgba(255, 215, 0, 0.3);
            color: white;
          }

          /* ===== SMOOTH SCROLL ===== */
          html {
            scroll-behavior: smooth;
          }

          /* ===== REMOVE TAP HIGHLIGHT ===== */
          * {
            -webkit-tap-highlight-color: transparent;
          }

          /* ===== PAGE ENTER ANIMATION ===== */
          main {
            animation: pageEnter 0.6s ease-out;
          }

          /* ===== FOCUS STYLES ===== */
          *:focus-visible {
            outline: 2px solid #FFD700;
            outline-offset: 2px;
          }

          /* ===== SKIP TO CONTENT (A11Y) ===== */
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
          }

          .sr-only:focus-within,
          .focus\\:not-sr-only:focus {
            position: absolute;
            width: auto;
            height: auto;
            padding: 0;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
          }

          /* ===== RESPONSIVE ADJUSTMENTS ===== */
          @media (max-width: 768px) {
            .whatsapp-float {
              bottom: 80px;
              right: 20px;
              width: 55px;
              height: 55px;
              font-size: 26px;
            }

            .whatsapp-tooltip {
              display: none;
            }

            .scroll-progress {
              height: 2px;
            }
          }

          /* ===== REDUCED MOTION ===== */
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }

            html {
              scroll-behavior: auto;
            }
          }
        `}} />
      </head>
      
      <body className={inter.className} suppressHydrationWarning>
        {/* ✅ Preloader */}
        <div className="preloader" id="preloader">
          <div className="preloader-ring"></div>
          <div className="preloader-logo">I</div>
        </div>

        {/* ✅ Scroll Progress Bar */}
        <div className="scroll-progress" id="scroll-progress"></div>

        {/* Skip to main content (Accessibility) */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-yellow-500 focus:text-black focus:font-bold focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />

        {/* ✅ Floating WhatsApp Button */}
        <a 
          href="https://wa.me/8801958140774"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          💬
          <span className="whatsapp-tooltip">Chat with us!</span>
        </a>
        
        {/* ✅ Preloader & Scroll Progress Script */}
        <Script
          id="page-scripts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Remove preloader after page load
              window.addEventListener('load', function() {
                setTimeout(function() {
                  document.getElementById('preloader').classList.add('loaded');
                }, 0);
              });

              // Scroll progress bar
              window.addEventListener('scroll', function() {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                document.getElementById('scroll-progress').style.width = scrolled + '%';
              });

              // Smooth scroll for anchor links
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                });
              });
            `,
          }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {/* Facebook Pixel (Optional) */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  )
}