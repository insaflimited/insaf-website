export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2B2B2B] to-[#1a1a1a] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A961]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          আপনার প্রজেক্ট নিয়ে ৩০ মিনিট কথা বলুন — 
          <span className="text-[#C9A961]"> সম্পূর্ণ ফ্রি।</span>
        </h2>
        
        <p className="text-xl text-white/70 mb-10">
          আমরা জানাবো — আপনার জমিতে কী সম্ভব, কী ঝুঁকি, এবং কীভাবে এগোনো উচিত।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="btn btn-gold text-lg">
            📅 Book Free Consultation
          </button>
          <a href="https://wa.me/8801XXXXXXXXX" className="btn bg-green-500 hover:bg-green-600 text-white">
            💬 WhatsApp Now
          </a>
          <a href="tel:+8801XXXXXXXXX" className="btn btn-ghost">
            📞 Call Now
          </a>
        </div>

        <p className="text-white/60 text-sm">
          <span className="text-[#C9A961]">✓</span> No obligation. No sales pitch. Just clarity.
        </p>
      </div>
    </section>
  )
}