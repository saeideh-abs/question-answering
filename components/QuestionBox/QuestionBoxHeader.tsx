import { Avatar } from '@/components'
import IconComment from '@/icons/components/IconComment'
import { Question } from '@/types'

export interface QuestionBoxHeaderProps {
  question: Omit<Question, 'text'>
}
export const QuestionBoxHeader = ({ question }: QuestionBoxHeaderProps) => {
  return (
    <div className="h-12 bg-white rounded-lg shadow-qa px-4 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Avatar
          src={question.user.profile}
          alt="profile photo"
          width={32}
          height={32}
          roundedFull={false}
        />
        <h2 className="font-bold text-base m-0">{question.title}</h2>
      </div>

      <div className="flex gap-7 items-center">
        <div className="flex items-center gap-3">
          <DateTime label="ساعت :" value={question.time} />
          <Divider />
          <DateTime label="تاریخ :" value={question.date} />
        </div>

        <div className="flex items-center gap-1">
          <IconComment className="w-5 h-5 text-secondary-more-light" />
          <span className="text-xs text-gray-dark font-bold">
            {question.answers_count}
          </span>
        </div>
      </div>
    </div>
  )
}

export const DateTime = ({
  label,
  value,
}: {
  label: string
  value: string
}) => {
  return (
    <div className="flex gap-1">
      <div className="text-xs text-gray-dark">{label}</div>

      <div className="text-xs font-bold">{value}</div>
    </div>
  )
}

export const Divider = () => {
  return <div className="w-0.5 h-6 bg-black/10"></div>
}
