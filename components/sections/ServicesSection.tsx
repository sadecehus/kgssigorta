"use client"

import ServiceCard from "./ServiceCard"
import { serviceDetails } from "@/data/serviceData"

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0a2d5f] mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Araç, sağlık ve konut sigortalarında uzman ekibimizle size en uygun çözümleri sunuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard company={serviceDetails.sompo} companyKey="sompo" />
          <ServiceCard company={serviceDetails.hepiyi} companyKey="hepiyi" />
          <ServiceCard company={serviceDetails.doga} companyKey="doga" />
        </div>
      </div>
    </section>
  )
}
