import { Button } from '@/components'
import { QuestionType } from '@/types'
import { QuestionBoxHeader } from './QuestionBoxHeader'
import { ReactNode } from 'react'

export interface QuestionBoxProps {
  question: QuestionType
  footer?: ReactNode
}

export const QuestionBox = ({ question, footer }: QuestionBoxProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-lightest shadow-qa">
      <QuestionBoxHeader question={question} />

      <div className="flex flex-col gap-4 p-4">
        <p className="text-sm whitespace-pre">{question.text}</p>

        {footer}
      </div>
    </div>
  )
}
