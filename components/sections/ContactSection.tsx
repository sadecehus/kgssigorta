"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, CheckCircle, MessageCircle, ArrowRight, Activity, X } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  insuranceType: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    insuranceType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          insuranceType: "",
          message: "",
        })
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        throw new Error(result.error || "Bir hata oluştu")
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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
                {submitStatus === "success" && (
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
                {submitStatus === "error" && (
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
  )
}
