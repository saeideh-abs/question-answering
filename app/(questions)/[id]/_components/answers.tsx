import { useAnswersList, useUpdateAnswer } from '@/api/answer'
import { QuestionAnswerBox } from '@/components/QuestionAnswerBox'
import { AnswerType } from '@/types'
import { FeedBack } from './feedback'
import { useUser } from '@/api/user'

export default function Answers({ qid }: { qid: string }) {
  const { data } = useAnswersList(qid)
  const { data: user } = useUser()
  const updateAnswerMu = useUpdateAnswer()

  const handleLikeDislike = (answer: AnswerType, type: 'like' | 'dislike') => {
    if (type === 'like') {
      const likes = new Set(answer.likes)
      likes.add(user.id)
      const dislikes = answer.dislikes.filter(i => i !== user.id)
      updateAnswerMu.mutate({ id: answer.id, likes: [...likes], dislikes })
    } else {
      const dislikes = new Set(answer.dislikes)
      dislikes.add(user.id)
      const likes = answer.likes.filter(i => i !== user.id)
      updateAnswerMu.mutate({ id: answer.id, likes, dislikes: [...dislikes] })
    }
  }

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
              footer={
                <FeedBack
                  onLike={() => handleLikeDislike(answer, 'like')}
                  onDislike={() => handleLikeDislike(answer, 'dislike')}
                />
              }
            />
          ))
        )}
      </div>
    </div>
  )
}
