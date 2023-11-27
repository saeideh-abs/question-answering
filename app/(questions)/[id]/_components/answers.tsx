import { useAnswersList } from '@/api/answer'
import { Button } from '@/components'
import { QuestionAnswerBox } from '@/components/QuestionAnswerBox'
import { IconHappy, IconSad } from '@/icons'
import { AnswerType } from '@/types'
import { cn } from '@/utils'

export default function Answers({ qid }: { qid: string }) {
  const { data } = useAnswersList(qid)

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-extrabold m-0">پاسخ‌ها</h2>
      <div className="flex flex-col gap-5">
        {data?.length === 0 ? (
          <div>پاسخی برای این سوال ثبت نشده است.</div>
        ) : (
          data?.map((answer: AnswerType) => (
            <QuestionAnswerBox
              variant="answer"
              key={answer.id}
              data={answer}
              footer={<FeedBack />}
            />
          ))
        )}
      </div>
    </div>
  )
}

const FeedBack = () => {
  const buttonStyle = `text-xs font-bold p-0 w-[126px] h-9 leading-4 border-secondary-so-light hover:border-secondary-so-light`

  return (
    <div className="flex gap-3 self-end">
      <Button
        variant="outlined"
        color="success"
        className={cn('text-annotation-success', buttonStyle)}
      >
        <div className="flex gap-2 items-center">
          <IconHappy className="w-5 h-5 text-annotation-success" />
          پاسخ خوب بود
        </div>
      </Button>
      <Button
        variant="outlined"
        color="error"
        className={cn('text-annotation-error', buttonStyle)}
      >
        <div className="flex gap-2 items-center">
          <IconSad className="w-5 h-5 text-annotation-error" />
          پاسخ خوب نبود
        </div>
      </Button>
    </div>
  )
}
