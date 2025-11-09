export type EventStatus = "available" | "few" | "full" | "closed"
export type EventLocation = "online" | "tokyo" | "osaka"

export interface Event {
  id: string
  title: string
  date: string
  startTime: string
  endTime: string
  location: EventLocation
  venue: string
  instructor: string
  capacity: number
  remainingSeats: number
  status: EventStatus
  entryUrl: string
}

