export interface QuestionType {
  id: string
  user: UserType
  title: string
  text: string
  datetime: string
  answers_count: number
}

export interface AnswerType extends Omit<QuestionType, 'answers_count' | 'title'> {
  qid: string
  likes: string[] // list of user ids
  dislikes: string[] // list of user ids
}

export type UserType = {
  id: string
  firstName: string
  lastName: string
  profile: string
} | undefined