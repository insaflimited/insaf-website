'use client'
import { useState } from 'react'
import { faqs } from '@/lib/data'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-[#F8F6F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-gray-600">আপনার প্রশ্নের উত্তর এখানে পাবেন</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-[#2B2B2B]">{faq.q}</span>
                <span className="text-2xl text-[#C9A961]">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">আরও প্রশ্ন আছে?</p>
          <button className="btn btn-gold">
            সরাসরি কথা বলুন →
          </button>
        </div>
      </div>
    </section>
  )
}