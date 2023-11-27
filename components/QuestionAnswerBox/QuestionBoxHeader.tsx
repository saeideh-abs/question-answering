import { Avatar } from '@/components'
import { IconHappy, IconSad } from '@/icons'
import IconComment from '@/icons/components/IconComment'
import { QuestionType, AnswerType } from '@/types'
import { LOCALE } from '@/utils/constants'

export interface QuestionBoxHeaderProps {
  variant?: 'question' | 'answer'
  data: QuestionType | AnswerType
}
export const QuestionBoxHeader = ({
  variant = 'question',
  data,
}: QuestionBoxHeaderProps) => {
  const date = new Date(data.datetime).toLocaleDateString(LOCALE)
  const time = new Date(data.datetime).toLocaleTimeString(LOCALE, {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="h-12 bg-white rounded-lg shadow-qa px-4 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Avatar
          src={data.user?.profile}
          alt="profile photo"
          width={32}
          height={32}
          roundedFull={false}
        />
        <h2 className="font-bold text-base m-0">
          {variant === 'question'
            ? (data as QuestionType).title
            : `${data.user?.firstName} ${data.user?.lastName}`}
        </h2>
      </div>

      <div className="flex gap-7 items-center">
        <div className="flex items-center gap-3">
          <DateTime label="ساعت :" value={time} />
          <Divider />
          <DateTime label="تاریخ :" value={date} />
        </div>

        {variant === 'question' ? (
          <div className="flex items-center gap-1">
            <IconComment className="w-5 h-5 text-secondary-more-light" />
            <span className="text-xs text-gray-dark font-bold">
              {(data as QuestionType).answers_count}
            </span>
          </div>
        ) : (
          <LikeDislike
            likes={(data as AnswerType).likes.length}
            dislikes={(data as AnswerType).dislikes.length}
          />
        )}
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

export const LikeDislike = ({
  likes,
  dislikes,
}: {
  likes: number
  dislikes: number
}) => {
  return (
    <div className="flex gap-[31px] mr-8">
      <div className="flex items-center gap-2">
        <IconHappy className="w-5 h-5 text-annotation-success" />
        <span className="text-xs text-gray-dark font-bold">{likes}</span>
      </div>

      <div className="flex items-center gap-2">
        <IconSad className="w-5 h-5 text-annotation-error" />
        <span className="text-xs text-gray-dark font-bold">{dislikes}</span>
      </div>
    </div>
  )
}
