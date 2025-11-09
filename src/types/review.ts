export type ReviewCategory =
  | "beginner"
  | "intermediate"
  | "female"
  | "businessman"
  | "self-employed"

export interface Review {
  id: string
  name: string
  age?: number
  occupation: string
  photo?: string
  rating: number
  commentShort: string
  commentLong: string
  beforeStatus: string
  afterStatus: string
  categories: ReviewCategory[]
  attendancePeriod?: string
  featured: boolean
  order: number
  publishedAt: string
}

