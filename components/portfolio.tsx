'use client'
import { useState } from 'react'
import { portfolio } from '@/lib/data'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential')

  return (
    <section id="portfolio" className="py-20 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            আমাদের সাম্প্রতিক প্রকল্পসমূহ
          </h2>
          <p className="text-gray-600">530+ সফল প্রকল্পের কিছু নমুনা</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('residential')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === 'residential'
                ? 'bg-[#2B2B2B] text-white'
                : 'bg-white text-[#2B2B2B] hover:bg-gray-100'
            }`}
          >
            🏡 Residential
          </button>
          <button
            onClick={() => setActiveTab('commercial')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === 'commercial'
                ? 'bg-[#2B2B2B] text-white'
                : 'bg-white text-[#2B2B2B] hover:bg-gray-100'
            }`}
          >
            🏢 Commercial
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio[activeTab].map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-[#C9A961]/20 to-[#2B2B2B]/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-30">
                    {activeTab === 'residential' ? '🏠' : '🏢'}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2B2B] mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-1">{project.type}</p>
                <p className="text-sm text-[#C9A961]">📍 {project.location}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{project.area}</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-600'
                      : project.status === 'Under Construction'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-secondary">
            সকল প্রকল্প দেখুন →
          </button>
        </div>
      </div>
    </section>
  )
}