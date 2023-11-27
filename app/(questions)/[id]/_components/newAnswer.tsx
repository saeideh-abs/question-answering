import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button, ErrorMessage, Textarea } from '@/components'
import { useCreateAnswer } from '@/api/answer'
import { AnswerType, UserType } from '@/types'
import { useAuthStore } from '@/stores/auth'

const formSchema = z.object({
  text: z.string().min(2, { message: 'متن پاسخ حداقل باید 2 کاراکتر باشد.' }),
})

export default function NewAnswer({ qid }: { qid: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  })

  const user: UserType = useAuthStore(state => state.user)
  const createAnswerMu = useCreateAnswer()

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
    const answer: AnswerType = {
      id: String(new Date().getTime()),
      qid: qid,
      user: user,
      text: data.text,
      datetime: new Date().toISOString(),
      likes: [],
      dislikes: [],
    }

    createAnswerMu.mutate(answer, {
      onSuccess() {
        reset()
        console.log('inserted successfully')
      },
      onError: (error: any) => {
        console.log(error)
      },
    })
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-extrabold m-0 mb-[18px]">
        پاسخ خود را ثبت کنید
      </h2>
      <div className="mb-2.5 text-xs font-bold text-gray-darker leading-6">
        پاسخ خود را بنویسید
      </div>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Textarea
            rows={7}
            placeholder="متن پاسخ..."
            {...register('text')}
            error={!!errors.text}
          />
          <ErrorMessage text={errors.text?.message} />
        </div>

        <Button variant="contained" className="w-[200px]" type="submit">
          ارسال پاسخ
        </Button>
      </form>
    </div>
  )
}
