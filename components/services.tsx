'use client'
import { useState } from 'react'
import { services } from '@/lib/data'

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            আমাদের সেবাসমূহ
          </h2>
          <p className="text-gray-600">শুরু থেকে শেষ — প্রতিটি ধাপে আমরা আপনার পাশে</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#F8F6F1] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">{service.titleBn}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.title}</p>
              <p className="text-[#2B2B2B]/70">{service.description}</p>
              
              {activeService === service.id && (
                <div className="mt-4 pt-4 border-t border-[#C9A961]/30">
                  <p className="text-sm text-gray-600 mb-2">{service.details}</p>
                  <p className="text-[#C9A961] font-semibold">{service.price}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-gold">
            সকল সেবার বিস্তারিত দেখুন →
          </button>
        </div>
      </div>
    </section>
  )
}