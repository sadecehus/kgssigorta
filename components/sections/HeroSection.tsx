"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { TypingAnimation } from "../ui/typing-animation"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

const carouselImages = [
  {
    src: "/images/hero-1.png",
    alt: "Ev sigortası",
  },
  {
    src: "/images/hero-2.png",
    alt: "Aile Güvenliği",
  },
  {
    src: "/images/hero-3.png",
    alt: "Ev Güvenliği",
  },
]

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white text-gray-900 overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - İçerik */}
          <div className="text-center sm:mt-8 md:mt-4 lg:mt-2 lg:text-left">
             <TypingAnimation loop={true} duration={150} showCursor={false} className="text-5xl md:text-7xl font-bold  text-[#0a2d5f]" words={['KGS Sigorta' , 'Güvenilir Sigortacınız']}/>
    
            <p className="text-xl md:text-2xl mt-4 mb-2 text-gray-700">Türkiye'nin Güvenilir Sigorta Aracısı</p>
            <p className="text-lg text-gray-600 mb-8">
              Türkiye'nin en iyi sigorta şirketleri ile çalışarak size en uygun teklifi sunuyoruz
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                className="bg-[#0a2d5f] hover:bg-[#1e3a8a] text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Hemen Teklif Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[#0a2d5f] text-[#0a2d5f] hover:bg-[#0a2d5f] hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
                onClick={() => scrollToSection("services")}
              >
                Hizmetlerimizi Keşfedin
              </Button>
            </div>

            {/* İstatistikler */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center lg:text-left bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <Users className="w-6 h-6 text-[#0a2d5f] mx-auto lg:mx-0 mb-1" />
                <div className="text-2xl font-bold text-[#0a2d5f]">500+</div>
                <div className="text-xs text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center lg:text-left bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <Building2 className="w-6 h-6 text-[#0a2d5f] mx-auto lg:mx-0 mb-1" />
                <div className="text-2xl font-bold text-[#0a2d5f]">3</div>
                <div className="text-xs text-gray-600">Partner Şirket</div>
              </div>
              <div className="text-center lg:text-left bg-white rounded-lg p-4 shadow-md border border-gray-100">
                <Clock className="w-6 h-6 text-[#0a2d5f] mx-auto lg:mx-0 mb-1" />
                <div className="text-2xl font-bold text-[#0a2d5f]">24/7</div>
                <div className="text-xs text-gray-600">Destek</div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Carousel */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Görüntüler */}
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Navigasyon Butonları */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Önceki resim"
            >
              <ChevronLeft className="w-6 h-6 text-[#0a2d5f]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 z-10"
              aria-label="Sonraki resim"
            >
              <ChevronRight className="w-6 h-6 text-[#0a2d5f]" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Resim ${index + 1}'e git`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
