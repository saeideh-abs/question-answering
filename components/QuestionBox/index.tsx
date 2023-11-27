import { Button } from '@/components'
import { QuestionType } from '@/types'
import { QuestionBoxHeader } from './QuestionBoxHeader'

export interface QuestionBoxProps {
  question: QuestionType
}

export const QuestionBox = ({ question }: QuestionBoxProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-lightest shadow-qa">
      <QuestionBoxHeader question={question} />

      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm">{question.text}</p>
        <Button
          variant="outlined"
          className="w-[100px] px-0 text-xs font-bold self-end"
        >
          مشاهده جزئیات
        </Button>
      </div>
    </div>
  )
}
