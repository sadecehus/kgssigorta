"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Car,
  Heart,
  Home,
  Shield,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Building2,
  Activity,
  Users,
  Clock,
  TrendingUp,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Service data
const serviceDetails = {
  hepiyi: {
    name: "Hepiyi",
    color: "bg-blue-600",
    services: [
      {
        id: "kasko",
        name: "Kasko",
        description: "Siz yolun tadını çıkarın, diğer olasılıklar teminat altında!",
        icon: Car,
        details: "Aracınızın çarpışma, çarpma, devrilme, yangın, hırsızlık ve doğal afetlere karşı kapsamlı korunması.",
        features: ["Tam Kasko", "Kısmi Kasko", "Mini Kasko", "Genç Sürücü Paketi"],
      },
      {
        id: "trafik",
        name: "Trafik Sigortası",
        description: "Zorunlulukları kolaylaştırmak için Hepiyi Sigorta!",
        icon: Car,
        details:
          "Yasal zorunluluk olan trafik sigortası ile üçüncü şahıslara verilen zararların teminat altına alınması.",
        features: ["Zorunlu Mali Sorumluluk", "Hızlı Poliçe Düzenleme", "Online İşlemler", "7/24 Hasar Desteği"],
      },
      {
        id: "saglik",
        name: "Tamamlayıcı Sağlık",
        description: "Hiç eksik kalmasın diye, size özel avantajlar!",
        icon: Heart,
        details: "Devlet hastanelerinde oluşan farkları ve özel hastane masraflarını karşılayan sağlık sigortası.",
        features: ["Özel Hastane Desteği", "Ameliyat Teminatı", "Check-up Hizmetleri", "Diş Tedavi Desteği"],
      },
      {
        id: "yabanci-saglik",
        name: "Yabancı Sağlık",
        description: "Hepiyi Sigorta ile Türkiye'de ikametiniz boyunca sağlık güvenceniz hep yanınızda!",
        icon: Heart,
        details: "Türkiye'de ikamet eden yabancı uyruklu kişiler için özel sağlık sigortası.",
        features: ["Acil Tıbbi Müdahale", "Hastane Masrafları", "Ambulans Hizmeti", "İlaç Masrafları"],
      },
      {
        id: "seyahat",
        name: "Seyahat Sağlık",
        description: "Keyifli ve güvenli seyahatler, Hepiyi ile mümkün!",
        icon: Activity,
        details: "Yurt içi ve yurt dışı seyahatlerinizde sağlık masraflarınızı karşılayan sigorta.",
        features: ["Acil Tıbbi Masraflar", "Hastane Masrafları", "Ambulans Hizmeti", "İlaç Masrafları"],
      },
      {
        id: "konut",
        name: "Konut Sigortası",
        description: "Hepiyi Konut sigortası ile evinizi beklenmedik tehlikelere karşı koruyun!",
        icon: Home,
        details: "Evinizi yangın, hırsızlık, doğal afetler ve diğer risklere karşı koruyan sigorta.",
        features: ["Yangın Teminatı", "Hırsızlık Korunması", "Doğal Afet Desteği", "Eşya Sigortası"],
      },
      {
        id: "dask",
        name: "DASK",
        description: "Her an güvende hissetmek için, Hepiyi Sigorta hep yanınızda!",
        icon: Home,
        details: "Zorunlu deprem sigortası ile konutunuzu deprem riskine karşı koruyun.",
        features: ["Deprem Teminatı", "Zorunlu Sigorta", "Hızlı Hasar Ödemesi", "Kolay Başvuru"],
      },
    ],
  },
  orient: {
    name: "Orient",
    color: "bg-orange-600",
    services: [
      {
        id: "kasko-orient",
        name: "Kasko Sigortası",
        description: "Aracınız için kapsamlı koruma",
        icon: Car,
        details: "Orient Sigorta'nın güvencesi ile aracınızı her türlü riske karşı koruyun.",
        features: ["Tam Kasko", "Kısmi Kasko", "Genç Sürücü", "Ticari Araç"],
      },
      {
        id: "konut-orient",
        name: "Konut Sigortası",
        description: "Eviniz için güvenilir koruma",
        icon: Home,
        details: "Orient Konut Sigortası ile evinizi ve eşyalarınızı koruyun.",
        features: ["Yangın", "Hırsızlık", "Doğal Afet", "Cam Kırılması"],
      },
      {
        id: "dask-orient",
        name: "DASK Sigortası",
        description: "Deprem güvencesi",
        icon: Home,
        details: "Orient DASK ile deprem riskine karşı güvende olun.",
        features: ["Deprem Teminatı", "Hızlı Ödeme", "Kolay Başvuru", "7/24 Destek"],
      },
      {
        id: "isyeri",
        name: "İşyeri Sigortası",
        description: "İşletmeniz için koruma",
        icon: Building2,
        details: "İşyerinizi ve ticari faaliyetlerinizi güvence altına alın.",
        features: ["Yangın", "Hırsızlık", "İş Durması", "Makine Kırılması"],
      },
      {
        id: "seyahat-orient",
        name: "Seyahat Sağlık",
        description: "Güvenli seyahatler",
        icon: Activity,
        details: "Orient Seyahat Sigortası ile keyifli ve güvenli seyahatler.",
        features: ["Sağlık Masrafları", "Bagaj Kaybı", "Seyahat İptali", "Acil Yardım"],
      },
    ],
  },
  sompo: {
    name: "Sompo Sigorta",
    color: "bg-green-600",
    services: [
      {
        id: "bireysel-kasko",
        name: "Bireysel Kasko (307)",
        description: "Bireysel araçlar için kasko sigortası",
        icon: Car,
        details: "Sompo Sigorta'nın güvencesi ile bireysel aracınızı koruyun.",
        features: ["Tam Kasko", "Kısmi Kasko", "Mini Kasko", "Genç Sürücü"],
      },
      {
        id: "ticari-kasko",
        name: "Ticari Kasko (333)",
        description: "Ticari araçlar için kasko sigortası",
        icon: Car,
        details: "Ticari araçlarınız için özel kasko çözümleri.",
        features: ["Ticari Araç", "Filo Sigortası", "Özel İndirimler", "Hızlı Hasar"],
      },
      {
        id: "trafik-sompo",
        name: "Trafik (311)",
        description: "Zorunlu trafik sigortası",
        icon: Car,
        details: "Yasal zorunluluk olan trafik sigortası.",
        features: ["Mali Sorumluluk", "Hızlı Poliçe", "Online İşlem", "7/24 Destek"],
      },
      {
        id: "ferdi-kaza",
        name: "Artı Ferdi Kaza (460)",
        description: "Kaza durumlarında koruma",
        icon: Shield,
        details: "Günlük yaşamda karşılaşabileceğiniz kazalara karşı koruma.",
        features: ["Kaza Teminatı", "Tedavi Masrafları", "Günlük Tazminat", "Maluliyet Desteği"],
      },
      {
        id: "dask-sompo",
        name: "DASK (117)",
        description: "Deprem sigortası",
        icon: Home,
        details: "Sompo DASK ile deprem güvencesi.",
        features: ["Deprem Teminatı", "Hızlı Ödeme", "Kolay Başvuru", "Güvenilir Hizmet"],
      },
      {
        id: "konut-sompo",
        name: "Konut (110)",
        description: "Konut sigortası",
        icon: Home,
        details: "Evinizi ve eşyalarınızı koruyun.",
        features: ["Yangın", "Hırsızlık", "Doğal Afet", "Eşya Sigortası"],
      },
      {
        id: "tehlikeli-hastalik",
        name: "Tehlikeli Hastalıklar (802)",
        description: "Kritik hastalık sigortası",
        icon: Heart,
        details: "Ciddi hastalıklara karşı finansal koruma.",
        features: ["Kanser Teminatı", "Kalp Hastalıkları", "Beyin Hastalıkları", "Tedavi Desteği"],
      },
      {
        id: "tamamlayici-saglik-sompo",
        name: "Tamamlayıcı Sağlık (804)",
        description: "Sağlık sigortası",
        icon: Heart,
        details: "Sağlık masraflarınızı karşılayan sigorta.",
        features: ["Özel Hastane", "Ameliyat Teminatı", "Check-up", "Diş Tedavisi"],
      },
      {
        id: "seyahat-sompo",
        name: "Seyahat Sigortaları (455)",
        description: "Seyahat güvencesi",
        icon: Activity,
        details: "Seyahatlerinizde güvende olun.",
        features: ["Sağlık Masrafları", "Bagaj Güvencesi", "Seyahat İptali", "Acil Yardım"],
      },
      {
        id: "yabanci-saglik-sompo",
        name: "Yabancı Sağlık (805)",
        description: "Yabancılar için sağlık sigortası",
        icon: Heart,
        details: "Türkiye'deki yabancı vatandaşlar için sağlık güvencesi.",
        features: ["Acil Müdahale", "Hastane Masrafları", "İlaç Desteği", "Ambulans Hizmeti"],
      },
    ],
  },
}

