"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a2d5f] mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-xl text-gray-600">Merak ettiğiniz soruların yanıtları burada</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#0a2d5f] hover:no-underline">
                Neden bir sigorta aracısı ile çalışmalıyım?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Sigorta aracısı olarak, birden fazla sigorta şirketi ile çalışarak size en uygun teklifi sunuyoruz.
                Tek bir şirkete bağlı kalmadan, ihtiyaçlarınıza göre en iyi fiyat ve kapsamı bulmanızı sağlıyoruz.
                Ayrıca hasar durumlarında yanınızda olarak süreçleri takip ediyoruz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#0a2d5f] hover:no-underline">
                En uygun teklifi nasıl sunuyorsunuz?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Hepiyi, Doğa ve Sompo Sigorta'dan aldığımız teklifleri karşılaştırarak, bütçenize ve ihtiyaçlarınıza
                en uygun seçeneği belirliyoruz. Uzman ekibimiz her müşteri için özel analiz yaparak en avantajlı
                teklifi sunar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#0a2d5f] hover:no-underline">
                Belgelerimi nasıl gönderirim?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Belgelerinizi WhatsApp, e-posta veya ofisimize gelerek teslim edebilirsiniz. Dijital ortamda güvenli
                bir şekilde belgelerinizi alıyor ve işlemlerinizi hızla tamamlıyoruz. Tüm belgeleriniz KVKK kapsamında
                güvenle saklanmaktadır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#0a2d5f] hover:no-underline">
                Hasar durumunda nasıl destek alırım?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Hasar durumunda 7/24 ulaşabileceğiniz destek hattımız bulunmaktadır. Uzman ekibimiz hasar sürecinin
                her aşamasında yanınızda olur, sigorta şirketi ile iletişiminizi sağlar ve haklarınızı korur.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#0a2d5f] hover:no-underline">
                İzmit ofisinde randevu alabilir miyim?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Tabii ki! RBG İş Merkezi'ndeki ofisimizde yüz yüze görüşme için randevu alabilirsiniz. Telefon veya
                WhatsApp üzerinden iletişime geçerek uygun saatleri öğrenebilir ve randevunuzu planlayabilirsiniz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
