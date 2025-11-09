export type LessonPhase = "basic" | "practical" | "advanced"

export interface Lesson {
  no: number
  phase: LessonPhase
  title: string
  summary: string
  learningObjectives: string[]
  order: number
}