export default function KGSInsurancePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    insuranceType: "",
    message: "",
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Formu temizle
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          insuranceType: "",
          message: "",
        })
        // 5 saniye sonra success mesajını gizle
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error(result.error || 'Bir hata oluştu')
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      setSubmitStatus('error')
      // 5 saniye sonra error mesajını gizle
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const openServiceDetail = (company: string, service: any) => {
    setSelectedCompany(company)
    setSelectedService(service)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/kgs-logo.png"
                  alt="KGS Sigorta Logo"
                  width={120}
                  height={40}
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
              >
                Hizmetlerimiz
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
              >
                Partnerlerimiz
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
              >
                S.S.S
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
              >
                İletişim
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#0a2d5f] hover:bg-[#1e3a8a] text-white px-6 py-2 rounded-lg"
              >
                Teklif Al
              </Button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
                >
                  Ana Sayfa
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
                >
                  Hizmetlerimiz
                </button>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
                >
                  Partnerlerimiz
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
                >
                  S.S.S
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
                >
                  İletişim
                </button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-[#0a2d5f] hover:bg-[#1e3a8a] text-white px-6 py-2 rounded-lg w-fit"
                >
                  Teklif Al
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-white text-gray-900 overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg">
              <Image
                src="/images/kgs-logo.png"
                alt="KGS Sigorta"
                width={96}
                height={96}
                objectFit="contain"
                className="w-24"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#0a2d5f]">KGS SİGORTA</h1>
            <p className="text-xl md:text-2xl mb-2 text-gray-700">Türkiye'nin Güvenilir Sigorta Aracısı</p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Türkiye'nin en iyi sigorta şirketleri ile çalışarak size en uygun teklifi sunuyoruz
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <Users className="w-8 h-8 text-[#0a2d5f] mx-auto mb-2" />
              <div className="text-3xl font-bold text-[#0a2d5f]">500+</div>
              <div className="text-sm text-gray-600">Mutlu Müşteri</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <Building2 className="w-8 h-8 text-[#0a2d5f] mx-auto mb-2" />
              <div className="text-3xl font-bold text-[#0a2d5f]">3</div>
              <div className="text-sm text-gray-600">Partner Sigorta Şirketi</div>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-md border border-gray-100">
              <Clock className="w-8 h-8 text-[#0a2d5f] mx-auto mb-2" />
              <div className="text-3xl font-bold text-[#0a2d5f]">24/7</div>
              <div className="text-sm text-gray-600">Müşteri Desteği</div>
            </div>
         
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a2d5f] mb-4">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Araç, sağlık ve konut sigortalarında uzman ekibimizle size en uygun çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Sompo Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-lg hover:scale-105 bg-white flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/sompo-logo.png"
                    alt="Sompo Sigorta Logo"
                    width={80}
                    height={64}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl text-[#0a2d5f]">Sompo Sigortaları</CardTitle>
                <CardDescription className="text-gray-600">Uluslararası deneyim</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 flex-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Bireysel & Ticari Kasko</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sağlık Sigortaları</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Konut & DASK</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Ferdi Kaza & Seyahat</span>
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 rounded-lg">Detayları İncele</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-green-600">Sompo Sigorta Hizmetleri</DialogTitle>
                      <DialogDescription>Sompo Sigorta'nın sunduğu tüm sigorta ürünleri ve detayları</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {serviceDetails.sompo.services.map((service) => (
                        <Card key={service.id} className="border border-gray-200">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <service.icon className="w-5 h-5 text-green-600" />
                              </div>
                              <CardTitle className="text-lg text-green-600">{service.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                            <p className="text-sm text-gray-700 mb-3">{service.details}</p>
                            <div className="space-y-1">
                              {service.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  <span className="text-xs text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
            {/* Hepiyi Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-lg hover:scale-105 bg-white flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/hepiyi-logo.png"
                    alt="Hepiyi Sigorta Logo"
                    width={80}
                    height={64}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl text-[#0a2d5f]">Hepiyi Sigortaları</CardTitle>
                <CardDescription className="text-gray-600">Kapsamlı sigorta çözümleri</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 flex-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Kasko & Trafik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sağlık Sigortaları</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Konut & DASK</span>
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 rounded-lg">Detayları İncele</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-blue-600">Hepiyi Sigorta Hizmetleri</DialogTitle>
                      <DialogDescription>
                        Hepiyi Sigorta'nın sunduğu tüm sigorta ürünleri ve detayları
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {serviceDetails.hepiyi.services.map((service) => (
                        <Card key={service.id} className="border border-gray-200">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <service.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <CardTitle className="text-lg text-blue-600">{service.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                            <p className="text-sm text-gray-700 mb-3">{service.details}</p>
                            <div className="space-y-1">
                              {service.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  <span className="text-xs text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Orient Services */}
            <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-lg hover:scale-105 bg-white flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/orient-logo.png"
                    alt="Orient Sigorta Logo"
                    width={80}
                    height={64}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl text-[#0a2d5f]">Orient Sigortaları</CardTitle>
                <CardDescription className="text-gray-600">Güvenilir koruma planları</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 flex-1 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Araç Sigortaları</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Konut & İşyeri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Seyahat & Sağlık</span>
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 rounded-lg">
                      Detayları İncele
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-orange-600">Orient Sigorta Hizmetleri</DialogTitle>
                      <DialogDescription>
                        Orient Sigorta'nın sunduğu tüm sigorta ürünleri ve detayları
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {serviceDetails.orient.services.map((service) => (
                        <Card key={service.id} className="border border-gray-200">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <service.icon className="w-5 h-5 text-orange-600" />
                              </div>
                              <CardTitle className="text-lg text-orange-600">{service.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                            <p className="text-sm text-gray-700 mb-3">{service.details}</p>
                            <div className="space-y-1">
                              {service.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  <span className="text-xs text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a2d5f] mb-4">Hangi Şirketlerle Çalışıyoruz</h2>
            <p className="text-xl text-gray-600 mb-8">En iyi teklif için sizin adınıza karşılaştırma yaparız</p>
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
                    src="/images/orient-logo.png"
                    alt="Orient Sigorta Logo"
                    width={128}
                    height={96}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#0a2d5f] mb-2">Orient</h3>
                <p className="text-gray-600">Kapsamlı koruma planları</p>
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
                <h3 className="text-2xl font-bold text-[#0a2d5f] mb-2">Sompo Sigorta</h3>
                <p className="text-gray-600">Uluslararası deneyim</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-blue-50 text-[#0a2d5f] border border-blue-200">
              <Star className="w-5 h-5 mr-2" />
              İzmit Kocaeli'nin güvenilir sigorta aracısı
            </Badge>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                  Hepiyi, Orient ve Sompo Sigorta'dan aldığımız teklifleri karşılaştırarak, bütçenize ve ihtiyaçlarınıza
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a2d5f] mb-4">Bize Ulaşın</h2>
            <p className="text-xl text-gray-600">Size en uygun sigorta teklifini hazırlayalım</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0a2d5f]">Teklif Formu</CardTitle>
                <CardDescription>Bilgilerinizi doldurun, size en uygun teklifi hazırlayalım</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                        <div>
                          <h4 className="text-green-800 font-semibold">Mesajınızı aldık!</h4>
                          <p className="text-green-700 text-sm mt-1">
                            E-posta adresinize onay mesajı gönderildi. En kısa sürede size geri dönüş yapacağız.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <X className="w-6 h-6 text-red-600 mr-3" />
                        <div>
                          <h4 className="text-red-800 font-semibold">Bir hata oluştu!</h4>
                          <p className="text-red-700 text-sm mt-1">
                            Mesajınız gönderilemedi. Lütfen tekrar deneyin veya WhatsApp ile iletişime geçin.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Ad</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="mt-1 border-gray-300"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Soyad</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="mt-1 border-gray-300"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 border-gray-300"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-Posta</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 border-gray-300"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="insuranceType">Sigorta Türü</Label>
                    <Select 
                      onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                      value={formData.insuranceType}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger className="mt-1 border-gray-300">
                        <SelectValue placeholder="Sigorta türünü seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kasko">Kasko</SelectItem>
                        <SelectItem value="trafik">Trafik</SelectItem>
                        <SelectItem value="saglik">Sağlık</SelectItem>
                        <SelectItem value="konut">Konut</SelectItem>
                        <SelectItem value="dask">DASK</SelectItem>
                        <SelectItem value="seyahat">Seyahat</SelectItem>
                        <SelectItem value="diger">Diğer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mesaj</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 border-gray-300"
                      rows={4}
                      placeholder="İhtiyaçlarınızı detaylı olarak belirtebilirsiniz..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#0a2d5f] hover:bg-[#1e3a8a] text-lg py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Gönderiliyor...
                      </div>
                    ) : (
                      <>
                        Teklif Talep Et
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => window.open("https://wa.me/905535574541", "_blank")}
                    disabled={isSubmitting}
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp ile İletişime Geç
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-lg border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#0a2d5f] rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2d5f]">Telefon</h3>
                      <p className="text-gray-600">+90 553 557 45 41</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#0a2d5f] rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2d5f]">E-Posta</h3>
                      <p className="text-gray-600">info@kgssigorta.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#0a2d5f] rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a2d5f]">Adres</h3>
                      <p className="text-gray-600">
                        Mehmet Ali Paşa Mah. Erkan sok.
                        <br />
                        RBG İş Merkezi no:7/7 İzmit/Kocaeli
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200 bg-[#0a2d5f] text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-xl">Çalışma Saatleri</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Pazartesi - Cuma</span>
                      <span>09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cumartesi</span>
                      <span>09:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pazar</span>
                      <span>Kapalı</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-blue-100">
                      <Activity className="inline w-4 h-4 mr-1" />
                      Acil durumlar için 7/24 destek hattımız aktif
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a2d5f] mb-4">Lokasyonumuz</h2>
            <p className="text-lg text-gray-600">RBG İş Merkezi'ndeki ofisimize kolayca ulaşabilirsiniz</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <div className="aspect-video bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8234567890123!2d29.9534219!3d40.7637135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb4f000ea44a99%3A0xb448015c176cedd9!2sRBG%20%C4%B0%C5%9F%20Merkezi!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
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

      {/* Footer */}
      <footer className="bg-[#0a2d5f] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/kgs-logo.png"
                  alt="KGS Sigorta Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-blue-100 mb-6 max-w-md">
                Hepiyi, Orient ve Sompo Sigorta ile çalışarak müşterilerimize en uygun sigorta çözümlerini sunuyoruz.
                İzmit Kocaeli'de güvenilir hizmet.
              </p>
         
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    Hizmetlerimiz
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    İletişim
                  </button>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +90 553 557 45 41
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@kgssigorta.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>
                    Mehmet Ali Paşa Mah. Erkan sok.
                    <br />
                    RBG İş Merkezi no:7/7 İzmit/Kocaeli
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200 text-sm">{new Date().getFullYear()} KGS Sigorta. Tüm hakları saklıdır.</p>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  KVKK Metni
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                  Kullanım Şartları
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
