"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
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
              Hepiyi ve Sompo Sigorta ile çalışarak müşterilerimize en uygun sigorta çözümlerini sunuyoruz. İzmit
              Kocaeli'de güvenilir hizmet.
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
  )
}
