import { Button, Input, Textarea, ErrorMessage } from '@/components'
import { cn } from '@/utils'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useQuestionsStore } from '@/stores/questions'
import { useAuthStore } from '@/stores/auth'
import { QuestionType, UserType } from '@/types'
import { useCreateQuestion } from '@/api/question'
import { IconSpinner } from '@/icons'

const formSchema = z.object({
  subject: z.string().min(3, { message: 'موضوع حداقل باید 3 کاراکتر باشد.' }),
  text: z.string().min(10, { message: 'متن سوال حداقل باید 10 کاراکتر باشد.' }),
})

const buttonStyle = `text-xs font-bold leading-5 w-[100px]`
const labelStyle = `text-xs font-bold text-gray-darker leading-6`

export const NewQuestion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      text: '',
    },
  })

  const setOpenModal = useQuestionsStore(state => state.setOpenModal)
  const user: UserType = useAuthStore(state => state.user)
  const createQuestionMu = useCreateQuestion()

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const question: QuestionType = {
      id: String(new Date().getTime()),
      user: user,
      title: data.subject,
      text: data.text,
      datetime: new Date().toISOString(),
      answers_count: 0,
    }
    createQuestionMu.mutate(question, {
      onSuccess() {
        console.log('inserted successfully')
        setOpenModal(false)
      },
      onError: (error: any) => {
        console.log(error)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className={labelStyle}>موضوع</label>
          <Input {...register('subject')} error={!!errors.subject} />
          <ErrorMessage text={errors.subject?.message} />
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelStyle}>متن سوال</label>
          <Textarea rows={7} {...register('text')} error={!!errors.text} />
          <ErrorMessage text={errors.text?.message} />
        </div>

        <div className="flex items-center gap-4 self-end mt-2">
          <Button
            variant="text"
            className={cn(buttonStyle, 'px-8 py-2')}
            onClick={() => setOpenModal(false)}
          >
            انصراف
          </Button>
          <Button variant="contained" className={buttonStyle} type="submit">
            {createQuestionMu.isPending ? (
              <IconSpinner className="w-5 h-5" />
            ) : (
              'ایجاد سوال'
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
