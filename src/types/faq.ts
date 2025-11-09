export type FAQCategory = "fee" | "content" | "format" | "support" | "refund" | "other"

export interface FAQ {
  id: string
  category: FAQCategory
  categoryLabel: string
  question: string
  answer: string
  order: number
  featured: boolean
}

