import type { LucideIcon } from "lucide-react"

export interface ServiceFeature {
  id: string
  name: string
  description: string
  icon: LucideIcon
  details: string
  features: string[]
}

export interface CompanyServices {
  name: string
  color: string
  services: ServiceFeature[]
}

export interface ServiceDetails {
  [key: string]: CompanyServices
}
