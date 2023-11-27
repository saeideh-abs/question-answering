'use client'
import { useQuestionsList } from '@/api/question'
import { QuestionAnswerBox } from '@/components/QuestionAnswerBox'
import Answers from './_components/answers'
import NewAnswer from './_components/newAnswer'

export default function Detail({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useQuestionsList(params.id)

  if (isLoading) return 'در حال بارگذاری...'
  if (error) return <div>خطایی رخ داده است.</div>

  return (
    <div className="flex flex-col gap-6">
      <QuestionAnswerBox data={data} />
      <Answers qid={params.id} />
      <NewAnswer qid={params.id} />
    </div>
  )
}
