import { QuestionBox } from '@/components/QuestionBox'
import { Question } from '@/types'

const questions: Question[] = [
  {
    id: '79879xx89x879',
    title: 'مشکل در Auth در React',
    text: 'هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس',
    date: '۱۴۰۰/۲/۱۵ ',
    time: '۱۶:۴۸',
    answers_count: 20,
  },
  {
    id: '79879xx89x879',
    title: 'مشکل Auth  در React',
    text: 'هراد دوجو یلکشم هچ اقیقد دینیبب هک متشاذگ مه ور console یجورخ سکع .تساجک زا لکشم منودیمن .هدیم مهب ور error نیا اما مزاسب react وت هداس authentication هی ماوخیم نم مالس',
    date: '۱۴۰۰/۲/۱۵ ',
    time: '۱۶:۴۸',
    answers_count: 20,
  },
]

export default function QuestionsList() {
  return (
    <div className="flex flex-col gap-5">
      {questions.map(item => (
        <QuestionBox key={item.id} question={item} />
      ))}
    </div>
  )
}
