"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface NavbarProps {
  scrollToSection: (sectionId: string) => void
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
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
              onClick={() => handleNavClick("hero")}
              className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={() => handleNavClick("partners")}
              className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
            >
              Partnerlerimiz
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
            >
              S.S.S
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium"
            >
              İletişim
            </button>
            <Button
              onClick={() => handleNavClick("contact")}
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
                onClick={() => handleNavClick("hero")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
              >
                Hizmetlerimiz
              </button>
              <button
                onClick={() => handleNavClick("partners")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
              >
                Partnerlerimiz
              </button>
              <button
                onClick={() => handleNavClick("faq")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
              >
                S.S.S
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-gray-700 hover:text-[#0a2d5f] transition-colors font-medium text-left"
              >
                İletişim
              </button>
              <Button
                onClick={() => handleNavClick("contact")}
                className="bg-[#0a2d5f] hover:bg-[#1e3a8a] text-white px-6 py-2 rounded-lg w-fit"
              >
                Teklif Al
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
