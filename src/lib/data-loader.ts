import fs from "fs"
import path from "path"

import type { Event, FAQ, Instructor, Lesson, Review, Settings, Textbook } from "@/types"

function resolveDataPath(filename: string) {
  return path.join(process.cwd(), "src", "data", filename)
}

export function loadData<T>(filename: string): T[] {
  const filePath = resolveDataPath(filename)
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents) as T[]
}

export function loadObjectData<T>(filename: string): T {
  const filePath = resolveDataPath(filename)
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents) as T
}

export function getSettings(): Settings {
  return loadObjectData<Settings>("settings.json")
}

export function getEvents(): Event[] {
  return loadData<Event>("events.json")
}

export function getAvailableEvents(limit?: number): Event[] {
  const events = getEvents()
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date))
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted
}

export function getReviews(): Review[] {
  return loadData<Review>("reviews.json")
}

export function getFeaturedReviews(limit = 3): Review[] {
  const reviews = getReviews().filter((review) => review.featured)
  return reviews.sort((a, b) => a.order - b.order).slice(0, limit)
}

export function getReviewById(id: string): Review | undefined {
  return getReviews().find((review) => review.id === id)
}

export function getReviewsByCategory(category: Review["categories"][number]): Review[] {
  return getReviews().filter((review) => review.categories.includes(category))
}

export function getInstructors(): Instructor[] {
  return loadData<Instructor>("instructors.json")
}

export function getLessons(): Lesson[] {
  return loadData<Lesson>("lessons.json")
}

export function getLessonsByPhase(phase: Lesson["phase"], limit?: number): Lesson[] {
  const lessons = getLessons().filter((lesson) => lesson.phase === phase)
  const sorted = lessons.sort((a, b) => a.order - b.order)
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted
}

export function getFAQs(): FAQ[] {
  return loadData<FAQ>("faq.json")
}

export function getFeaturedFAQs(limit = 5): FAQ[] {
  const faqs = getFAQs().filter((faq) => faq.featured)
  return faqs.sort((a, b) => a.order - b.order).slice(0, limit)
}

export function getTextbooks(): Textbook[] {
  return loadData<Textbook>("textbooks.json")
}

