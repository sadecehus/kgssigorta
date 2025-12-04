"use client";

import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a2d5f] mb-4">
            Hangi Şirketlerle Çalışıyoruz
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            En iyi teklif için sizin adınıza karşılaştırma yaparız
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/images/hepiyi-logo.png"
                  alt="Hepiyi Sigorta Logo"
                  width={128}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0a2d5f] mb-2">Hepiyi</h3>
              <p className="text-gray-600">Güvenilir sigorta çözümleri</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/images/doga-logo.png"
                  alt="Doğa Sigorta Logo"
                  width={128}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0a2d5f] mb-2">Doğa Sigorta</h3>
              <p className="text-gray-600">Ekonomik sigorta fırsatları</p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <div className="w-32 h-24 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/images/sompo-logo.png"
                  alt="Sompo Sigorta Logo"
                  width={128}
                  height={96}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0a2d5f] mb-2">
                Sompo Sigorta
              </h3>
              <p className="text-gray-600">Uluslararası deneyim</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Badge
            variant="secondary"
            className="text-lg px-6 py-2 bg-blue-50 text-[#0a2d5f] border border-blue-200"
          >
            <Star className="w-5 h-5 mr-2" />
            İzmit Kocaeli'nin güvenilir sigorta aracısı
          </Badge>
        </div>
      </div>
    </section>
  );
}
