import { stats } from '@/lib/data'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 border-2 border-[#C9A961] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-[#2B2B2B] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-[#2B2B2B] text-white px-4 py-2 rounded-full text-sm mb-8">
              <span className="w-2 h-2 bg-[#C9A961] rounded-full animate-pulse"></span>
              RAJUK Panel-listed Consultant
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2B2B] leading-tight mb-6">
              আপনার কোটি টাকার স্বপ্ন —
              <span className="block text-[#C9A961] mt-2">সঠিক পরিকল্পনায় সুরক্ষিত থাকুক</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              RAJUK-approved luxury design + structural safety<br />
              for discerning homeowners and developers.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-[#C9A961]">✓</span> ১২ বছরের অভিজ্ঞতা
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-[#C9A961]">✓</span> ৫৩০+ প্রকল্প সম্পন্ন
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="text-[#C9A961]">✓</span> Zero failure record
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-gold">
                📅 Book Private Consultation
              </button>
              <button className="btn btn-secondary">
                See Approved Projects →
              </button>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="animate-scale">
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <h3 className="text-2xl font-bold text-[#2B2B2B] mb-8 text-center">
                আমাদের সাফল্য
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-[#F8F6F1] rounded-2xl">
                  <div className="text-4xl font-bold text-[#C9A961]">{stats.projects}</div>
                  <div className="text-gray-600 mt-2">অনুমোদিত প্রকল্প</div>
                </div>
                <div className="text-center p-6 bg-[#F8F6F1] rounded-2xl">
                  <div className="text-4xl font-bold text-[#C9A961]">{stats.years}</div>
                  <div className="text-gray-600 mt-2">বছরের অভিজ্ঞতা</div>
                </div>
                <div className="text-center p-6 bg-[#F8F6F1] rounded-2xl">
                  <div className="text-4xl font-bold text-[#C9A961]">{stats.success}</div>
                  <div className="text-gray-600 mt-2">RAJUK সাফল্য</div>
                </div>
                <div className="text-center p-6 bg-[#F8F6F1] rounded-2xl">
                  <div className="text-4xl font-bold text-[#C9A961]">{stats.team}</div>
                  <div className="text-gray-600 mt-2">Expert টিম</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="text-center text-sm text-gray-500 mb-4">Certified By</p>
                <div className="flex justify-center gap-4">
                  <span className="px-4 py-2 bg-[#F8F6F1] rounded-lg text-sm font-medium">RAJUK</span>
                  <span className="px-4 py-2 bg-[#F8F6F1] rounded-lg text-sm font-medium">DAP</span>
                  <span className="px-4 py-2 bg-[#F8F6F1] rounded-lg text-sm font-medium">BNBC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}