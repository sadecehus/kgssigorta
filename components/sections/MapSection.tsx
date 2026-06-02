"use client"

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0a2d5f] mb-4">Lokasyonumuz</h2>
          <p className="text-lg text-gray-600">TADU BLACK OFFICE'teki ofisimize kolayca ulaşabilirsiniz</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
            <div className="aspect-video bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5!2d29.780!3d40.770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f8b28c736cb%3A0x256951106ccd476b!2sTADU%20BLACK%20OFFICE!5e0!3m2!1str!2str!4v1717400000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KGS Sigorta Lokasyonu"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
