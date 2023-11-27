'use client'
import { useQuestionsList } from '@/api/question'
import { Button, Modal } from '@/components'
import { QuestionBox } from '@/components/QuestionBox'
import { useQuestionsStore } from '@/stores/questions'
import { QuestionType } from '@/types'
import { useShallow } from 'zustand/react/shallow'
import { NewQuestion } from './newQuestion'
import { useRouter } from 'next/navigation'

export default function QuestionsList() {
  const { push } = useRouter()
  const { data, error, isLoading } = useQuestionsList()
  const { openModal, setOpenModal } = useQuestionsStore(
    useShallow(state => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
    })),
  )

  if (isLoading) return 'در حال بارگذاری...'
  if (error) return <div>خطایی رخ داده است.</div>
  if (data.length === 0) return <div> داده ای برای نمایش وجود ندارد.</div>

  return (
    <div className="flex flex-col gap-5">
      {data &&
        data.map((item: QuestionType) => (
          <QuestionBox
            key={item.id}
            question={item}
            footer={
              <Button
                variant="outlined"
                className="w-[100px] px-0 text-xs font-bold self-end"
                onClick={() => push(`/${item.id}`)}
              >
                مشاهده جزئیات
              </Button>
            }
          />
        ))}

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        showHeader
        title="ایجاد سوال جدید"
      >
        <div className="w-[700px] rounded-lg px-5 pt-5 pb-6 bg-gray-lightest">
          <NewQuestion />
        </div>
      </Modal>
    </div>
  )
}
