'use client'
import { useQuestionsList } from '@/api/question'
import { Button } from '@/components'
import { QuestionAnswerBox } from '@/components/QuestionAnswerBox'
import { QuestionType } from '@/types'
import { useRouter } from 'next/navigation'

export default function QuestionsList() {
  const { push } = useRouter()
  const { data, error, isLoading } = useQuestionsList()

  if (isLoading) return 'در حال بارگذاری...'
  if (error) return <div>خطایی رخ داده است.</div>
  if (data.length === 0) return <div> داده ای برای نمایش وجود ندارد.</div>

  return (
    <div className="flex flex-col gap-5">
      {data &&
        data.map((item: QuestionType) => (
          <QuestionAnswerBox
            key={item.id}
            data={item}
            footer={
              <Button
                variant="outlined"
                className="w-[100px] px-0 text-xs font-bold self-end"
                onClick={() => push(`/${item.id}`)}
              >
                مشاهده جزئیات
              </Button>
            }
          />
        ))}
    </div>
  )
}
