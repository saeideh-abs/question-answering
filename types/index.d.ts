export interface QuestionType {
  id: string
  user: { profile: string }
  title: string
  text: string
  date: string
  time: string
  answers_count: number
}

export type UserType = {
  id: string
  firstName: string
  lastName: string
  profilePhoto: string
} 