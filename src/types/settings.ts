export interface Stat {
  label: string
  value: number
  unit?: string
  description?: string
}

export interface HeroContent {
  title: string
  subtitle: string
  note?: string
}

export interface CTAContent {
  primary: string
  secondary?: string
}

export interface ContactInfo {
  phone: string
  hours: string
}

export interface Settings {
  hero: HeroContent
  stats: Stat[]
  cta: CTAContent
  contact: ContactInfo
}

