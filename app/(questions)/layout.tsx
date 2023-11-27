'use client'
import { PropsWithChildren } from 'react'
import { useQuestionsStore } from '@/stores/questions'
import { useShallow } from 'zustand/react/shallow'
import { NewQuestion } from './newQuestion'
import { Modal } from '@/components'

export default function Layout({ children }: PropsWithChildren) {
  const { openModal, setOpenModal } = useQuestionsStore(
    useShallow(state => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
    })),
  )

  return (
    <>
      {children}
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
    </>
  )
}
