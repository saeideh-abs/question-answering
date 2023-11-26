export interface Question {
  id: string
  user: { profile: string }
  title: string
  text: string
  date: string
  time: string
  answers_count: number
}