"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import type { CompanyServices } from "@/types/services"

interface ServiceCardProps {
  company: CompanyServices
  companyKey: string
}

export default function ServiceCard({ company, companyKey }: ServiceCardProps) {
  const getColorClass = () => {
    switch (companyKey) {
      case "hepiyi":
        return "bg-blue-600 hover:bg-blue-700 text-blue-600"
      case "doga":
        return "bg-orange-600 hover:bg-orange-700 text-orange-600"
      case "sompo":
        return "bg-green-600 hover:bg-green-700 text-green-600"
      default:
        return "bg-blue-600 hover:bg-blue-700 text-blue-600"
    }
  }

  const getBgClass = () => {
    switch (companyKey) {
      case "hepiyi":
        return "bg-blue-100"
      case "doga":
        return "bg-orange-100"
      case "sompo":
        return "bg-green-100"
      default:
        return "bg-blue-100"
    }
  }

  const getButtonClass = () => {
    return getColorClass().split(" ").slice(0, 2).join(" ")
  }

  const getTextClass = () => {
    return getColorClass().split(" ")[2]
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-lg hover:scale-105 bg-white flex flex-col h-full">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-20 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Image
            src={`/images/${companyKey}-logo.png`}
            alt={`${company.name} Logo`}
            width={80}
            height={64}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <CardTitle className="text-2xl text-[#0a2d5f]">{company.name} Sigortaları</CardTitle>
        <CardDescription className="text-gray-600">
          {companyKey === "hepiyi" && "Kapsamlı sigorta çözümleri"}
          {companyKey === "doga" && "Güvenilir koruma planları"}
          {companyKey === "sompo" && "Uluslararası deneyim"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-2 flex-1 text-sm">
          {companyKey === "hepiyi" && (
            <>
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
            </>
          )}
          {companyKey === "doga" && (
            <>
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
            </>
          )}
          {companyKey === "sompo" && (
            <>
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
            </>
          )}
        </ul>
        <Dialog>
          <DialogTrigger asChild>
            <Button className={`w-full mt-6 ${getButtonClass()} rounded-lg`}>Detayları İncele</Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className={`text-2xl ${getTextClass()}`}>{company.name} Sigorta Hizmetleri</DialogTitle>
              <DialogDescription>{company.name} Sigorta'nın sunduğu tüm sigorta ürünleri ve detayları</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {company.services.map((service) => (
                <Card key={service.id} className="border border-gray-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${getBgClass()} rounded-lg flex items-center justify-center`}>
                        <service.icon className={`w-5 h-5 ${getTextClass()}`} />
                      </div>
                      <CardTitle className={`text-lg ${getTextClass()}`}>{service.name}</CardTitle>
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
  )
}
