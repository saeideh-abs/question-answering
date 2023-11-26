'use client'
import { useQuestionsList } from '@/api/question'
import { QuestionBox } from '@/components/QuestionBox'
import { Question } from '@/types'

export default function QuestionsList() {
  const { data, error, isLoading } = useQuestionsList()

  if (isLoading) return 'در حال بارگذاری...'
  if (error) return <div>خطایی رخ داده است.</div>

  return (
    <div className="flex flex-col gap-5">
      {data &&
        data.map((item: Question) => (
          <QuestionBox key={item.id} question={item} />
        ))}
    </div>
  )
}
