export interface QuestionType {
  id: string
  user: UserType
  title: string
  text: string
  datetime: string
  answers_count: number
}

export type UserType = {
  id: string
  firstName: string
  lastName: string
  profile: string
} | undefined