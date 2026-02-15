import { testimonials } from '@/lib/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">
            ক্লায়েন্টদের মতামত
          </h2>
          <p className="text-gray-600">আমাদের সম্পর্কে তারা কি বলছেন</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#F8F6F1] rounded-2xl p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#C9A961] text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-[#2B2B2B]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-[#C9A961] mt-1">Project: {testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">আমরা গর্বিত আমাদের</p>
          <div className="flex justify-center gap-8">
            <div>
              <span className="text-3xl font-bold text-[#C9A961]">4.9/5</span>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-[#C9A961]">250+</span>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
            <div>
              <span className="text-3xl font-bold text-[#C9A961]">98%</span>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}