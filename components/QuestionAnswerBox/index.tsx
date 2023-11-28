import { AnswerType, QuestionType } from '@/types'
import { QuestionBoxHeader } from './QuestionBoxHeader'

export type QuestionAnswerBoxProps<
  T extends 'question' | 'answer' = 'question',
> = {
  variant?: T
  data: T extends 'question' ? QuestionType : AnswerType
  footer?: React.ReactNode
}

export const QuestionAnswerBox = <T extends 'question' | 'answer'>({
  variant,
  data,
  footer,
}: QuestionAnswerBoxProps<T>) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-lightest shadow-qa">
      <QuestionBoxHeader variant={variant} data={data} />

      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm whitespace-pre-wrap">{data.text}</p>

        {footer}
      </div>
    </div>
  )
}
