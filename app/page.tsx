"use client"

import Navbar from "@/components/sections/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import PartnersSection from "@/components/sections/PartnersSection"
import FAQSection from "@/components/sections/FAQSection"
import ContactSection from "@/components/sections/ContactSection"
import MapSection from "@/components/sections/MapSection"
import Footer from "@/components/sections/Footer"

export default function KGSInsurancePage() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <MapSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
